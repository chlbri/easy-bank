import Link from 'next/link';

const LOGO = () => {
  return (
    <svg
      className="h-10 w-10 fill-current text-blue-700"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 93.218 93.218"
    >
      <g>
        <g>
          <path d="M70.547,13.228c-1.189-2.818-3.953-4.652-7.012-4.52h-49.98v15.223h31.952L0,70.561h21.242l47.747-49.065C71.124,19.304,71.736,16.047,70.547,13.228z" />
          <path d="M93.218,22.658H71.977L24.229,71.724c-2.135,2.189-2.748,5.449-1.558,8.267c1.19,2.82,3.953,4.651,7.012,4.651h49.8V69.419H47.711L93.218,22.658z" />
        </g>
      </g>
    </svg>
  );
};

export default function Logo(): JSX.Element {
  return (
    <Link href="/" passHref>
      <div className="flex items-center gap-1 cursor-pointer">
        <LOGO />
        <span className="text-blue-900">EasyBank</span>
      </div>
    </Link>
  );
}
