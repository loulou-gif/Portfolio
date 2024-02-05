import Biographie from "../Components/Biographie";
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
        </div>
    )
}

export default Home;