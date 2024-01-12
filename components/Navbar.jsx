import Link from "next/link";
import { CiHome } from "react-icons/ci";
import { ActiveLink } from "./ActiveLink";

const Links = [
  {
    id: 1,
    ruta: "/about",
    name: "About",
  },
  {
    id: 2,
    ruta: "/contact",
    name: "Contact",
  },
  {
    id: 3,
    ruta: "/pricing",
    name: "Pricing",
  },
];

export const Navbar = () => {
  return (
    <nav className="bg-indigo-950 text-white flex items-center p-3 m-5 rounded-md text-base">
      <Link className="flex  items-center text-xl " href="/">
        <CiHome className=" me-1" />
        <span>Home</span>
      </Link>
      <div className="grow"></div>
    {
        Links.map(link=>(
          <ActiveLink key={link.id} {...link} />
        ))
    }
    </nav>
  );
};
