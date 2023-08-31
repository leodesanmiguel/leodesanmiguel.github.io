

import { 
  Hero, 
  CallToAction, 
  textHero, 
  Carrousel
} from "../Mycomponents";

// import Muestra from "../../components/muetra/Muestra";

const { titulo, subtitulo } = textHero;

export const Home = () => {
  return (
    <>
      <Hero title={titulo} subtitle={subtitulo} />
      <CallToAction
        id="carousel"
        title="The Popular Cities "
        description="The best cities visited by our customers."
        cardId={1}
      />
      <Carrousel />
      {/* <Muestra/> */}
    </>
  );
};

