export default function Signature({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 90"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Omar Serrano signature"
    >
      <g
        fill="none"
        stroke="#1A1814"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Omar */}
        <path d="M 12 50 C 12 32, 26 22, 38 22 C 50 22, 58 32, 58 46 C 58 60, 48 70, 36 70 C 22 70, 12 62, 12 50 Z" />
        <path d="M 68 70 C 68 56, 72 42, 80 32 C 84 28, 90 32, 90 38 C 90 48, 86 60, 86 70" />
        <path d="M 86 50 C 90 38, 96 30, 104 30 C 110 30, 112 36, 112 44 L 112 70" />
        <path d="M 122 70 C 122 56, 130 40, 142 32 C 150 28, 156 34, 156 42 C 156 50, 150 56, 144 58 C 138 60, 134 62, 130 66" />
        <path d="M 156 42 L 156 70" />

        {/* Serrano */}
        <path d="M 180 38 C 178 32, 172 28, 166 30 C 158 32, 154 42, 162 46 C 168 49, 178 50, 180 56 C 182 64, 174 70, 166 70 C 160 70, 156 66, 156 60" />
        <path d="M 196 50 L 220 50 C 222 42, 218 34, 210 34 C 200 34, 194 42, 194 52 C 194 64, 202 72, 212 72 C 218 72, 222 68, 224 64" />
        <path d="M 234 70 C 234 56, 238 44, 246 36 C 250 32, 256 36, 254 42 C 250 50, 246 58, 246 70" />
        <path d="M 246 50 C 250 38, 256 32, 262 32 C 268 32, 270 38, 270 46 L 270 70" />
        <path d="M 280 50 C 280 38, 286 30, 294 30 C 302 30, 308 38, 308 50 C 308 62, 302 70, 294 70 C 286 70, 280 62, 280 50 Z" />

        {/* Underline / flourish */}
        <path
          d="M 10 82 C 60 76, 120 78, 180 80 C 240 82, 290 80, 314 76"
          strokeWidth="1.6"
          opacity="0.7"
        />
      </g>
    </svg>
  );
}
