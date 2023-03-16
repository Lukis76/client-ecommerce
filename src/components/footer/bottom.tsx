import { Link } from "react-router-dom";
import css from "./styles/bottom.module.css";
///////////////////////////////////////////
export const Bottom = () => {
  const tarjetas = [
    {
      url: "#",
      src: "https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg",
    },
    {
      url: "#",
      src: "https://http2.mlstatic.com/storage/logos-api-admin/c9f71470-6f07-11ec-9b23-071a218bbe35-m.svg",
    },
    {
      url: "#",
      src: "https://http2.mlstatic.com/storage/logos-api-admin/33ea00e0-571a-11e8-8364-bff51f08d440-m.svg",
    },
    {
      url: "#",
      src: "https://http2.mlstatic.com/storage/logos-api-admin/5cc05a00-d012-11ea-be41-3936b95cb468-m.svg",
    },
    {
      url: "#",
      src: "https://http2.mlstatic.com/storage/logos-api-admin/751ea930-571a-11e8-9a2d-4b2bd7b1bf77-m.svg",
    },
    {
      url: "#",
      src: "https://http2.mlstatic.com/storage/logos-api-admin/d7e55980-f3be-11eb-8e0d-6f4af49bf82e-m.svg",
    },
    {
      url: "#",
      src: "https://http2.mlstatic.com/storage/logos-api-admin/26fbb110-571c-11e8-95d8-631c1a9a92a9-m.svg",
    },
    {
      url: "#",
      src: "https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg",
    },
    {
      url: "#",
      src: "https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg",
    },
  ];

  return (
    <div className={`${css.bottom}`}>
      <small>Copyright © 1999-2023 MercadoFree S.R.L.</small>
      <ul>
        {tarjetas.map(({ url, src }) => (
          <li key={src}>
            <Link to={url}>
              <img src={src} alt="tarjetas aceptadas"/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
