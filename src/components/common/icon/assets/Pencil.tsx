const Pencil = ({ width, height, color }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path
        d="M13.9316 5.26874L18.7316 10.0687M1.93164 22.0687L7.75295 20.8958C8.06199 20.8335 8.34574 20.6813 8.5686 20.4584L21.6002 7.41965C22.225 6.79451 22.2245 5.78119 21.5992 5.15658L18.8387 2.39914C18.2136 1.77479 17.2008 1.77521 16.5762 2.40009L3.54332 15.4402C3.32091 15.6627 3.16904 15.9459 3.10671 16.2543L1.93164 22.0687Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Pencil;
