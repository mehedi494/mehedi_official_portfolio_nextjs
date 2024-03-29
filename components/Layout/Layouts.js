import Footer from "../footer";
import Navbar from "../navbar";

const Layouts = ({ children }) => {

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar></Navbar>
      <main className="bg-[url('/white-color-background-ghw6e685ri75chj4.jpg')] dark:bg-gray-900 dark:bg-[url('/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product-plain-studio-background.jpg')]  dark:bg-cover"> <div className="backdrop-blur-2xl">{children}</div></main>
      <Footer></Footer>
    </div>
  );
};

export default Layouts;
