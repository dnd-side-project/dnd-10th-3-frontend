const User = ({ width, height, color }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="currentColor" />
      <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="white" />
      <path
        d="M14.0833 9.08392C14.0833 11.3385 12.2552 13.1672 10 13.1672C7.74483 13.1672 5.91667 11.3385 5.91667 9.08392C5.91667 6.82817 7.74483 5 10 5C12.2552 5 14.0833 6.82817 14.0833 9.08392ZM13.1512 13.2722C12.2727 13.9355 11.183 14.3339 10 14.3339C8.81583 14.3339 7.72558 13.9343 6.84592 13.2711C4.47058 14.317 3 17.5738 3 19H17C17 17.5866 15.4833 14.3298 13.1512 13.2722Z"
        fill="white"
      />
    </svg>
  );
};

export default User;
