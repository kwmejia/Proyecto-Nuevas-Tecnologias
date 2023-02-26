import { Header } from "./components/header/Header";

const HomePage = () => {
  return (
    <section>
      <Header />
      <div className=" w-100 text-center my-5">
        <h1>Veterinaria Dalí</h1>
        <img src="/img/dali.jpg" alt="dali" className="rounded-circle" width={200} />
      </div>

    </section>
  );
}


export default HomePage;