import Image from "next/image";
import Header from "./components/header";
import Home from "./components/home";

export default function Page() {
  return (
    <>
    <Header />
    <main className="w-full h-fit">
      <Home />
    </main>
    </>
  );
}
