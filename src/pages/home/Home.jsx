
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Hero } from "../../components/hero/Hero";

const Home = () => {
  return (
    <>
    <Header />
      <Hero
        title="MyTinerary"
        subtitle="This website allows you to visit different cities in the world in a very real way."
      />
      <Footer/>
    </>
  );
};

export default Home;
