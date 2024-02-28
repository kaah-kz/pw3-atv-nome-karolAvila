function Book({ image }) {
    return (
      <div className="cardBook">
        
        <img src={image} width={300} alt="Capa do livro: Babilônia: A Mesopotâmia e o nascimento da civilização" />

        <p>Passe o mouse para ampliar a imagem</p>

        <button>Ler amostra</button>
      </div>
    );
  }
  
  export default Book;
  