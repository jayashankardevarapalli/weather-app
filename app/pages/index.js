import Navbar from "../components/Navbar";
import Weather from "../sections/Weather";
import About from "../sections/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Weather />
      <About />
    </>
  );
}
