import FeaturedMenu from "@/components/layout/FeaturedMenu";
import MenuCard from "@/components/ui/MenuCard";
import React from "react";
import { getBreakfastMenu, getPopularMenu } from "./api/api-service";

const HomeContent = (props) => {
  const { popularMenu, breakfastMenu } = props;
  return (
    <>
      <div className="HomeContent">
        <div className="slidebar">
          최고의 메뉴를 맛보세요
          <img src="chef.png" alt="" />
          <div className="test">
            <p>전속 요리사</p>
            <p>Kenny Kim</p>
          </div>
        </div>
        {popularMenu && <FeaturedMenu title="인기 메뉴" menu={popularMenu} />}
        {breakfastMenu && (
          <FeaturedMenu title="아침 메뉴" menu={breakfastMenu} />
        )}
      </div>
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

export default HomeContent;
