const Reply = ({ width, height, color }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path
        d="M15.75 9C15.75 12.417 12.7275 15.1875 9 15.1875C8.35289 15.1883 7.70853 15.1033 7.08375 14.9348C6.20307 15.5541 5.12874 15.8356 4.0575 15.7275C3.9384 15.716 3.8198 15.6997 3.702 15.6788C4.07165 15.2431 4.3241 14.7204 4.4355 14.16C4.503 13.8173 4.33575 13.4843 4.08525 13.2405C2.9475 12.1335 2.25 10.6418 2.25 9C2.25 5.583 5.2725 2.8125 9 2.8125C12.7275 2.8125 15.75 5.583 15.75 9Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6" cy="9" r="1" fill="white" />
      <circle cx="9" cy="9" r="1" fill="white" />
      <circle cx="12" cy="9" r="1" fill="white" />
    </svg>
  );
};

export default Reply;
