import HomePage from "@/components/HomePage/HomePage";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div >
        <NavBar />
        <main>
            <HomePage />
        </main>
        <Footer />
    </div>
  );
}
