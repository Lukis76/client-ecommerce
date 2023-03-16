import {Bottom} from "./bottom";
import Middle from "./middle";
import Top from "./top";
import css from './styles/index.module.css'
///////////////////////////////////////////
export const Footer = () => {
  return (
    <section className={`${css.footer}`}>
      <div>

      <Top />
      <Middle />
      <Bottom />
      </div>
    </section>
  );
};
