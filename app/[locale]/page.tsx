import { getDictionary } from "@/lib/i18n";
import IntroAnimation from "@/components/IntroAnimation";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Stack from "@/components/Stack";
import Services from "@/components/Services";
import Resume from "@/components/Resume/FolderManila";
import Contact from "@/components/Contact";
import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";

export default function HomePage({ params }: { params: { locale: string } }) {
  const dict = getDictionary(params.locale);

  return (
    <>
      <IntroAnimation />
      <CustomCursor />
      <SmoothScroll>
        <Navbar locale={params.locale} dict={dict} />
        <main>
          <Hero dict={dict} locale={params.locale} />
          <About dict={dict} />
          <Work dict={dict} />
          <Stack dict={dict} />
          <Services dict={dict} />
          <Resume dict={dict} locale={params.locale} />
          <Contact dict={dict} locale={params.locale} />
        </main>
        <Footer dict={dict} />
      </SmoothScroll>
      <ChatWidget dict={dict} />
    </>
  );
}
