import { FC, SVGProps } from "react";

interface SVG extends SVGProps<SVGSVGElement> {
  size?: number;
}

export const SvgLocation: FC<SVG> = (props) => {
  return (
    <svg
      viewBox="0 0 48 48"
      width={`${props.size || 1}rem`}
      height={`${props.size || 1}rem`}
      fill="#646464"
      {...props}
    >
      <path d="M24 40.05q6.65-6.05 9.825-10.975Q37 24.15 37 20.4q0-5.9-3.775-9.65T24 7q-5.45 0-9.225 3.75Q11 14.5 11 20.4q0 3.75 3.25 8.675Q17.5 34 24 40.05ZM24 44q-8.05-6.85-12.025-12.725Q8 25.4 8 20.4q0-7.5 4.825-11.95Q17.65 4 24 4q6.35 0 11.175 4.45Q40 12.9 40 20.4q0 5-3.975 10.875T24 44Zm-5.5-18h3v-6h5v6h3v-9.25L24 13.1l-5.5 3.65Zm5.5-5.6Z" />
    </svg>
  );
};
