import React from "react";
import CampoTexto from "../../components/CampoTexto";
import { IUserData } from "../Login";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../utils";

function Register() {
  const [userData, setUserData] = React.useState<IUserData>({
    email: "",
    password: "",
    repassword: "",
  });
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  async function handleRegister() {
    setLoading(true);
    if (userData.password !== userData.repassword) {
      return toast("As senhas devem ser iguais!", {
        theme: "dark",
        type: "info",
      });
    }
    try {
      await register(userData);
      toast(`Usuário criado com sucesso!`, {
        theme: "dark",
        type: "success",
      });
      navigate("login");
    } catch (error) {
      toast(`${error}`, {
        theme: "dark",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-[100vh] items-center justify-center bg-[#f2f1f6]">
      <div className="bg-white shadow-lg p-4 w-96 flex flex-col items-center justify-evenly rounded gap-3">
        <h1 className="text-2xl font-semibold text-gray-500 uppercase">
          Login
        </h1>

        <div className="w-full flex flex-col gap-3">
          <CampoTexto
            obrigatorio
            placeholder="Digite seu email"
            onChange={(event) =>
              setUserData({ ...userData, email: event.target.value })
            }
            type="text"
            value={userData.email}
          />
          <CampoTexto
            obrigatorio
            placeholder="Digite sua senha"
            onChange={(event) =>
              setUserData({ ...userData, password: event.target.value })
            }
            type={showPassword ? "text" : "password"}
            value={userData.password}
            isPassword
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
          <CampoTexto
            obrigatorio
            placeholder="Repita a senha"
            onChange={(event) =>
              setUserData({ ...userData, repassword: event.target.value })
            }
            type={showPassword ? "text" : "password"}
            value={userData.repassword}
            isPassword
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />

          <button
            onClick={() => navigate("/login")}
            className="text-blue-400 font-regular"
          >
            Já possui conta? Fazer login
          </button>
        </div>

        {/* UserData-Password */}

        <button
          onClick={handleRegister}
          className="bg-blue-400 w-2/5 rounded text-white font-semibold py-2"
        >
          {loading ? "Processando..." : "Registrar"}
        </button>
      </div>
    </div>
  );
}

export default Register;
