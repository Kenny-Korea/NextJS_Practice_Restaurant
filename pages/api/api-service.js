export const getAllMenu = async () => {
  const getData = await fetch(
    "https://raw.githubusercontent.com/Kenny-Korea/JSON_Repository/main/Menu"
  );
  const menu = await getData.json();
  console.log(menu);
  return menu;
};

// export const getFeaturedData = async () => {
//   const allMenu = await getAllMenu();
// };

export const getPopularMenu = async () => {
  const allMenu = await getAllMenu();
  return allMenu.splice(0, 4);
};

export const getBreakfastMenu = async () => {
  const allMenu = await getAllMenu();
  return allMenu.filter((menu) => menu.menuAvailability === "breakfast");
};
