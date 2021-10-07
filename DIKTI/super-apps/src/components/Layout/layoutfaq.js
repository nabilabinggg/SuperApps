import Header from "../Header/header";
import Footer from "../Footer/footer";
import Banner from "../Banner/banner";

function layoutfaq({ children }) {
  return (
    <div>
      <Header/>
      <Banner/>
      {children}
      <Footer/>
    </div>
  );
}

export default layoutfaq;
