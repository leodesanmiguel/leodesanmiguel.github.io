
import { 
  Hero, 
  CallToAction, 
  Carrousel, 
  Header, 
  Footer,
  textHero 
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
      <Carrousel />
      {/* <Muestra/> */}
      <Footer />
    </>
  );
};

export default Home;
