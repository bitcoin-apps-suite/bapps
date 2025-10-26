'use client'

export default function ProofOfConceptBar() {
  return (
    <div className="poc-bar sticky top-0 z-50">
      <style jsx>{`
        .poc-bar {
          background: linear-gradient(90deg, 
            #ff6b6b 0%, 
            #ffa500 16.66%, 
            #ffcd00 33.33%, 
            #4ecdc4 50%, 
            #45b7d1 66.66%, 
            #7b68ee 83.33%, 
            #ff6b6b 100%
          );
          background-size: 200% auto;
          animation: rainbow-slide 4s linear infinite;
          padding: 8px 16px;
          text-align: center;
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .poc-text {
          color: #ffffff;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
          letter-spacing: 0.5px;
        }

        @keyframes rainbow-slide {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </div>
  )
}