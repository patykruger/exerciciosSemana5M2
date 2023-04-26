import React from "react";

const contatos = [
  {
    imagem:
      "https://th.bing.com/th/id/R.a8e59755f03f7cb401f576fea5ce42e2?rik=xADQW3T1j2wr8g&pid=ImgRaw&r=0",
    nome: "Sr Big Z",
    descricao: "Surfista e empresário.",
    status: "ativo",
  },
  {
    imagem:
      "https://th.bing.com/th/id/R.9950e38c9d7385f8c99bd1940ccda367?rik=o8g1DeG2riM5Zw&pid=ImgRaw&r=0",
    nome: "Maverick",
    descricao: "Surfista",
    status: "ausente",
  },
  {
    imagem:
      "https://th.bing.com/th/id/R.3cf983cec3923273387bce82fdf32b90?rik=sLlc7bG%2fVAErOA&riu=http%3a%2f%2f3.bp.blogspot.com%2f_Wh6Rk6azNRg%2fSXRkOUhzsFI%2fAAAAAAAAAMA%2fFvwmpjZRlyA%2fw1200-h630-p-k-no-nu%2fjoao_frango_1.bmp&ehk=4mN1LgV8vwtCSJyBW5pZKGTOAs4SgeDCbE99DIm8M9s%3d&risl=&pid=ImgRaw&r=0",
    nome: "João Frango",
    descricao: "Surfista e músico.",
    status: "inativo",
  },
];

const ListadeContatos = ({ contatos }) => {
  return (
    <ul>
      {contatos.map((contato) => (
        <li key={contato.nome} className="contato-item">
          <img
            src={contato.imagem}
            alt={contato.nome}
            className="contato-imagem"
          />
          <div className="contato-info">
            <h2 className="contato-nome">{contato.nome}</h2>
            <p className="contato-descricao">{contato.descricao}</p>
            <p className={`contato-status ${contato.status}`}>
              {contato.status}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  return (
    <div>
      <h1>Lista de Contatos</h1>
      <ListadeContatos contatos={contatos} />
    </div>
  );
};

export default App;
