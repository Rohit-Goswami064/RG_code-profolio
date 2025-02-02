//hero icons
import GithubLineIcon from 'remixicon-react/GithubLineIcon';
import TwitterLineIcon from 'remixicon-react/TwitterLineIcon';


export const heroIcons = [
    <GithubLineIcon key="github-icon" />,
    <TwitterLineIcon key="twitter-icon" />,
]

//about me icon
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import Projector2LineIcon from 'remixicon-react/Projector2LineIcon'
import GroupLineIcon from 'remixicon-react/GroupLineIcon'
import AwardFillIcon from 'remixicon-react/AwardFillIcon'

export const aboutData = [
    {
        title: "Github Repos",
        amount: "100",
        icon: <GithubFillIcon />
    },
    {
        title: "Suceessful Projects",
        amount: "20",
        icon: <Projector2LineIcon />
    },
    {
        title: "Satisfied Clients",
        amount: "20",
        icon: <GroupLineIcon />
    },
    {
        title: "Awards and Recognition",
        amount: "2",
        icon: <AwardFillIcon />
    }
]

//about me icon
import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon'

export const DownloadIcon = <DownloadLineIcon />
export const ArrowLeftIcon = <ArrowLeftSFillIcon />

export const AboutText = "Hi, I'm Rohit, a versatile Web Developer and Designer. I seamlessly blend the technical expertise of web development with the creative finesse of web design. Proficient in HTML, CSS, JavaScript, React, Next.js, Node.js, and Figma, I specialize in building functional, responsive, and visually appealing websites that deliver exceptional user experiences."


//skill Section
export const skillsData = [

    {
        name: 'figma',
        icon: "/skills/figma.png"

    },
    {
        name: 'Vs Code',
        icon: "/skills/vscode.png"

    },
    {
        name: 'ai',
        icon: "/skills/ai.png"

    },
    {
        name: 'Html',
        icon: "/skills/html.png"

    },
    {
        name: 'CSS',
        icon: "/skills/CSS.png"

    },
    {
        name: 'javaSscript',
        icon: "/skills/js.png"

    },
    {
        name: 'ReactJs',
        icon: "/skills/react.png"

    },
    {
        name: 'Tailwind',
        icon: "/skills/tailwind.png"

    },
    {
        name: 'threeJS',
        icon: "/skills/threejs.png"

    },
    {
        name: 'nodeJS',
        icon: "/skills/nodejs.png"

    },
    {
        name: 'mongoDB',
        icon: "/skills/mongodb.png"

    },
    {
        name: 'typeScript',
        icon: "/skills/ts.png"

    },
    {
        name: 'vite',
        icon: "/skills/vite.png"

    },
    {
        name: 'framer',
        icon: "/skills/framer.png"

    },
    {
        name: 'Linux',
        icon: "/skills/Linux.png"

    },
    {
        name: 'material',
        icon: "/skills/Material UI.png"

    },
    {
        name: 'GSAP',
        icon: "/skills/gsap.jpeg"

    },
    {
        name: 'npm',
        icon: "/skills/NPM.png"

    },
    {
        name: 'Wordpress',
        icon: "/skills/WordPress.png"

    },
    {
        name: 'php',
        icon: "/skills/PHP.png"

    },
]

//Revives 
import StarSFillIcon from 'remixicon-react/StarSFillIcon';
import StarHalfLineIcon from 'remixicon-react/StarHalfLineIcon';
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon';
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon';

export const starIcon = [
    <StarSFillIcon key="star-fill" />,
    <StarHalfLineIcon key="star-half" />,
];

export const arrowIcon = [
    <ArrowLeftSLineIcon key="arrow-left" />,
    <ArrowRightSLineIcon key="arrow-right" />,
];

