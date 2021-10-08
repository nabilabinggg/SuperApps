import Footer from "../Footer/footer";
import Header from "../Header/header";

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