import React from "react";

function MenuBar({ isActive, toggleMenu, scroll }) {
  return (
    <div className="menu-bar">
      <div className={`bg-block ${isActive && "is--active"}`}/>
      <div className="name-block">becket cerny</div>
      <div className="hamburger-block" onClick={() => toggleMenu()} type="button">
        <button class={`hamburger hamburger--spin ${isActive && "is--active"}`} >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <p className={`helper-menu ${(scroll || isActive) && "scrolled"}`}>( menu &#9650; )</p>
      <p className={`helper-scroll ${(scroll || isActive) && "scrolled"}`}>( scroll &#9660; )</p>
    </div>
  );
}

export default MenuBar;
