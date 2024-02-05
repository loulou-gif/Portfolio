import Biographie from "../Components/Biographie";
import Experiance from "../Components/Experiances";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Skills from "../Components/Skills";

const Home = () => {
    return(
        <div>
            <NavBar/>
            <Header/>
            <Biographie/>
            <Skills/>
            <Experiance/>
        </div>
    )
}

export default Home;