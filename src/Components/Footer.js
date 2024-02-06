import { Facebook, Mail, Phone, Twitter } from "@material-ui/icons";

const Footer = () => {
    return(
        <footer className="footer w-full   mt-20 pt-20 ">
            <div className="first flex p-5 justify-evenly ">
                <div className="contact h-56  text-left w-4/12">
                    <h3 className="text-5xl font-bold mb-5">Contactez-moi</h3>
                    <div className="paragraphes text-2xl flex justify-start flex-col">
                        <p><Phone/> +225 078 732 9780</p>
                        <p><Mail/> Konankanjulius10@gmail.com</p>
                        <p><Facebook/> Julius konan</p>
                        <p><Twitter/> Kadmiel konan</p>
                    </div>
                </div>
                <form className="formulaire border flex-col w-3/12">
                    <div className="mb-5">
                        <input className="w-full p-5 h-10 rounded" placeholder="Email "/>
                    </div>
                    <textarea className="w-full mb-5 h-20 rounded pl-5 pt-2" placeholder="Message"></textarea>
                    <div className="flex justify-end ">
                        <button className=" w-3/12 h-10 bg-black hover:bg-gray-400 hover:shadow-2xl duration-300 text-white text-2xl" >ENVOYER</button>
                    </div>
                </form>
            </div>
            
        </footer>
    )
}

export default Footer;