import Header from "../Header/header";
import Footer from "../Footer/footer";

function LayoutNews ({ children }) {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  );
}

export default LayoutNews;