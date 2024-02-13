const Airplane = ({ width, height, color }: React.SVGProps<SVGSVGElement>) => {
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
        d="M8.63016 11.6099L0.875 7.43262C6.43164 4.43052 12.4848 2.41279 18.7736 1.4664C17.8274 7.75496 15.8099 13.8079 12.8081 19.3644L8.63016 11.6099ZM8.63016 11.6099L13.5431 6.69699"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Airplane;
