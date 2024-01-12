import Link from "next/link";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-2 h-full  ">
      <h1 className="text-5xl">Hola Mundo!!!</h1>
      <Link href={'/about'} className="text-indigo-600" >
      AboutPage
      </Link>
    </main>
  );
}
