import Button from "../../components/Button";

const Home = () => {
  return (
    <div className="flex justify-between h-full w-full items-center">
      <div className="w-1/2 flex justify-center">
        <h1 className="text-2xl">Pagina de Home</h1>
      </div>
      <div className="w-1/2 flex justify-center">
        <Button name={"Entrar"} />
      </div>
    </div>
  );
};

export default Home;
