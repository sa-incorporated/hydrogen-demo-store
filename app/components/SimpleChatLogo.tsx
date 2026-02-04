export function SimpleChatIcon({
  className = 'w-10 h-10',
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient
          id="icon-gradient"
          x1="0%"
          y1="100%"
          x2="100%"
          y2="0%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFB74D" />
          <stop offset="30%" stopColor="#4DD0E1" />
          <stop offset="70%" stopColor="#42A5F5" />
          <stop offset="100%" stopColor="#7E57C2" />
        </linearGradient>
        <linearGradient
          id="hair-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="100%" stopColor="#16213e" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="8" fill="url(#icon-gradient)" />
      <path
        d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V12C36 12 12 12 0 12V8Z"
        fill="url(#hair-gradient)"
      />
      <ellipse cx="17" cy="21" rx="5" ry="6" fill="#1a1a2e" />
      <ellipse cx="31" cy="21" rx="5" ry="6" fill="#1a1a2e" />
      <path
        d="M15 19L17 21L19 19"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M29 19L31 21L33 19"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function SimpleChatLogo({
  className = '',
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <SimpleChatIcon className="w-10 h-10" />
      <span
        className={`text-xl font-semibold tracking-tight ${
          dark ? 'text-white' : 'text-gray-900'
        }`}
      >
        Simple Chat
      </span>
    </div>
  );
}

export function SimpleChatWordmark({
  className = '',
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <span
      className={`text-xl font-semibold tracking-tight ${className} ${
        dark ? 'text-white' : 'text-gray-900'
      }`}
    >
      Simple Chat
    </span>
  );
}
