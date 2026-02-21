import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'NederPro – Structured Dutch Learning';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #f0fdf4 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Dutch flag accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #AE1C28 33.3%, #FFFFFF 33.3%, #FFFFFF 66.6%, #21468B 66.6%)',
          }}
        />

        {/* Logo / brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              background: '#2563eb',
              color: 'white',
              fontSize: '28px',
              fontWeight: '900',
              padding: '10px 20px',
              borderRadius: '12px',
              letterSpacing: '-0.5px',
            }}
          >
            NederPro
          </div>
          <div
            style={{
              fontSize: '18px',
              color: '#6b7280',
              fontWeight: '500',
            }}
          >
            Learn Dutch
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: '68px',
            fontWeight: '900',
            color: '#111827',
            lineHeight: '1.1',
            letterSpacing: '-2px',
            marginBottom: '24px',
            maxWidth: '900px',
          }}
        >
          Master Dutch Grammar.{' '}
          <span style={{ color: '#2563eb' }}>Systematically.</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '26px',
            color: '#4b5563',
            maxWidth: '800px',
            lineHeight: '1.5',
            marginBottom: '48px',
          }}
        >
          Structured CEFR A0–B2 courses aligned with Inburgeringsexamen &amp; Staatsexamen NT2.
        </div>

        {/* Feature pills */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {['Grammar Lessons', 'Exam Practice', 'Vocabulary', 'Culture Tips'].map((label) => (
            <div
              key={label}
              style={{
                background: '#eff6ff',
                border: '2px solid #bfdbfe',
                color: '#1d4ed8',
                fontSize: '18px',
                fontWeight: '600',
                padding: '10px 20px',
                borderRadius: '100px',
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            fontSize: '18px',
            color: '#9ca3af',
            fontWeight: '500',
          }}
        >
          nederpro.nl
        </div>
      </div>
    ),
    { ...size }
  );
}
