const Divider = ({ width, height, color }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 2 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 0C1 0 1 2.4379 1 4C1 5.5621 1 8 1 8" stroke={color} />
    </svg>
  );
};

export default Divider;
