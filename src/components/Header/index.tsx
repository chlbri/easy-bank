import Logo from './Logo';
import HeaderMenu from './Menu';
import Hamburger from './Hamburger';

export default function Header():JSX.Element{
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <HeaderMenu />
      <Hamburger />
    </div>
  );
}