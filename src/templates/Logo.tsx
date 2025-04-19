type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl ? 'font-bold text-3xl' : 'font-bold text-xl';

  return (
    <div className={`inline-flex items-center ${fontStyle} group`}>
      <div className="relative mr-3">
        <svg
          className="relative z-10 transition-transform group-hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" className="text-blue-400" />
          <path d="M12 2v20M2 12h20" className="text-blue-300" />
          <circle
            cx="12"
            cy="12"
            r="4"
            className="animate-pulse text-yellow-400"
          />
        </svg>
        <div className="absolute inset-0 animate-pulse bg-blue-400 opacity-50 blur-lg"></div>
      </div>
      <div className="relative">
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Poke
        </span>
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          Rogue
        </span>
        <div className="absolute -right-2 -top-1 size-2 animate-ping rounded-full bg-yellow-400"></div>
      </div>
    </div>
  );
};

export { Logo };
