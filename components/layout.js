import Footer from "./footer";
import Header from "./header";

const Layout = ({children}) => {
    return ( 
        <>
            <Header/>
            <div className="md:mt-20"/>
            {children}
            <Footer/>
        </>
     );
}
 
export default Layout;