import {nanoid} from 'nanoid';

export default function Hamburger(): JSX.Element {
  const className = 'h-1 w-7 bg-blue-700 rounded';

  return (
    <a href="#" className="flex gap-1 flex-col">
      {Array.from({length: 3}).map(() => (
        <span key={nanoid()} {...{className}} />
      ))}
    </a>
  );
}
