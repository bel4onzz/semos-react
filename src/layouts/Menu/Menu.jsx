import "./style.css";

export const Menu = () => {
  return (
    <>
      <input type="radio" name="slider" id="menu-btn" />
      <input type="radio" name="slider" id="close-btn" />
      <ul className="nav-links">
        <label htmlFor="close-btn" className="btn close-btn">
          <i className="fas fa-times"></i>
        </label>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#" className="desktop-item">
            Dropdown Menu
          </a>
          <input type="checkbox" id="showDrop" />
          <label htmlFor="showDrop" className="mobile-item">
            Dropdown Menu
          </label>
          <ul className="drop-menu">
            <li>
              <a href="#">Drop menu 1</a>
            </li>
            <li>
              <a href="#">Drop menu 2</a>
            </li>
            <li>
              <a href="#">Drop menu 3</a>
            </li>
            <li>
              <a href="#">Drop menu 4</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Feedback</a>
        </li>
      </ul>
      <label htmlFor="menu-btn" className="btn menu-btn">
        <i className="fas fa-bars"></i>
      </label>
    </>
  );
};
