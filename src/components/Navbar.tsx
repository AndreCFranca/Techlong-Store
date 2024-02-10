import { MdOutlineMenu } from 'react-icons/md';
import { Logo } from '../assets/Logo.svg';

export const Navbar = () => {
  return (
    <nav className="xs:flex justify-between">
      <div className="flex gap-5">
        <link>
          <img className="w-10" src={Logo} alt="logo Techlong" />
          <h3 className="font-primary font-bold text-xs">TechLong</h3>
        </link>{' '}
      </div>
      <div>
        <MdOutlineMenu size={30} />
      </div>
    </nav>
  );
};
