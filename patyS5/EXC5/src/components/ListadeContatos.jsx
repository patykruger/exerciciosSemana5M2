import React from "react";
import PropTypes from "prop-types";
import Contato from "./Contato";

const ListadeContatos = ({ contatos }) => {
  return (
    <div>
      {contatos.map((contato) => (
        <Contato
          key={contato.nome}
          imagem={contato.imagem}
          nome={contato.nome}
          descricao={contato.descricao}
          status={contato.status}
        />
      ))}
    </div>
  );
};

ListadeContatos.propTypes = {
  contatos: PropTypes.arrayOf(
    PropTypes.shape({
      imagem: PropTypes.string.isRequired,
      nome: PropTypes.string.isRequired,
      descricao: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListadeContatos;
