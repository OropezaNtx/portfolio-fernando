import { useMemo } from "react"

const STAR_COUNTS = {
  static: 240,
  floating: 100,
  shooting: 60,
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
    const size = 0.65 + seededRandom(seed++) * 1.8
    const opacity = 0.18 + seededRandom(seed++) * 0.56
    const duration = 3.8 + seededRandom(seed++) * 7.5
    const delay = seededRandom(seed++) * -10
    const tint = seededRandom(seed++)

    return {
      id: `static-${index}`,
      left,
      top,
      size,
      opacity,
      duration,
      delay,
      tint,
    }
  })
}

function buildFloatingStars() {
  let seed = 1000

  return Array.from({ length: STAR_COUNTS.floating }, (_, index) => {
    const left = seededRandom(seed++) * 100
    const top = seededRandom(seed++) * 100
    const size = 0.9 + seededRandom(seed++) * 2.1
    const opacity = 0.28 + seededRandom(seed++) * 0.56
    const duration = 8 + seededRandom(seed++) * 10
    const delay = seededRandom(seed++) * -18
    const driftX = (seededRandom(seed++) - 0.5) * 44
    const driftY = 22 + seededRandom(seed++) * 52
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
    const top = -8 + seededRandom(seed++) * 94
    const left = 32 + seededRandom(seed++) * 78
    const length = 75 + seededRandom(seed++) * 120
    const duration = 6.5 + seededRandom(seed++) * 5.8
    const delay = seededRandom(seed++) * -12
    const travelX = 260 + seededRandom(seed++) * 420
    const travelY = 130 + seededRandom(seed++) * 260
    const rotate = -18 - seededRandom(seed++) * 18
    const opacity = 0.58 + seededRandom(seed++) * 0.38

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
  if (tint > 0.82) return "rgb(165 243 252)"
  if (tint < 0.14) return "rgb(224 231 255)"
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
          0%, 100% { opacity: var(--star-min); transform: scale(0.82); }
          45% { opacity: var(--star-opacity); transform: scale(1.16); }
          72% { opacity: calc(var(--star-opacity) * 0.62); transform: scale(0.94); }
        }

        @keyframes portfolio-floating-motion {
          0% {
            opacity: 0;
            transform: translate3d(0, -10px, 0) scale(0.78);
          }
          12% { opacity: var(--star-opacity); }
          68% { opacity: calc(var(--star-opacity) * 0.76); }
          100% {
            opacity: 0;
            transform: translate3d(var(--float-x), var(--float-y), 0) scale(1.12);
          }
        }

        @keyframes portfolio-shooting-motion {
          0% {
            opacity: 0;
            transform: translate3d(0, 0, 0) scaleX(0.2);
          }
          6% { opacity: var(--shoot-opacity); }
          26% { opacity: calc(var(--shoot-opacity) * 0.88); }
          38%, 100% {
            opacity: 0;
            transform: translate3d(calc(var(--shoot-x) * -1), var(--shoot-y), 0) scaleX(1);
          }
        }

        @keyframes portfolio-nebula-breathe {
          0%, 100% { opacity: 0.32; transform: scale(0.94) translate3d(0, 0, 0); }
          50% { opacity: 0.54; transform: scale(1.06) translate3d(2%, -2%, 0); }
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

        .portfolio-floating-star {
          animation: portfolio-floating-motion var(--float-duration) linear var(--float-delay) infinite;
          box-shadow: 0 0 7px currentColor;
        }

        .portfolio-shooting-star {
          position: absolute;
          display: block;
          height: 1px;
          border-radius: 9999px;
          transform-origin: right center;
          background: linear-gradient(90deg, transparent, rgba(165,243,252,0.24), rgba(255,255,255,0.96));
          filter: drop-shadow(0 0 6px rgba(103,232,249,0.82));
          animation: portfolio-shooting-motion var(--shoot-duration) linear var(--shoot-delay) infinite;
          will-change: opacity, transform;
        }

        .portfolio-shooting-star::after {
          content: "";
          position: absolute;
          right: -2px;
          top: -2px;
          width: 5px;
          height: 5px;
          border-radius: 9999px;
          background: white;
          box-shadow: 0 0 12px rgba(255,255,255,0.95), 0 0 22px rgba(103,232,249,0.65);
        }

        .portfolio-nebula {
          position: absolute;
          border-radius: 9999px;
          filter: blur(105px);
          animation: portfolio-nebula-breathe 19s ease-in-out infinite;
          will-change: opacity, transform;
        }

        @media (max-width: 768px) {
          .portfolio-static-star:nth-of-type(2n),
          .portfolio-floating-star:nth-of-type(3n),
          .portfolio-shooting-star:nth-of-type(2n) {
            display: none;
          }

          .portfolio-nebula { filter: blur(78px); }
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

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(56,189,248,0.085),transparent_38%),radial-gradient(circle_at_80%_45%,rgba(99,102,241,0.06),transparent_34%)]" />

      <span className="portfolio-nebula left-[-9%] top-[18%] h-[34rem] w-[34rem] bg-cyan-500/[0.055]" />
      <span
        className="portfolio-nebula right-[-12%] top-[48%] h-[38rem] w-[38rem] bg-indigo-500/[0.05]"
        style={{ animationDelay: "-7s", animationDuration: "26s" }}
      />
      <span
        className="portfolio-nebula bottom-[-18%] left-[30%] h-[30rem] w-[42rem] bg-sky-300/[0.035]"
        style={{ animationDelay: "-13s", animationDuration: "31s" }}
      />

      {staticStars.map((star) => {
        const color = getStarColor(star.tint)

        return (
          <span
            key={star.id}
            className="portfolio-static-star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              color,
              backgroundColor: color,
              boxShadow: star.size > 1.45 ? `0 0 ${star.size * 4}px ${color}` : undefined,
              "--star-opacity": star.opacity,
              "--star-min": Math.max(0.08, star.opacity * 0.36),
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

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/5 via-transparent to-slate-950/25" />
    </div>
  )
}

export default Starfield
