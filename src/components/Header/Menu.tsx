import {MENU_LINKS} from './data';

export default function HeaderMenu(): JSX.Element {
  const transform = (arg: string) => <a href="#">{arg}</a>;

  return <div className="flex gap-1">{MENU_LINKS.map(transform)}</div>;
}
