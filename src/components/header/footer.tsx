import { SvgLocation } from "../../assets/svg/location";
import css from "./styles/footer.module.css";
import { Link } from "react-router-dom";
import { Categorys } from "./categorys";
import { SvgCart } from "../../assets/svg/cart";

////////////////////////////////////////////
export const Footer = () => {

  return (
    <section className={`${css.section}`}>
      <div>
        <div className={`${css.location}`}>
          <SvgLocation size={1.8} />
          <div>
            <span>Envia a</span>
            <span>Capital Federal</span>
          </div>
        </div>
        <Categorys />
        <div className={`${css.user}`}>
          <Link to={`${import.meta.env.BASE_URL}/register`}>Creá tu cuenta</Link>
          <Link to={`${import.meta.env.BASE_URL}/login`}>Ingresá</Link>
          <Link to={`${import.meta.env.BASE_URL}/ordens`}>Mis compras</Link>
          <Link to={`${import.meta.env.BASE_URL}/cart`}>
            <SvgCart  size={1.5}/>
          </Link>
        </div>
      </div>
    </section>
  );
};
