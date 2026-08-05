import { useMemo } from "react"

const STAR_COUNTS = {
  static: 260,
  floating: 36,
  shooting: 12,
}

function seededRandom(seed) {
  const value = Math.sin(seed * 12.9898) * 43758.5453
  return value - Math.floor(value)
}

function buildStaticStars() {
  let seed = 1

  return Array.from({ length: STAR_COUNTS.static }, (_, index) => {
    const left = seededRandom(seed++) * 100
    const top = seededRandom(seed++) * 100
    const size = 0.55 + seededRandom(seed++) * 1.8
    const opacity = 0.14 + seededRandom(seed++) * 0.58
    const duration = 3.8 + seededRandom(seed++) * 7.5
    const delay = seededRandom(seed++) * -11
    const tint = seededRandom(seed++)
    const prominent = seededRandom(seed++) > 0.94

    return {
      id: `static-${index}`,
      left,
      top,
      size: prominent ? size + 1.25 : size,
      opacity: prominent ? Math.min(0.95, opacity + 0.22) : opacity,
      duration,
      delay,
      tint,
      prominent,
    }
  })
}

function buildFloatingStars() {
  let seed = 1000

  return Array.from({ length: STAR_COUNTS.floating }, (_, index) => {
    const left = seededRandom(seed++) * 100
    const top = seededRandom(seed++) * 100
    const size = 0.8 + seededRandom(seed++) * 1.5
    const opacity = 0.2 + seededRandom(seed++) * 0.42
    const duration = 20 + seededRandom(seed++) * 18
    const delay = seededRandom(seed++) * -38
    const driftX = (seededRandom(seed++) - 0.5) * 24
    const driftY = 18 + seededRandom(seed++) * 34
    const tint = seededRandom(seed++)

    return {
      id: `floating-${index}`,
      left,
      top,
      size,
      opacity,
      duration,
      delay,
      driftX,
      driftY,
      tint,
    }
  })
}

function buildShootingStars() {
  let seed = 2000

  return Array.from({ length: STAR_COUNTS.shooting }, (_, index) => {
    const top = 3 + seededRandom(seed++) * 80
    const left = 58 + seededRandom(seed++) * 42
    const length = 120 + seededRandom(seed++) * 90
    const duration = 18 + seededRandom(seed++) * 13
    const delay = seededRandom(seed++) * -31
    const travelX = 340 + seededRandom(seed++) * 260
    const travelY = 140 + seededRandom(seed++) * 180
    const rotate = -18 - seededRandom(seed++) * 13
    const opacity = 0.34 + seededRandom(seed++) * 0.34

    return {
      id: `shooting-${index}`,
      top,
      left,
      length,
      duration,
      delay,
      travelX,
      travelY,
      rotate,
      opacity,
    }
  })
}

function getStarColor(tint) {
  if (tint > 0.84) return "rgb(165 243 252)"
  if (tint < 0.12) return "rgb(221 214 254)"
  return "rgb(255 255 255)"
}

