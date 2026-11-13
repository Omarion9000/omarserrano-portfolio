import { getDictionary } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import Skills from "@/components/Skills";
import Apps from "@/components/Apps";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage({ params }: { params: { locale: string } }) {
  const dict = getDictionary(params.locale);
  return (
    <>
      <Navbar locale={params.locale} dict={dict} />
      <main>
        <Hero dict={dict} locale={params.locale} />
        <FeaturedProject dict={dict} locale={params.locale} />
        <Skills dict={dict} />
        <Experience dict={dict} />
        <Education dict={dict} />
        <Apps dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
