function Book({ titulo, autor, imagem, descricao }) {
    return (
      <div className="cardBook">
        <div className="bookDetails">
          <h3>{titulo}</h3>
          <p>{autor}</p>
          <p>{descricao}</p>
        </div>
        <img src={imagem} width={300} alt="Capa do livro: Babilônia: A Mesopotâmia e o nascimento da civilização" />
      </div>
    );
  }
  
  export default Book;
  