import { getAllMenu } from "@/pages/api/api-service";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();

  const onClickLogo = () => {};
  return (
    <>
      <div className="Header">
        <Link href="/">
          <span onClick={onClickLogo}>Kenny Resto</span>
        </Link>
        <div>
          <span>Kenny님</span>
          <span>로그아웃</span>
        </div>
      </div>
    </>
  );
};

export default Header;
