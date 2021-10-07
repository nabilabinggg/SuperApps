import Header from "../Header/header";
import Footer from "../Footer/footer";

function LayoutInfo({ children }) {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  );
}

export default LayoutInfo;