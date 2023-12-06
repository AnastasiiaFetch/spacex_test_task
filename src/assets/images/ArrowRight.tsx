import { forwardRef } from 'react';

type IconProps = {
  color?: string;
  size: number;
  [key: string]: any;
};

const ArrowRight = forwardRef(
  ({ color = 'rgba(255, 255, 255, 1)', size = 24, ...rest }: IconProps, ref: any) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M1.5 1L8.5 8L1.5 16"
        stroke="#200E32"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
);

export default ArrowRight;
