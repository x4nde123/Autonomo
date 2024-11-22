import { motion } from "framer-motion";
import "./index.scss";
import Textfield from "../../core/components/input";
import { useState } from "react";
import { api } from "../../services/axios-setup";
import { toast } from "react-toastify";
import Storage from 'local-storage'
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";


const LoginView = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate()

  const logar = async () => {

    const resposta = await api.post("/usuario", {
      email: email,
      senha: senha,
    });

    if (resposta.data.erro) {
      toast.error(resposta.data.erro)
    } else {
      toast.success(`Seja bem vindo, ${resposta.data.nome}!`)
      Storage('usuario', {
        ...resposta.data,
        logado_em: dayjs().toISOString()
      })
      navigate('/home/lista')
    }

  };

  return (
    <main className="login-main-container">
      <motion.div
        className="motion-div"
        initial={{ position: "absolute", top: 0, left: "-100%" }}
        animate={{ position: "relative", top: 0, left: "-25%", rotate: 45 }}
        transition={{ type: "spring", stiffness: 100, damping: 35 }}
      >
        <div>
          <h1>Faça login</h1>
          <h2>E entre para o nosso time!</h2>
        </div>
      </motion.div>
      <motion.div
        className="login-container"
        initial={{ position: "relative", top: "-50%" }}
        animate={{ position: "relative", top: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <h1>Login</h1>

        <div className="login-content">
          <div className="form">
            <Textfield
              value={email}
              onChange={e => setEmail(e.target.value)}
              label="E-mail"
            />
            <Textfield
              value={senha}
              onChange={e => setSenha(e.target.value)}
              label="Senha"
            />
            <p>Esqueceu a senha?</p>
          </div>
          <button onClick={logar}>Entrar</button>
        </div>
      </motion.div>
    </main>
  );
};

export default LoginView;
