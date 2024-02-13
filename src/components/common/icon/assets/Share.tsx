const Share = ({ width, height, color }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path
        d="M3 12.6832V15.7714C3 16.2395 3.18437 16.6883 3.51256 17.0193C3.84075 17.3502 4.28587 17.5361 4.75 17.5361H15.25C15.7141 17.5361 16.1592 17.3502 16.4874 17.0193C16.8156 16.6883 17 16.2395 17 15.7714V12.6832M10.0361 12.4639L10.0361 2.46387M10.0361 2.46387L6.03613 6.28483M10.0361 2.46387L14.0361 6.28483"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Share;
