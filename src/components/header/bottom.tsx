import css from './styles/bottom.module.css'
import { SvgSearch } from "../../assets/svg/search";
////////////////////////////////////////////////////
export const Bottom = () => {
  return (
     <section className={`${css.section}`}>
        <div>
          <h2>Digital Ocean</h2>
          <form className={`${css.form}`}>
            <input type="text" />
            <button>
              <SvgSearch size={1.6}/> 
            </button>
          </form>
          <img src="https://http2.mlstatic.com/D_NQ_773701-MLA54334638216_032023-OO.webp" />
        </div>
      </section>

  )
}

