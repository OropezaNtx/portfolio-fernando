import { useMemo } from "react"

const STATIC_COUNT = 220
const FLOATING_COUNT = 24

function seededRandom(seed) {
  const value = Math.sin(seed * 12.9898) * 43758.5453
  return value - Math.floor(value)
}

function buildStaticStars() {
  const columns = 20
  const rows = Math.ceil(STATIC_COUNT / columns)

  return Array.from({ length: STATIC_COUNT }, (_, index) => {
    const column = index % columns
    const row = Math.floor(index / columns)
    const left = ((column + 0.18 + seededRandom(index + 1) * 0.64) / columns) * 100
    const top = ((row + 0.18 + seededRandom(index + 400) * 0.64) / rows) * 100
    const prominent = seededRandom(index + 800) > 0.965
    const size = 0.55 + seededRandom(index + 1200) * 1.55 + (prominent ? 1.05 : 0)
    const opacity = 0.16 + seededRandom(index + 1600) * 0.5 + (prominent ? 0.16 : 0)

    return {
      id: `static-${index}`,
      left,
      top,
      size,
      opacity: Math.min(opacity, 0.88),
      duration: 4.5 + seededRandom(index + 2000) * 7,
      delay: seededRandom(index + 2400) * -10,
      tint: seededRandom(index + 2800),
      prominent,
    }
  })
}

function buildFloatingStars() {
  return Array.from({ length: FLOATING_COUNT }, (_, index) => ({
    id: `floating-${index}`,
    left: 4 + seededRandom(index + 3200) * 92,
    top: 4 + seededRandom(index + 3600) * 92,
    size: 0.75 + seededRandom(index + 4000) * 1.25,
    opacity: 0.18 + seededRandom(index + 4400) * 0.34,
    duration: 24 + seededRandom(index + 4800) * 18,
    delay: seededRandom(index + 5200) * -36,
    driftX: (seededRandom(index + 5600) - 0.5) * 18,
    driftY: 14 + seededRandom(index + 6000) * 24,
    tint: seededRandom(index + 6400),
  }))
}

const SHOOTING_STARS = [
  { id: "meteor-1", top: 16, left: 94, delay: -1, duration: 30, length: 132, travelX: 440, travelY: 190, rotate: -23 },
  { id: "meteor-2", top: 44, left: 72, delay: -9, duration: 30, length: 116, travelX: 390, travelY: 170, rotate: -27 },
  { id: "meteor-3", top: 69, left: 48, delay: -17, duration: 30, length: 126, travelX: 420, travelY: 185, rotate: -21 },
  { id: "meteor-4", top: 28, left: 26, delay: -25, duration: 30, length: 108, travelX: 360, travelY: 155, rotate: -25 },
]

function getStarColor(tint) {
  if (tint > 0.86) return "rgb(165 243 252)"
  if (tint < 0.1) return "rgb(221 214 254)"
  return "rgb(255 255 255)"
}

