import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Navbar />
      <main className="Content">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
