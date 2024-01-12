import { Navbar } from "@/components/Navbar"

const layoutGeneral = ({children}) => {
  return (
    <>
    <Navbar/>
    <main className="grid place-content-center place-items-center h-full">
        <h3  >Hello World!</h3>
        {children}
    </main>
    </>
  )
}

export default layoutGeneral