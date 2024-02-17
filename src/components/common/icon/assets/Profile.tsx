const Profile = ({ width, height, color }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      color={color}
      className="shrink-0"
    >
      <g clipPath="url(#a)">
        <rect width="32" height="32" rx="16" fill="currentColor" />
        <path
          d="M22.533 14.534a6.534 6.534 0 1 1-13.068 0 6.534 6.534 0 0 1 13.068 0Zm-1.491 6.702A8.34 8.34 0 0 1 16 22.934c-1.895 0-3.64-.64-5.047-1.7C7.153 22.907 4.8 28.118 4.8 30.4L16 32.5l11.2-2.1c0-2.261-2.427-7.472-6.158-9.164Z"
          fill="#fff"
        />
      </g>
      <rect
        x=".75"
        y=".75"
        width="30.5"
        height="30.5"
        rx="15.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <defs>
        <clipPath id="a">
          <rect width="32" height="32" rx="16" fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Profile;
