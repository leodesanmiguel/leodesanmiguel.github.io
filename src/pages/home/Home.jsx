

import { 
  Hero, 
  CallToAction, 
  Header, 
  Footer,
  textHero, 
  Carousel
} from "../Mycomponents";

// import Muestra from "../../components/muetra/Muestra";

const { titulo, subtitulo } = textHero;

const Home = () => {
  return (
    <>
      <Header />
      <Hero title={titulo} subtitle={subtitulo} />
      <CallToAction
        id="carousel"
        title="The Popular Cities "
        description="The best cities visited by our customers."
        cardId={1}
      />
      <Carousel />
      {/* <Muestra/> */}
      <Footer />
    </>
  );
};

export default Home;
