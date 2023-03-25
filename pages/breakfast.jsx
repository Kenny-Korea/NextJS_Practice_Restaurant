import React from "react";
import { useQuery } from "react-query";
import { getBreakfastMenu, getPopularMenu } from "./api/api-service";
import FeaturedMenu from "@/components/layout/FeaturedMenu";

export const getAllMenu = async () => {
  const getData = await fetch(
    "https://raw.githubusercontent.com/Kenny-Korea/JSON_Repository/main/Menu"
  );
  const menu = await getData.json();
  return menu;
};

const breakfast = (props) => {
  const { popularMenu, breakfastMenu } = props;
  if (!popularMenu) return <p>loading</p>;

  // const { isLoading, error, data, isFetching } = useQuery(
  //   "repoData",
  //   getAllMenu
  // );
  // console.log(data);
  // console.log({ isLoading, isFetching });
  // if (isLoading) return <p>Loading</p>;

  // if (error) return "An error has occurred: " + error.message;
  return (
    <>
      {popularMenu && <FeaturedMenu title="인기 메뉴" menu={popularMenu} />}
      {breakfastMenu && <FeaturedMenu title="아침 메뉴" menu={breakfastMenu} />}
    </>
  );
};

export const getStaticProps = async () => {
  const popularMenu = await getPopularMenu();
  const breakfastMenu = await getBreakfastMenu();
  return {
    props: { popularMenu: popularMenu, breakfastMenu: breakfastMenu },
    revalidate: 60,
  };
};

export default breakfast;
