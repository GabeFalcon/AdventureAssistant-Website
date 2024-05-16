import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <main className="App">
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    )
}
 
export default Layout