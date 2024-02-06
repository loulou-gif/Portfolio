import { Facebook, Mail, Phone, Twitter } from "@material-ui/icons";

const Footer = () => {
    return(
        <footer className="footer w-full   mt-20 pt-10 ">
            <div className="first flex p-5 justify-evenly ">
                <div className="contact h-56 border text-left w-4/12">
                    <h3 className="text-3xl mb-5">Contactez-moi</h3>
                    <div className="paragraphes text-xl flex justify-start flex-col">
                        <p><Phone/> +225 078 732 9780</p>
                        <p><Mail/> Konankanjulius10@gmail.com</p>
                        <p><Facebook/> Julius konan</p>
                        <p><Twitter/> Kadmiel konan</p>
                    </div>
                </div>
                <form className="formulaire  flex-col w-4/12">
                    <div>
                        <input className="w-9/12 h-10  mb-5 rounded-xl" placeholder="Email "/>
                    </div>
                    <textarea className="w-9/12  h-20 rounded-xl"></textarea>
                    <div className=" ">
                        <button className=" w-9/12 bg-black rounded-xl hover:bg-gray-400 hover:shadow-2xl duration-300 text-white text-2xl">ENVOYER</button>
                    </div>
                </form>
            </div>
            <div className="copyright text-white text-3xl bg-neutral-400">
                <p>copyright by K4dk27</p>
            </div>
        </footer>
    )
}

export default Footer;