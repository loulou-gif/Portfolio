import Copyright  from "../Components/Copyrights";
import Biographie from "../Components/Biographie";
import Experiance from "../Components/Experiances";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Realisation from "../Components/Réalisation";
import Skills from "../Components/Skills";

const Home = () => {
    return(
        <div>
            <NavBar/>
            <Header/>
            <Biographie/>
            <Skills/>
            <Experiance/>
            <Realisation/>
            <Footer/>
            <Copyright/>
        </div>
    )
}

export default Home;