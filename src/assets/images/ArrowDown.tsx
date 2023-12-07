import { forwardRef } from 'react';

type IconProps = {
  color?: string;
  size: number;
  [key: string]: any;
};

const ArrowDown = forwardRef(
  ({ color = 'rgba(255, 255, 255, 1)', size = 24, ...rest }: IconProps, ref: any) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 23 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M11.4572 25.9167V0.916672"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.4978 15.8337L11.4578 25.917L1.41617 15.8337"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);

export default ArrowDown;
