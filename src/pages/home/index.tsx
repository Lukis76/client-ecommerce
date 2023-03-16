import React, { ImgHTMLAttributes, LegacyRef, MutableRefObject, useRef, useState } from "react";
import { SlideShow } from "../../components/slideShow";
import css from "./index.module.css";

const homeSlice = [
  {url: "#", src: "https://http2.mlstatic.com/D_NQ_691031-MLA54321251492_032023-OO.webp"},
  {url: "#", src: "https://http2.mlstatic.com/D_NQ_762170-MLA54148316265_032023-OO.webp"},
  {url: "#", src: "https://http2.mlstatic.com/D_NQ_977743-MLA54291689551_032023-OO.webp"},
  {url: "#", src: "https://http2.mlstatic.com/D_NQ_725680-MLA54290608901_032023-OO.webp"},
  {url: "#", src: "https://http2.mlstatic.com/D_NQ_803647-MLA54290643177_032023-OO.webp"},
];

export const Home = () => {

  // let slide = useRef() as MutableRefObject<HTMLDivElement>; // LegacyRef<HTMLDivElement>
  // let imgOne = useRef() as MutableRefObject<HTMLImageElement>;
  // const click = () => {
    // const imgCurrent = slide.current.children[0] as HTMLImageElement
    
    // imgCurrent.src = 'chocolatoso'    

    // imgOne.current.src = "www.google.com.ar";
    // console.log(imgOne.current.src);
  // };


  return (
    <div className={`${css.boxHome}`}>
      <SlideShow children={homeSlice}/> 
      <section>
        home
      </section>
    </div>
  );
};
