import { MdDeveloperMode } from "react-icons/md";
import { SiTryhackme } from "react-icons/si";
import { FaServer } from "react-icons/fa";
import { SiTestcafe } from "react-icons/si";

export const skillsContent = [
    {
        name: "Développeur Front-End",
        icone: <MdDeveloperMode/>,
        skill1: "Réact js",
        skill2: "Tailswind Css",
        skill3: "Wordpress",
        skill4: "Booststrap",
        skill5: "",
    },
    {
        name: "Développeur Back-End",
        icone: <FaServer/>,
        skill1: "Django",
        skill2: "PostgreSql",
        skill3: "Mysql",
        skill4: "EC2 AWS",
        skill5: "Cloud computing", 
    },
    {
        name: "Test Logiciels",
        icone: <SiTestcafe/>,
        skill1: "Test Fonctionnel",
        skill2: "Test de charge",
        skill3: "Automatisation",
        skill4: "Rédaction documentation",
        skill5: "Support",
    },
    {
        name: "Hacking Ethique",
        icone: <SiTryhackme />,
        skill1: "Test d'intrusion",
        skill2: "Détection failles web",
        skill3: "Monitoring",
        skill4: "Formation et conseil client",
        skill5: "Patch de vulnérabilitées",
    },
]
