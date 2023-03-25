import React from "react";

const MenuCard = (props) => {
  const { menu } = props;
  return (
    <>
      <div className="MenuCard">
        <img src={menu.menuImage} alt="" />
        <div>{menu.menuTitle}</div>
      </div>
    </>
  );
};

export default MenuCard;
