import logo from "./logo.png";
import search from "./search.png";
import styles from "./Cabecalho.module.scss";
import { useState } from "react";

const Cabecalho = () => {
  const [placeholder, setPlaceholder] = useState("O que você procura?");

  function focado() {
    setPlaceholder("");
  }

  function desfocado() {
    setPlaceholder("O que você procura?");
  }

  return (
    <header className={styles.cabecalho}>
      <img src={logo} alt="Logo do Alura Space" />
      <div className={styles.cabecalho__container}>
        <input
          className={styles.cabecalho__input}
          type="text"
          placeholder={placeholder}
          onFocus={focado}
          onBlur={desfocado}
        />
        <img src={search} alt="Ícone de lupa" />
      </div>
    </header>
  );
};

export default Cabecalho;
