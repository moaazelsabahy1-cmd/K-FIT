import Hero from "./components/hero";
import Message from "./components/message";
import Content from "./components/content";
import Program from "./components/program";
import Services from "./components/services";
import Prices from "./components/prices";
import Reviews from"./components/reviews";
export default function Home() {
  return (
    <main>
      <Hero />
      <Message className="section__container bg__blur" />
      <Content />
      <Program />
      <Services className="section__container bg__blur" />
      <Prices className="section__container bg__blur" />
      <Reviews />
    </main>
  );
}
