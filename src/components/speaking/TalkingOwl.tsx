'use client';

interface TalkingOwlProps {
  state: 'idle' | 'listening' | 'thinking' | 'speaking';
}

export default function TalkingOwl({ state }: TalkingOwlProps) {
  const isOpen = state === 'speaking';
  const isListening = state === 'listening';

  return (
    <>
      <style>{`
        @keyframes owlBob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes owlListen {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-2px) rotate(-3deg); }
          75% { transform: translateY(-2px) rotate(3deg); }
        }
        @keyframes owlThink {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-3px) scale(1.02); }
        }
        @keyframes pupilMove {
          0%, 80%, 100% { transform: translate(0, 0); }
          85% { transform: translate(2px, -1px); }
          90% { transform: translate(-2px, 1px); }
        }
        @keyframes eyeBlink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        @keyframes beakChatter {
          0%, 100% { transform: scaleY(1) translateY(0); }
          50% { transform: scaleY(0.3) translateY(-2px); }
        }
        @keyframes wingFlap {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-8deg); }
        }
        .owl-body {
          animation: owlBob 2.5s ease-in-out infinite;
        }
        .owl-body.listening {
          animation: owlListen 0.8s ease-in-out infinite;
        }
        .owl-body.thinking {
          animation: owlThink 1.2s ease-in-out infinite;
        }
        .owl-eye {
          animation: eyeBlink 4s ease-in-out infinite;
          transform-origin: center;
        }
        .owl-pupil {
          animation: pupilMove 5s ease-in-out infinite;
        }
        .owl-beak-lower {
          transform-origin: top center;
        }
        .owl-beak-lower.speaking {
          animation: beakChatter 0.2s ease-in-out infinite;
        }
        .owl-wing-left {
          transform-origin: top right;
        }
        .owl-wing-right {
          transform-origin: top left;
        }
        .owl-wing-left.listening, .owl-wing-right.listening {
          animation: wingFlap 0.8s ease-in-out infinite;
        }
      `}</style>

      <div className="flex flex-col items-center select-none">
        <svg
          width="160"
          height="200"
          viewBox="0 0 160 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`owl-body ${state}`}
          aria-label="Talking owl"
        >
          {/* Branch */}
          <rect x="10" y="168" width="140" height="12" rx="6" fill="#8B5E3C" />
          <rect x="0" y="172" width="30" height="8" rx="4" fill="#7A5230" />
          <rect x="130" y="172" width="30" height="8" rx="4" fill="#7A5230" />

          {/* Feet */}
          <path d="M58 168 L52 168 L48 178 M58 168 L58 178 M58 168 L64 178" stroke="#E8A020" strokeWidth="3" strokeLinecap="round" />
          <path d="M102 168 L96 178 M102 168 L102 178 M102 168 L108 178" stroke="#E8A020" strokeWidth="3" strokeLinecap="round" />

          {/* Body */}
          <ellipse cx="80" cy="138" rx="38" ry="42" fill="#C4892A" />

          {/* Belly pattern */}
          <ellipse cx="80" cy="142" rx="24" ry="30" fill="#F5DEB3" />
          {[0, 1, 2, 3, 4].map((i) => (
            <ellipse key={i} cx="80" cy={125 + i * 10} rx={18 - i * 1.5} ry="4" fill="#E8C88A" opacity="0.6" />
          ))}

          {/* Left wing */}
          <ellipse
            cx="44"
            cy="138"
            rx="16"
            ry="32"
            fill="#A06820"
            className={`owl-wing-left ${state}`}
          />

          {/* Right wing */}
          <ellipse
            cx="116"
            cy="138"
            rx="16"
            ry="32"
            fill="#A06820"
            className={`owl-wing-right ${state}`}
            style={{ transform: 'scaleX(-1)', transformOrigin: '116px 138px' }}
          />

          {/* Head */}
          <circle cx="80" cy="82" r="36" fill="#C4892A" />

          {/* Ear tufts */}
          <path d="M58 52 L52 30 L68 48 Z" fill="#A06820" />
          <path d="M102 52 L108 30 L92 48 Z" fill="#A06820" />
          <path d="M58 52 L56 38 L64 50 Z" fill="#C4892A" />
          <path d="M102 52 L104 38 L96 50 Z" fill="#C4892A" />

          {/* Face disk */}
          <ellipse cx="80" cy="86" rx="26" ry="24" fill="#F5DEB3" />

          {/* Left eye white */}
          <circle cx="67" cy="78" r="13" fill="white" className="owl-eye" />
          {/* Right eye white */}
          <circle cx="93" cy="78" r="13" fill="white" className="owl-eye" />

          {/* Left iris */}
          <circle cx="67" cy="78" r="8" fill={isListening ? '#2563EB' : '#1a1a2e'} />
          {/* Right iris */}
          <circle cx="93" cy="78" r="8" fill={isListening ? '#2563EB' : '#1a1a2e'} />

          {/* Pupils */}
          <circle cx="69" cy="76" r="4" fill="#0a0a15" className="owl-pupil" />
          <circle cx="95" cy="76" r="4" fill="#0a0a15" className="owl-pupil" />

          {/* Eye shine */}
          <circle cx="71" cy="74" r="2.5" fill="white" opacity="0.9" />
          <circle cx="97" cy="74" r="2.5" fill="white" opacity="0.9" />

          {/* Eye ring outline */}
          <circle cx="67" cy="78" r="13" stroke="#C4892A" strokeWidth="1.5" fill="none" />
          <circle cx="93" cy="78" r="13" stroke="#C4892A" strokeWidth="1.5" fill="none" />

          {/* Beak upper */}
          <path d="M74 92 L80 86 L86 92 Z" fill="#E8A020" />

          {/* Beak lower — animates when speaking */}
          <path
            d={isOpen ? 'M74 93 L80 102 L86 93 Z' : 'M75 93 L80 97 L85 93 Z'}
            fill="#E8A020"
            className={`owl-beak-lower ${state}`}
            style={{ transition: 'd 0.1s' }}
          />

          {/* State indicator dots */}
          {state === 'thinking' && (
            <>
              <circle cx="96" cy="58" r="3" fill="#6366f1" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="0.8s" begin="0s" repeatCount="indefinite" />
              </circle>
              <circle cx="106" cy="54" r="3" fill="#6366f1" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="0.8s" begin="0.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="116" cy="58" r="3" fill="#6366f1" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="0.8s" begin="0.4s" repeatCount="indefinite" />
              </circle>
            </>
          )}
          {state === 'listening' && (
            <>
              <circle cx="116" cy="70" r="6" fill="none" stroke="#22c55e" strokeWidth="2" opacity="0.6">
                <animate attributeName="r" values="6;14;6" dur="1.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0;0.6" dur="1.2s" repeatCount="indefinite" />
              </circle>
            </>
          )}
        </svg>

        {/* State label */}
        <div className="mt-2 h-6 flex items-center justify-center">
          {state === 'listening' && (
            <span className="text-sm font-medium text-green-500 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Listening…
            </span>
          )}
          {state === 'thinking' && (
            <span className="text-sm font-medium text-indigo-500">Thinking…</span>
          )}
          {state === 'speaking' && (
            <span className="text-sm font-medium text-accent">Speaking…</span>
          )}
        </div>
      </div>
    </>
  );
}
