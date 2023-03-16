
import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Footer } from "../footer";
import css from './index.module.css'
///////////////////////////////////////
export const Layout = () => {
  return (
    <main className={`${css.main}`}>
      <Header />
      <section className={`${css.content}`}>

      <Outlet />
      </section>
      <Footer />
    </main>
  );
};
