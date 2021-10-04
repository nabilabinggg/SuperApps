import Header from "../Header/header";
import Slider from "../Slider/slider";
import Content from "../Content/content";
import News from "../News/news";
import Footer from "../Footer/footer";

function Layout({children}){
    return(
        <div>
            <Header/>
            <Slider/>
            <Content/>
            <News/>
            <Footer/>
            {children}
        </div>
    );
}
export default Layout