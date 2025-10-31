'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './page.css'

export default function BitcoinAppsSuitePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Bitcoin Office ($bOffice)",
      subtitle: "The Future of Decentralized Applications",
      content: "A comprehensive ecosystem of Bitcoin-powered applications that revolutionize how we interact with digital tools and services.",
      image: "/bitcoin-apps-logo.jpg"
    },
    {
      title: "Featured Applications",
      subtitle: "Professional Tools on Bitcoin",
      content: "Bitcoin Writer for document creation, Bitcoin Spreadsheets for data management, and Bitcoin Wallet for secure transactions.",
      features: [
        "Bitcoin Writer - Document creation and encryption",
        "Bitcoin Spreadsheets - Blockchain-based data management", 
        "Bitcoin Wallet - Secure transaction management",
        "Bitcoin Music - Decentralized music platform"
      ]
    },
    {
      title: "Blockchain Technology",
      subtitle: "Built on Bitcoin's Foundation",
      content: "Every application leverages Bitcoin's security, immutability, and decentralization to provide unprecedented trust and reliability.",
      features: [
        "Immutable data storage",
        "Decentralized architecture", 
        "Cryptographic security",
        "Global accessibility"
      ]
    },
    {
      title: "Enterprise Ready",
      subtitle: "Professional Solutions",
      content: "Designed for businesses and professionals who need reliable, secure, and innovative tools powered by blockchain technology.",
      features: [
        "Enterprise-grade security",
        "Scalable infrastructure",
        "Professional support",
        "Custom integrations"
      ]
    },
    {
      title: "Get Started Today",
      subtitle: "Join the Bitcoin Revolution",
      content: "Experience the next generation of applications that combine the power of Bitcoin with modern user interfaces and functionality.",
      cta: true
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <div className="bitcoin-apps-suite-page">
      <div className="bitcoin-apps-suite-container">
        {/* Hero Section */}
        <section className="bitcoin-apps-suite-hero">
          <Image
            src="/bitcoin-apps-logo.jpg"
            alt="Bitcoin Office"
            width={80}
            height={80}
            className="bitcoin-apps-suite-logo"
          />
          <h1>
            <span style={{color: '#ffffff'}}>The</span>{' '}
            <span className="gradient-text">Bitcoin Office</span>{' '}
            <span style={{color: '#ffffff'}}>($bOffice)</span>
          </h1>
          <p className="bitcoin-apps-suite-tagline">
            Professional tools meet decentralized technology
          </p>
          <div className="bitcoin-apps-suite-badge">$BAPPS</div>
        </section>

        {/* Philosophy Section */}
        <section className="philosophy-section">
          <h2>Our Vision</h2>
          <div className="philosophy-content">
            <p>
              Bitcoin Office represents the <strong>next generation of professional tools</strong> built on Bitcoin's 
              foundation. Our mission is to create an ecosystem where productivity applications leverage blockchain 
              technology for enhanced security, transparency, and user ownership.
            </p>
            <p>
              Each application in our suite demonstrates how traditional software can be reimagined with 
              decentralized principles while maintaining the user experience professionals expect.
            </p>
            <div className="philosophy-points">
              <div className="point">
                <h3>Decentralized First</h3>
                <p>Built on Bitcoin, owned by users, powered by blockchain</p>
              </div>
              <div className="point">
                <h3>Professional Grade</h3>
                <p>Enterprise-ready tools with modern interfaces</p>
              </div>
              <div className="point">
                <h3>Open Ecosystem</h3>
                <p>Interoperable applications that work together</p>
              </div>
            </div>
          </div>
        </section>

        {/* Apps Showcase Section */}
        <section className="apps-showcase-section">
          <h2>Featured Applications</h2>
          <div className="apps-grid">
            <div className="app-card featured">
              <h3>Bitcoin Writer</h3>
              <p>Professional document creation with blockchain integration</p>
              <div className="app-features">
                <span>• Document encryption</span>
                <span>• Version control</span>
                <span>• Tokenization</span>
              </div>
              <div className="app-status">Production Ready</div>
            </div>
            <div className="app-card">
              <h3>Bitcoin Spreadsheets</h3>
              <p>Data analysis with cryptographic verification</p>
              <div className="app-features">
                <span>• Blockchain storage</span>
                <span>• Shared calculations</span>
                <span>• Audit trails</span>
              </div>
              <div className="app-status">In Development</div>
            </div>
            <div className="app-card">
              <h3>Bitcoin Wallet Pro</h3>
              <p>Professional Bitcoin management interface</p>
              <div className="app-features">
                <span>• Multi-signature</span>
                <span>• Hardware integration</span>
                <span>• Portfolio tracking</span>
              </div>
              <div className="app-status">Planning</div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="technology-section">
          <h2>Built on Bitcoin Technology</h2>
          <div className="technology-content">
            <p className="intro">
              Every application leverages Bitcoin's proven security model while delivering 
              the performance and usability that modern professionals demand.
            </p>

            <div className="tech-features">
              <h3>Core Technologies</h3>
              <div className="tech-grid">
                <div className="tech-item">
                  <h4>Bitcoin Blockchain</h4>
                  <p>Immutable data storage and verification</p>
                </div>
                <div className="tech-item featured">
                  <h4>BSV Integration</h4>
                  <p>High-throughput transactions and data capacity</p>
                </div>
                <div className="tech-item">
                  <h4>Smart Contracts</h4>
                  <p>Automated business logic and workflows</p>
                </div>
              </div>
              
              <h3 style={{marginTop: '40px'}}>Enterprise Features</h3>
              <div className="tech-grid">
                <div className="tech-item">
                  <h4>End-to-End Encryption</h4>
                  <p>Data protection at every layer</p>
                </div>
                <div className="tech-item featured">
                  <h4>Decentralized Storage</h4>
                  <p>No single point of failure</p>
                </div>
                <div className="tech-item">
                  <h4>Cross-Platform</h4>
                  <p>Web, desktop, and mobile support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Model Section */}
        <section className="business-section">
          <h2>The Bitcoin Corporation LTD</h2>
          <div className="business-content">
            <p className="intro">
              Sustainable open-source development through a hybrid model that preserves freedom 
              while creating value for users and contributors.
            </p>

            <div className="business-model">
              <h3>Pricing Model</h3>
              <div className="revenue-streams">
                <div className="stream">
                  <h4>Open Source</h4>
                  <p>Self-hosted, community supported</p>
                  <p className="price">Free</p>
                </div>
                <div className="stream featured">
                  <h4>Professional</h4>
                  <p>Hosted suite, premium features</p>
                  <p className="price">$49/month</p>
                </div>
                <div className="stream">
                  <h4>Enterprise</h4>
                  <p>Custom deployment, dedicated support</p>
                  <p className="price">$499/month</p>
                </div>
              </div>
              
              <h3 style={{marginTop: '40px'}}>Platform Revenue</h3>
              <div className="revenue-streams">
                <div className="stream">
                  <h4>App Store</h4>
                  <p>Third-party application marketplace</p>
                  <p className="price">5% fee</p>
                </div>
                <div className="stream featured">
                  <h4>Data Trading</h4>
                  <p>Secure data marketplace</p>
                  <p className="price">2% fee</p>
                </div>
                <div className="stream">
                  <h4>Professional Services</h4>
                  <p>Custom integrations and consulting</p>
                  <p className="price">Hourly</p>
                </div>
              </div>
            </div>

            <div className="value-flow">
              <h3>Value Distribution</h3>
              <div className="flow-diagram">
                <div className="flow-item">
                  <span>Subscriptions + Platform fees</span>
                  <span className="arrow">→</span>
                </div>
                <div className="flow-item">
                  <span>Revenue to Bitcoin Corporation</span>
                  <span className="arrow">→</span>
                </div>
                <div className="flow-item">
                  <span>Development & Operations</span>
                  <span className="arrow">→</span>
                </div>
                <div className="flow-item">
                  <span>Open source sustainability</span>
                </div>
              </div>
              <p style={{textAlign: 'center', marginTop: '20px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)'}}>
                The Bitcoin Office creates a sustainable ecosystem where professional tools 
                generate value while remaining true to open-source principles.
              </p>
            </div>
          </div>
        </section>

        {/* How to Get Started Section */}
        <section className="get-started-section">
          <h2>Get Started with Bitcoin Office</h2>
          <div className="getting-started-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Choose Your Plan</h3>
              <p>Select from open-source, professional, or enterprise options</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Set Up Wallet</h3>
              <p>Connect your Bitcoin wallet for seamless integration</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Install Apps</h3>
              <p>Deploy applications that match your workflow needs</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Start Building</h3>
              <p>Create, collaborate, and innovate with blockchain-powered tools</p>
            </div>
          </div>

          <div className="use-cases">
            <h3>Perfect For</h3>
            <ul>
              <li>✅ Content creators and writers</li>
              <li>✅ Data analysts and researchers</li>
              <li>✅ Business professionals</li>
              <li>✅ Development teams</li>
              <li>✅ Educational institutions</li>
              <li>✅ Creative agencies</li>
            </ul>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <h2>Platform Statistics</h2>
          <div className="stats-grid">
            <div className="stat">
              <h3>Applications</h3>
              <p className="stat-value">3</p>
              <p className="stat-label">Core tools in suite</p>
            </div>
            <div className="stat">
              <h3>Users</h3>
              <p className="stat-value">2,500+</p>
              <p className="stat-label">Active professionals</p>
            </div>
            <div className="stat">
              <h3>Documents</h3>
              <p className="stat-value">15,000+</p>
              <p className="stat-label">Created and secured</p>
            </div>
            <div className="stat">
              <h3>Blockchain</h3>
              <p className="stat-value">BSV</p>
              <p className="stat-label">Powered by Bitcoin</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Ready to Transform Your Workflow?</h2>
          <div className="cta-buttons">
            <Link 
              href="/" 
              className="cta-btn primary"
            >
              Explore Applications
            </Link>
            <Link 
              href="/docs" 
              className="cta-btn secondary"
            >
              Read Documentation
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}