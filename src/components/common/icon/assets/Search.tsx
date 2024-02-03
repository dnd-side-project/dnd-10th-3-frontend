const Search = ({ width, height, color }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path
        d="M14.7506 14.7506L10.8528 10.8528M10.8528 10.8528C11.9078 9.7979 12.5004 8.36711 12.5004 6.87521C12.5004 5.38331 11.9078 3.95252 10.8528 2.89759C9.7979 1.84265 8.36711 1.25 6.87521 1.25C5.38331 1.25 3.95252 1.84265 2.89759 2.89759C1.84265 3.95252 1.25 5.38331 1.25 6.87521C1.25 8.36711 1.84265 9.7979 2.89759 10.8528C3.95252 11.9078 5.38331 12.5004 6.87521 12.5004C8.36711 12.5004 9.7979 11.9078 10.8528 10.8528Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Search;
