import { IconType } from 'react-icons';
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6';

interface Social {
    name: string;
    url: string;
    icon: IconType;
}

const socials: Social[] = [
    {
        name: 'Github',
        url: 'https://github.com/mansalmann/',
        icon: FaGithub,
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/mansalmann',
        icon: FaInstagram,
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/mansalmann',
        icon: FaLinkedin,
    },
];

export default socials;
