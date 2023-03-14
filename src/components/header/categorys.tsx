import { Link } from "react-router-dom";
import css from "./styles/category.module.css";

////////////////////////////////////
export const Categorys = () => {
  const sectionCategoriesFooter = [
    {
      url: "categorys",
      name: "Categorías",
    },
    {
      url: "categorys",
      name: "Ofertas",
    },
    {
      url: "categorys",
      name: "Historial",
    },
    {
      url: "categorys",
      name: "Supermercado",
    },
    {
      url: "categorys",
      name: "Moda",
    },
    {
      url: "categorys",
      name: "Vender",
    },
    {
      url: "categorys",
      name: "Ayuda",
    },
  ];

  const desplegableCategory =  [
    {
      url: "categorys",
      name: "Categorías",
    },
    {
      url: "categorys",
      name: "Ofertas",
    },
    {
      url: "categorys",
      name: "Historial",
    },
    {
      url: "categorys",
      name: "Supermercado",
    },
    {
      url: "categorys",
      name: "Moda",
    },
    {
      url: "categorys",
      name: "Vender",
    },
    {
      url: "categorys",
      name: "Salud y equipamiento medico",
    },
  ];


  return (
    <ul className={`${css.category}`}>
      {sectionCategoriesFooter.map(({ url, name }) => (
        <li key={name}>
          <Link to={`${import.meta.env.BASE_URL}/${url}`} role="button" aria-expanded={false}>
            {name}
          </Link>
        </li>
      ))}

        <ul className={`${css.desplegable}`}>
          {
            desplegableCategory.map(({url, name}) => <li> <Link to={`${import.meta.env.BASE_URL}/${url}`}>{name}</Link> </li>)
          }
        </ul>
    </ul>
  );
};
