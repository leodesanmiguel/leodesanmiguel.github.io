import { useSelector } from "react-redux";
import { Hero, CallToAction, Carrousel } from "../Mycomponents";

export const Home = () => {
  const { title, description, id } = useSelector(
    (state) => state.home.titlesCall
  );

  const { titulo, subtitulo } = useSelector((state) => state.home.textHero);

  return (
    <>
      <Hero title={titulo} subtitle={subtitulo} />
      <CallToAction id={id} title={title} description={description} />
      <Carrousel />
    </>
  );
};
