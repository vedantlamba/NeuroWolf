import React from "react";

interface Props {
  children: React.ReactNode;
}

const SenjuButton = ({ children }: Props) => {
  return (
    <div className="skill-button-wrapper">
      <button type="button" className="skill-button">
        <span className="fold" />
        <div className="points-wrapper">
          {[...Array(10)].map((_, i) => (
            <i key={i} className="point" style={{
              left: `${[10, 30, 25, 44, 50, 75, 88, 58, 98, 65][i]}%`,
              opacity: [1, 0.7, 0.8, 0.6, 1, 0.5, 0.9, 0.8, 0.6, 1][i],
              animationDuration: `${[2.35, 2.5, 2.2, 2.05, 1.9, 1.5, 2.2, 2.25, 2.6, 2.5][i]}s`,
              animationDelay: `${[0.2, 0.5, 0.1, 0, 0, 1.5, 0.2, 0.2, 0.1, 0.2][i]}s`
            }} />
          ))}
        </div>
        <span className="inner">{children}</span>
      </button>
      
      <style jsx>{`
        .skill-button-wrapper {
          display: inline-block;
        }
        
        .skill-button {
          --h-button: 48px;
          --w-button: 102px;
          --round: 0.75rem;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: all 0.25s ease;
          background: radial-gradient(
              65.28% 65.28% at 50% 100%,
              rgba(223, 113, 255, 0.8) 0%,
              rgba(223, 113, 255, 0) 100%
            ),
            linear-gradient(0deg, #7a5af8, #7a5af8);
          border-radius: var(--round);
          border: none;
          outline: none;
          padding: 12px 18px;
          cursor: pointer;
        }

        .skill-button::before,
        .skill-button::after {
          content: "";
          position: absolute;
          inset: var(--space);
          transition: all 0.5s ease-in-out;
          border-radius: calc(var(--round) - var(--space));
          z-index: 0;
        }

        .skill-button::before {
          --space: 1px;
          background: linear-gradient(
            177.95deg,
            rgba(255, 255, 255, 0.19) 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        .skill-button::after {
          --space: 2px;
          background: radial-gradient(
              65.28% 65.28% at 50% 100%,
              rgba(223, 113, 255, 0.8) 0%,
              rgba(223, 113, 255, 0) 100%
            ),
            linear-gradient(0deg, #7a5af8, #7a5af8);
        }

        .skill-button:active {
          transform: scale(0.95);
        }

        .fold {
          z-index: 1;
          position: absolute;
          top: 0;
          right: 0;
          height: 1rem;
          width: 1rem;
          display: inline-block;
          transition: all 0.5s ease-in-out;
          background: radial-gradient(
            100% 75% at 55%,
            rgba(223, 113, 255, 0.8) 0%,
            rgba(223, 113, 255, 0) 100%
          );
          box-shadow: 0 0 3px black;
          border-bottom-left-radius: 0.5rem;
          border-top-right-radius: var(--round);
        }

        .fold::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 150%;
          height: 150%;
          transform: rotate(45deg) translateX(0%) translateY(-18px);
          background-color: #e8e8e8;
          pointer-events: none;
        }

        .skill-button:hover .fold {
          margin-top: -1rem;
          margin-right: -1rem;
        }

        .points-wrapper {
          overflow: hidden;
          width: 100%;
          height: 100%;
          pointer-events: none;
          position: absolute;
          z-index: 1;
        }

        .points-wrapper .point {
          bottom: -10px;
          position: absolute;
          animation: floating-points infinite ease-in-out;
          pointer-events: none;
          width: 2px;
          height: 2px;
          background-color: #fff;
          border-radius: 9999px;
        }

        @keyframes floating-points {
          0% {
            transform: translateY(0);
          }
          85% {
            opacity: 0;
          }
          100% {
            transform: translateY(-55px);
            opacity: 0;
          }
        }

        .inner {
          z-index: 2;
          position: relative;
          width: 100%;
          color: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.5;
          transition: color 0.2s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default SenjuButton;