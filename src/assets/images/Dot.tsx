import { forwardRef } from 'react';

type IconProps = {
  color?: string;
  size: number;
  isActive: boolean;
  [key: string]: any;
};

const Dot = forwardRef(
  (
    { color = 'rgba(255, 255, 255, 1)', size = 25, isActive = false, ...rest }: IconProps,
    ref: any
  ) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx="12.5" cy="12" r="6" fill={isActive ? color : 'none'} />
      <circle cx="12.5" cy="12" r="11.5" stroke={color} />
    </svg>
  )
);

export default Dot;