function Starfield() {
  const staticStars = useMemo(buildStaticStars, [])
  const floatingStars = useMemo(buildFloatingStars, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes portfolio-static-twinkle {
          0%, 100% { opacity: var(--star-min); transform: scale(0.86); }
          46% { opacity: var(--star-opacity); transform: scale(1.1); }
          74% { opacity: calc(var(--star-opacity) * 0.62); transform: scale(0.96); }
        }

        @keyframes portfolio-floating-motion {
          0% { opacity: 0; transform: translate3d(0, -6px, 0) scale(0.9); }
          16% { opacity: var(--star-opacity); }
          76% { opacity: calc(var(--star-opacity) * 0.74); }
          100% { opacity: 0; transform: translate3d(var(--float-x), var(--float-y), 0) scale(1.03); }
        }

        @keyframes portfolio-shooting-motion {
          0%, 78% { opacity: 0; transform: translate3d(0, 0, 0) scaleX(0.2); }
          81% { opacity: 0.72; }
          90% { opacity: 0.42; }
          96%, 100% {
            opacity: 0;
            transform: translate3d(calc(var(--shoot-x) * -1), var(--shoot-y), 0) scaleX(1);
          }
        }

        @keyframes portfolio-nebula-breathe {
          0%, 100% { opacity: 0.22; transform: scale(0.97); }
          50% { opacity: 0.34; transform: scale(1.03); }
        }

        .portfolio-static-star,
        .portfolio-floating-star {
          position: absolute;
          display: block;
          border-radius: 9999px;
          will-change: opacity, transform;
        }

        .portfolio-static-star {
          animation: portfolio-static-twinkle var(--twinkle-duration) ease-in-out var(--twinkle-delay) infinite;
        }

        .portfolio-static-star.is-prominent::before,
        .portfolio-static-star.is-prominent::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          border-radius: 9999px;
          background: currentColor;
          opacity: 0.28;
          transform: translate(-50%, -50%);
        }

        .portfolio-static-star.is-prominent::before { width: 1px; height: 10px; }
        .portfolio-static-star.is-prominent::after { width: 10px; height: 1px; }

        .portfolio-floating-star {
          animation: portfolio-floating-motion var(--float-duration) linear var(--float-delay) infinite;
          box-shadow: 0 0 5px currentColor;
        }

        .portfolio-shooting-star {
          position: absolute;
          display: block;
          height: 1px;
          border-radius: 9999px;
          transform-origin: right center;
          background: linear-gradient(90deg, transparent, rgba(165,243,252,0.12), rgba(255,255,255,0.78));
          filter: drop-shadow(0 0 4px rgba(103,232,249,0.5));
          animation: portfolio-shooting-motion var(--shoot-duration) linear var(--shoot-delay) infinite;
          will-change: opacity, transform;
        }

        .portfolio-shooting-star::after {
          content: "";
          position: absolute;
          right: -1px;
          top: -1.5px;
          width: 4px;
          height: 4px;
          border-radius: 9999px;
          background: white;
          box-shadow: 0 0 9px rgba(255,255,255,0.82), 0 0 15px rgba(165,243,252,0.38);
        }

        .portfolio-nebula {
          position: absolute;
          border-radius: 9999px;
          filter: blur(120px);
          animation: portfolio-nebula-breathe 28s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .portfolio-static-star:nth-of-type(3n),
          .portfolio-floating-star:nth-of-type(2n),
          .portfolio-shooting-star:nth-of-type(even) { display: none; }
          .portfolio-nebula { filter: blur(86px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-static-star,
          .portfolio-floating-star,
          .portfolio-nebula,
          .portfolio-shooting-star { animation: none !important; }
          .portfolio-floating-star,
          .portfolio-shooting-star { display: none; }
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(56,189,248,0.045),transparent_28%),radial-gradient(circle_at_78%_58%,rgba(99,102,241,0.045),transparent_30%),radial-gradient(circle_at_46%_82%,rgba(168,85,247,0.03),transparent_26%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle,rgba(255,255,255,0.22)_0.4px,transparent_0.65px)] [background-size:7px_7px]" />

      <span className="portfolio-nebula left-[-12%] top-[20%] h-[28rem] w-[34rem] bg-cyan-500/[0.035]" />
      <span className="portfolio-nebula right-[-10%] top-[48%] h-[30rem] w-[36rem] bg-indigo-500/[0.035]" style={{ animationDelay: "-9s" }} />
      <span className="portfolio-nebula bottom-[-16%] left-[28%] h-[24rem] w-[42rem] bg-violet-500/[0.025]" style={{ animationDelay: "-17s" }} />

      {staticStars.map((star) => {
        const color = getStarColor(star.tint)
        return (
          <span
            key={star.id}
            className={`portfolio-static-star${star.prominent ? " is-prominent" : ""}`}
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              color,
              backgroundColor: color,
              boxShadow: star.prominent ? `0 0 ${star.size * 4}px ${color}` : undefined,
              "--star-opacity": star.opacity,
              "--star-min": Math.max(0.07, star.opacity * 0.34),
              "--twinkle-duration": `${star.duration}s`,
              "--twinkle-delay": `${star.delay}s`,
            }}
          />
        )
      })}

      {floatingStars.map((star) => {
        const color = getStarColor(star.tint)
        return (
          <span
            key={star.id}
            className="portfolio-floating-star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              color,
              backgroundColor: color,
              "--star-opacity": star.opacity,
              "--float-duration": `${star.duration}s`,
              "--float-delay": `${star.delay}s`,
              "--float-x": `${star.driftX}px`,
              "--float-y": `${star.driftY}px`,
            }}
          />
        )
      })}

      {SHOOTING_STARS.map((star) => (
        <span
          key={star.id}
          className="portfolio-shooting-star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.length}px`,
            rotate: `${star.rotate}deg`,
            "--shoot-duration": `${star.duration}s`,
            "--shoot-delay": `${star.delay}s`,
            "--shoot-x": `${star.travelX}px`,
            "--shoot-y": `${star.travelY}px`,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/8 via-transparent to-slate-950/32" />
    </div>
  )
}

export default Starfield