export const reviewsData = [
    {
        image: '/reviews/client-4.png',
        name: "Roshan Seo expert (aplexnulcues)",
        comment: "Your work on our website has been phenonmenal.",
        start: [1, 1, 1, 1, 0.5],
    },
    {
        image: '/reviews/client-2.png',
        name: "Hrithik,E-commerce store Owner(AutoCosmic) ",
        comment: "Working with you,has been an absolute pleasure.The e-commerce website you created for me is sleek,modern and beautifull showcase my work.",
        start: [1, 1, 1, 1, 0.5],
    }, {
        image: '/reviews/client-4.png',
        name: "Hrithik,E-commerce store Owner(AutoCosmic) ",
        comment: "Working with you,has been an absolute pleasure.The e-commerce website you created for me is sleek,modern and beautifull showcase my work.",
        start: [1, 1, 1, 1, 0.5],
    }
]

//Porjects button 
export const projectbutton = [
    'All',
    'Figma',
    'Html',
    'CSS',
    'JavaScript',
    'ReactJS',
    'TailwindCSS',
    'NextJS',
    'Framer-Motion',
    "threeJS",
    "NodeJS",
    "Wordpress"
]

//projects
export const projectData = [
    {
        name: "apexNucleus.com",
        des: "ApexNucleus is a cutting-edge digital marketing agency dedicated to empowering businesses with innovative online strategies and impactful branding solutions.",
        img: "/projects/apexnucleus.png",
        url: "https://apexnucleus.com/",
        tech: ['Figma', 'Html', 'CSS', 'JavaScript', 'TailwindCSS', 'ReactJS', 'NextJS', 'Framer-Motion']
    },
    {
        name: "netflix clone",
        des: "streming webiste",
        img: "/projects/netflixProject.png",
        url: "",
        tech: ['Html', 'CSS', 'JavaScript', 'TailwindCSS', 'ReactJS',]
    },
    {
        name: "country_flag",
        des: "show all countires flags in wolds and some extra detail",
        img: "/projects/Country_flagProjects.png",
        url: "https://rg-country-app.netlify.app/",
        tech: ['Figma', 'Html', 'CSS', 'JavaScript', 'ReactJS',]
    },
    {
        name: "auto_cosmic.in",
        des: "e-commmerce website to sell automobile cleaner prodects",
        img: "/projects/auto_cosmic.svg",
        url: "https://autocosmic.in/",
        tech: ['Wordpress', 'Html', 'CSS', 'JavaScript',]
    },
    {
        name: "activemuscle.in",
        des: "e-commerce website to sell supplement ",
        img: "projects/active_muslces.svg",
        url: "https://apexnucleus.com/",
        tech: ['Wordpress', 'Html', 'CSS', 'JavaScript',]
    },
    {
        name: "loanagasintproperty.in",
        des: "Help peoples to get loan easliy",
        img: "/projects/loan_agasint_property.svg",
        url: "https://apexnucleus.com/",
        tech: ['Wordpress', 'Html', 'CSS', 'JavaScript',]
    },
    {
        name: "tipsCal.in",
        des: "Help peoples to calculate tips ",
        img: "/projects/tipsCal.png",
        url: "https://apexnucleus.com/",
        tech: ['Html', 'CSS', 'JavaScript',]
    },
]
import CopyrightLineIcon from "remixicon-react/CopyrightLineIcon";
export const Copyrightcon = <CopyrightLineIcon />
import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import CodeSSlashLineIcon from 'remixicon-react/CodeSSlashLineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import UserAddLineIcon from 'remixicon-react/UserAddLineIcon'

import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon'
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon'
//navbar  data 
export const navbarData = [
    {
        id: "home",
        name: 'Home',
        icon: <Home5LineIcon />
    },
    {
        id: "about",
        name: 'About',
        icon: <UserLineIcon />
    },
    {
        id: "reviews",
        name: 'Reviews',
        icon: <UserAddLineIcon />
    },
    {
        id: "skills",
        name: 'Skills',
        icon: <CodeSSlashLineIcon />
    },
    {
        id: "projects",
        name: 'Projects',
        icon: <ProjectorLineIcon />
    },
    {
        id: "contact",
        name: 'Contact',
        icon: <ContactsBook2LineIcon />
    },
]

//ToggleIcon
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon'
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon'

export const SunIcon = <SunFoggyFillIcon />
export const MoonIcon = <MoonFoggyFillIcon />