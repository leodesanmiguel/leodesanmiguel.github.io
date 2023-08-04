import { textHero } from "../../common/constants";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Hero } from "../../components/hero/Hero";
import { CallToAction } from "../../components/CallToAction";

const { titulo, subtitulo } = textHero;

const Home = () => {
  return (
    <>
      <Header />
      <Hero title={titulo} subtitle={subtitulo} />
      <CallToAction title="QUQU" subtitle="sub titulo ququ" cardId={1} link='/link' />

      <Footer />
    </>
  );
};

export default Home;
