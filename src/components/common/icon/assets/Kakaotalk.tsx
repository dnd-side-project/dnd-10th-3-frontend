const Kakaotalk = ({ width, height, color }: React.SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.00004 0.976132C4.02919 0.976132 1.8e-05 4.10553 1.8e-05 7.96512C1.8e-05 10.3655 1.55842 12.4815 3.93154 13.7401L2.93305 17.4069C2.84483 17.7309 3.21343 17.9892 3.49648 17.8014L7.87336 14.8974C8.24272 14.9333 8.61809 14.9542 9.00004 14.9542C13.9705 14.9542 17.9999 11.8249 17.9999 7.96512C17.9999 4.10553 13.9705 0.976132 9.00004 0.976132Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Kakaotalk;
