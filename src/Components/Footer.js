import { FaPhoneAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Footer = () => {
    return(
        <footer id="footer" className="footer w-full   mt-20 pt-20 ">

                    
            <div id="first" className="first flex p-5 justify-evenly ">
                <div id="contact" className=" h-56  text-left w-6/12">
                    <div id="paragraphes" className="border-spacing-7 flex justify-evenly ">
                        <FaPhoneAlt className="icone text-5xl rounded-xl p-2 text-neutral-500  border border-neutral-500"/>
                        <CiMail className="icone text-5xl rounded-xl p-2 text-neutral-500  border border-neutral-500"/>
                        <FaFacebookF className="icone text-5xl rounded-xl p-2 text-neutral-500  border border-neutral-500"/>
                        <FaTwitter className="icone text-5xl rounded-xl p-2 text-neutral-500  border border-neutral-500"/>
                    </div>
                    <div id="paragraphes" className="border-spacing-7 flex  justify-around ">
                        <ul className='flex justify-around w-3/4 text-2xl text-neutral-500  m-16'>
                            <li className=''>Biographie</li>
                            <li className=''>Compétences</li>
                            <li className=''>Expériences</li>
                            <li className=''>Réalisations</li>
                            <li className=''>Contacts</li>
                        </ul>
                    </div>
                </div>
                {/* <form id="formulaire" className=" border flex-col w-3/12">
                    <div className="mb-5">
                        <input className="w-full p-5 h-10 rounded" placeholder="Email "/>
                    </div>
                    <textarea className="w-full mb-5 h-20 rounded pl-5 pt-2" placeholder="Message"></textarea>
                    <div className="flex justify-end ">
                        <button className=" w-3/12 h-10 bg-black hover:bg-gray-400 hover:shadow-2xl duration-300 text-white text-2xl" >ENVOYER</button>
                    </div>
                </form> */}
            </div>
            
        </footer>
    )
}

export default Footer;