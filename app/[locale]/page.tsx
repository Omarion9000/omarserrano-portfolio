import { getDictionary } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";

export default function HomePage({ params }: { params: { locale: string } }) {
  const dict = getDictionary(params.locale);

  return (
    <>
      <Navbar locale={params.locale} dict={dict} />
      <main>
        <Hero dict={dict} locale={params.locale} />
        <About dict={dict} />
        <Work dict={dict} />
        <Services dict={dict} />
        <Contact dict={dict} locale={params.locale} />
      </main>
      <Footer dict={dict} />
      <ChatWidget dict={dict} />
    </>
  );
}
