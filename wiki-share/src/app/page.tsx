import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1> Hello World ! </h1>
        <p> My name is WikiShare </p>
      </main>
      <Footer />
    </>
  );
}
