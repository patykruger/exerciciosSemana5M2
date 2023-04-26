import React from "react";
import PropTypes from "prop-types";

const Contato = ({ imagem, nome, descricao, status }) => {
  return (
    <div>
      <img src={imagem} alt={nome} />
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <p>Status: {status}</p>
    </div>
  );
};

Contato.propTypes = {
  imagem: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Contato;
