import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Fetch contributors from GitHub API
    const contributorsResponse = await fetch(
      'https://api.github.com/repos/bitcoin-apps-suite/bapps/contributors',
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 300 } // Cache for 5 minutes
      }
    )

    if (!contributorsResponse.ok) {
      throw new Error('Failed to fetch contributors')
    }

    const contributors = await contributorsResponse.json()

    // Fetch PRs to get more detailed contribution info
    const prsResponse = await fetch(
      'https://api.github.com/repos/bitcoin-apps-suite/bapps/pulls?state=closed&per_page=100',
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 300 }
      }
    )

    let mergedPRs = []
    if (prsResponse.ok) {
      const prs = await prsResponse.json()
      mergedPRs = prs.filter((pr: any) => pr.merged_at !== null)
    }

    // Calculate estimated tokens for each contributor
    // This is a mock calculation - in production you'd track actual allocations
    const contributorsWithTokens = contributors.map((contributor: any) => {
      const userPRs = mergedPRs.filter((pr: any) => pr.user?.login === contributor.login)
      
      // Estimate tokens based on contributions
      let estimatedTokens = 0
      if (contributor.contributions >= 50) {
        estimatedTokens = contributor.contributions * 50000 // Major contributor
      } else if (contributor.contributions >= 10) {
        estimatedTokens = contributor.contributions * 25000 // Regular contributor
      } else {
        estimatedTokens = contributor.contributions * 10000 // New contributor
      }

      return {
        login: contributor.login,
        avatar_url: contributor.avatar_url,
        html_url: contributor.html_url,
        contributions: contributor.contributions,
        merged_prs: userPRs.length,
        estimated_tokens: estimatedTokens
      }
    })

    return NextResponse.json(contributorsWithTokens)
  } catch (error) {
    console.error('Error fetching contributors:', error)
    return NextResponse.json(
      { error: 'Failed to fetch contributors' },
      { status: 500 }
    )
  }
}