import { FC, MutableRefObject, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import css from "./index.module.css";
//////////////////////////////////////
type TSlide = {
  children: Array<{ url: string; src: string }>;
  controles?: boolean;
  autoplay?: boolean;
  velocidad?: number;
  intervalo?: number;
};
//////////////////////////////////////////////////////
export const SlideShow: FC<TSlide> = ({
  children,
  controles = true,
  autoplay = true,
  velocidad = 500,
  intervalo = 7000,
}) => {
  let slideShow = useRef() as MutableRefObject<HTMLDivElement>;
  let intervaloslideShow = useRef() as MutableRefObject<number | undefined>;

  const right = useCallback(() => {
    // Comprobamos que el slideShow tenga elementos
    if (slideShow.current.children.length > 0) {
      console.log("right");

      // Obtenemos el primer elemento del slideShow.
      const primerElemento = slideShow.current.children[0];

      // Establecemos la transicion para el slideShow.
      slideShow.current.style.transition = `${velocidad}ms ease-out all`;

      const element = slideShow.current.children[0] as HTMLDivElement;
      const tamañoSlide = element.offsetWidth;

      // Movemos el slideShow
      slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      const transicion = () => {
        // Reiniciamos la posicion del slideShow.
        slideShow.current.style.transition = "none";
        slideShow.current.style.transform = `translateX(0)`;

        // Tomamos el primer elemento y lo mandamos al final.
        slideShow.current.appendChild(primerElemento);

        slideShow.current.removeEventListener("transitionend", transicion);
      };

      // Eventlistener para cuando termina la animacion.
      slideShow.current.addEventListener("transitionend", transicion);
    }
  }, [velocidad]);

  const left = () => {
    console.log("left");
    if (slideShow.current.children.length > 0) {
      // Obtenemos el ultimo elemento del slideShow.
      const index = slideShow.current.children.length - 1;
      const ultimoElemento = slideShow.current.children[index];
      slideShow.current.insertBefore(ultimoElemento, slideShow.current.firstChild);

      slideShow.current.style.transition = "none";
      const element = slideShow.current.children[0] as HTMLDivElement;
      const tamañoSlide = element.offsetWidth;
      slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideShow.current.style.transition = `${velocidad}ms ease-out all`;
        slideShow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    if (autoplay) {
      intervaloslideShow.current = setInterval(() => {
        right();
      }, intervalo);

      // Eliminamos los intervalos
      slideShow.current.addEventListener("mouseenter", () => {
        clearInterval(intervaloslideShow.current);
      });

      // Volvemos a poner el intervalo cuando saquen el cursor del slideShow
      slideShow.current.addEventListener("mouseleave", () => {
        intervaloslideShow.current = setInterval(() => {
          right();
        }, intervalo);
      });
    }
  }, []);

  return (
    <div className={`${css.slideContainer}`}>
      <div ref={slideShow}>
        {children.map(({ url, src }, index) => (
          <div key={index}>
            <a href={url}>
              <img src={src} alt="slide promociones" />
            </a>
          </div>
        ))}
      </div>
      {controles && (
        <div>
          <button onClick={left}>
            <span />
          </button>
          <button onClick={right}>
            <span />
          </button>
        </div>
      )}
    </div>
  );
};
