import Image from "next/image";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";

export default function Page() {
  return (
    <>
    <Header />
    <main className="w-full h-[500vh] bg-[url(/img/background1.jpg)] bg-contain ">
      <Home />
      <About />
    </main>
    </>
  );
}
