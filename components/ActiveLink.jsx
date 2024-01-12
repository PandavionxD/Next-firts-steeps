"use client"
import Link from "next/link";
import estilos from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

export const ActiveLink = ({ name, ruta }) => {
  const path = usePathname();
  console.log({path});

  return (
    <Link className={`ms-3 ${path===ruta ? estilos.linksActive : '' } ${estilos.links}  `} href={ruta}   >
      {name}
    </Link>
  );
};
