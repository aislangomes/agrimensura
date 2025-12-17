import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsappButton } from "@/components/WhatsappButton";
import { Profile } from "../components/Profile";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Profile/>
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <WhatsappButton />
    </main>
  );
}
