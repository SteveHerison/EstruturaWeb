import { Link } from "react-router-dom";
import { useUser } from "../../context";

const Header = () => {
  const { state } = useUser();
  return (
    <div className="w-full h-20 bg-black text-white flex items-center px-2">
      <div className="container mx-auto flex justify-between">
        <div className="flex gap-3 items-center">
          <h1>Image</h1>
          <div className="flex flex-col">
            {state.name ? (
              state.name
            ) : (
              <p className="text-red-500">Usuario info</p>
            )}
            <p>Seja Bem vindo!</p>
          </div>
        </div>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/produtos">Produto</Link>
          </li>
          <li>
            <Link to="/lista">Lista</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
