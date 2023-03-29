import { FC, SVGProps } from "react";
import css from "./styles/bell.module.css";

interface SVG extends SVGProps<SVGSVGElement> {
  size?: number;
  lenght?: number;
  notificaciones?: Array<Tnotify>;
}

type Tnotify = {};

export const Bell: FC<SVG> = (props) => {
  return (
    <div className={css.bell}>
      {!!props.lenght && <small className={css.lenght}>{props.lenght > 99 ? '+9' : props.lenght}</small>}
      <svg
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        // className="w-6 h-6"
        aria-selected={!!props.lenght}
        width={`${props.size || 1}rem`}
        height={`${props.size || 1}rem`}
        fill={`${!props.lenght ? "#ffffff00" : "#242424"}`}
        color="#242424"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
        />
      </svg>
    </div>
  );
};
