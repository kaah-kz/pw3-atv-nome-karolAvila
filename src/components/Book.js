function Book({ image }) {
    return (
      <div className="cardBook">
        {/* <div className="bookDetails">
          <h3>{title}</h3>
          <p>{author}</p>
          <p>{description}</p>
        </div> */}
        
        <img src={image} width={300} alt="Capa do livro: Babilônia: A Mesopotâmia e o nascimento da civilização" />

        <p>Passe o mouse para ampliar a imagem</p>

        <button>Ler amostra</button>
      </div>
    );
  }
  
  export default Book;
  