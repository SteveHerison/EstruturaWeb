import { useState } from "react";
import Button from "../../components/Button";
import InputsForm from "../../components/InputsForm";
import { useUser } from "../../context";
import { useNavigate } from "react-router-dom";
import BackImage from "../../assets/nubelson-fernandes--Xqckh_XVU4-unsplash.jpg";

const Login = () => {
  const { dispatch } = useUser();
  const [inputName, setInputName] = useState("");
  const navigate = useNavigate();

  const handleName = () => {
    dispatch({
      type: "CHANGE_NAME",
      payload: {
        name: inputName,
      },
    });
    setInputName("");
    navigate("/home");
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="w-1/2 flex-1">
        <h1 className="text-2xl">Pagina de Login</h1>
        <div className="flex flex-col">
          <InputsForm
            id={inputName}
            type="text"
            label="Nome"
            value={inputName}
            setValue={setInputName}
            placeholder="Qual o seu nome?"
          />
          <Button name={"Entrar"} onClick={handleName} />
          <p className="text-center mt-3">
            Já possui cadastro?{" "}
            <button className="font-semibold text-orange-500 hover:underline">
              Criar Conta
            </button>{" "}
          </p>
        </div>
      </div>

      <div
        className="h-full w-1/2 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackImage})`,
        }}
      />
    </div>
  );
};

export default Login;
