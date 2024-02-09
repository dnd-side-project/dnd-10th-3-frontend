const Photo = ({ width, height, color }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <rect
        x="2.75"
        y="3.75"
        width="14.5"
        height="12.5"
        rx="1.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m3 11.5 3.62-2.972a1 1 0 0 1 1.28.01L12 12M11 11l2.379-1.586a1 1 0 0 1 1.195.064L17 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="11" cy="7" r="1" fill="currentColor" />
    </svg>
  );
};

export default Photo;