function Starfield() {
  const staticStars = useMemo(buildStaticStars, [])
  const floatingStars = useMemo(buildFloatingStars, [])
  const shootingStars = useMemo(buildShootingStars, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes portfolio-static-twinkle {
          0%, 100% { opacity: var(--star-min); transform: scale(0.84); }
          44% { opacity: var(--star-opacity); transform: scale(1.12); }
          72% { opacity: calc(var(--star-opacity) * 0.58); transform: scale(0.95); }
        }

        @keyframes portfolio-floating-motion {
          0% { opacity: 0; transform: translate3d(0, -8px, 0) scale(0.84); }
          15% { opacity: var(--star-opacity); }
          72% { opacity: calc(var(--star-opacity) * 0.72); }
          100% { opacity: 0; transform: translate3d(var(--float-x), var(--float-y), 0) scale(1.04); }
        }

        @keyframes portfolio-shooting-motion {
          0%, 72% { opacity: 0; transform: translate3d(0, 0, 0) scaleX(0.18); }
          75% { opacity: var(--shoot-opacity); }
          88% { opacity: calc(var(--shoot-opacity) * 0.72); }
          96%, 100% {
            opacity: 0;
            transform: translate3d(calc(var(--shoot-x) * -1), var(--shoot-y), 0) scaleX(1);
          }
        }

        @keyframes portfolio-nebula-breathe {
          0%, 100% { opacity: 0.28; transform: scale(0.96) translate3d(0, 0, 0); }
          50% { opacity: 0.46; transform: scale(1.04) translate3d(1.5%, -1.5%, 0); }
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
          background: currentColor;
          opacity: 0.34;
          transform: translate(-50%, -50%);
          border-radius: 9999px;
        }

        .portfolio-static-star.is-prominent::before { width: 1px; height: 12px; }
        .portfolio-static-star.is-prominent::after { width: 12px; height: 1px; }

        .portfolio-floating-star {
          animation: portfolio-floating-motion var(--float-duration) linear var(--float-delay) infinite;
          box-shadow: 0 0 6px currentColor;
        }

        .portfolio-shooting-star {
          position: absolute;
          display: block;
          height: 1px;
          border-radius: 9999px;
          transform-origin: right center;
          background: linear-gradient(90deg, transparent, rgba(196,181,253,0.12), rgba(165,243,252,0.35), rgba(255,255,255,0.88));
          filter: drop-shadow(0 0 5px rgba(129,140,248,0.55));
          animation: portfolio-shooting-motion var(--shoot-duration) linear var(--shoot-delay) infinite;
          will-change: opacity, transform;
        }

        .portfolio-shooting-star::after {
          content: "";
          position: absolute;
          right: -1px;
          top: -2px;
          width: 4px;
          height: 4px;
          border-radius: 9999px;
          background: white;
          box-shadow: 0 0 10px rgba(255,255,255,0.9), 0 0 18px rgba(165,243,252,0.45);
        }

        .portfolio-nebula {
          position: absolute;
          border-radius: 9999px;
          filter: blur(112px);
          animation: portfolio-nebula-breathe 24s ease-in-out infinite;
          will-change: opacity, transform;
        }

        @media (max-width: 768px) {
          .portfolio-static-star:nth-of-type(3n),
          .portfolio-floating-star:nth-of-type(2n),
          .portfolio-shooting-star:nth-of-type(2n) { display: none; }

          .portfolio-nebula { filter: blur(82px); }
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

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-12%,rgba(56,189,248,0.075),transparent_34%),radial-gradient(circle_at_78%_52%,rgba(99,102,241,0.06),transparent_30%),radial-gradient(circle_at_34%_70%,rgba(168,85,247,0.045),transparent_28%)]" />
      <div className="absolute inset-0 opacity-[0.22] [background-image:radial-gradient(circle,rgba(255,255,255,0.28)_0.45px,transparent_0.7px)] [background-size:5px_5px]" />

      <span className="portfolio-nebula left-[12%] top-[28%] h-[22rem] w-[38rem] rotate-[-14deg] bg-cyan-500/[0.045]" />
      <span
        className="portfolio-nebula right-[5%] top-[54%] h-[26rem] w-[34rem] rotate-[18deg] bg-violet-500/[0.05]"
        style={{ animationDelay: "-8s", animationDuration: "31s" }}
      />
      <span
        className="portfolio-nebula bottom-[-10%] left-[34%] h-[20rem] w-[42rem] bg-blue-500/[0.035]"
        style={{ animationDelay: "-14s", animationDuration: "36s" }}
      />

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
              boxShadow: star.prominent
                ? `0 0 ${star.size * 5}px ${color}, 0 0 ${star.size * 9}px rgba(129,140,248,0.24)`
                : star.size > 1.45
                  ? `0 0 ${star.size * 3.5}px ${color}`
                  : undefined,
              "--star-opacity": star.opacity,
              "--star-min": Math.max(0.07, star.opacity * 0.32),
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

      {shootingStars.map((star) => (
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
            "--shoot-opacity": star.opacity,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950/35" />
    </div>
  )
}

export default Starfield
