// 홈 화면에 테마별 가로로 긴 Featured Menu를 리스팅하는 컴포넌트
import MenuCard from "../ui/MenuCard";

const FeaturedMenu = (props) => {
  const { title, menu } = props;
  console.log(props);

  return (
    <>
      <div className="FeaturedMenu">
        <span>{title}</span>
        <div>
          {menu?.map((menu) => (
            <MenuCard menu={menu} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedMenu;
