import { useState } from "react";
import Body from "./Body";

let active = 0;
const Menu = () => {
  const [active, setActive] = useState(0);
  const onClickButton = (data) => setActive(data);

  return (
    <div className="menuContainer">
      <ul className="subMenuContainer">
        <li
          className={active === 0 ? "activeButton" : "unactiveButton"}
          onClick={() => onClickButton(0)}
        >
          РУС
        </li>
        <li
          className={active === 1 ? "activeButton" : "unactiveButton"}
          onClick={() => onClickButton(1)}
        >
          TUR
        </li>
        <li
          className={active === 2 ? "activeButton" : "unactiveButton"}
          onClick={() => onClickButton(2)}
        >
          ENG
        </li>
      </ul>
      <Body active={active} />
    </div>
  );
};

export default Menu;
