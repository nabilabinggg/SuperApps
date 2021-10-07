import Header from "../Header/header";
import Footer from "../Footer/footer";
import FaqContent from "../Content/faqcontent";
import Banner from "../Banner/banner";

function layoutfaq({ children }) {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <FaqContent></FaqContent>
      <Footer></Footer>
      {children}
    </div>
  );
}

export default layoutfaq;
