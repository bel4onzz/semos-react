import { Menu } from "../Menu/Menu";
import "./style.css";


export const Header = () => {
  return (
    <>
      <nav>
        <div className="wrapper">
          <div className="logo">
            <a href="#">Logo</a>
          </div>

          <Menu />
        </div>
      </nav>
    </>
  );
};
