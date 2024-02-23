import imgBab from './assets/imgBab.jpg';
import Book from './components/Book';
import './App.css';

function App() {
  return (
    <div className="App">
      <Book
        titulo="Babilônia: A Mesopotâmia e o nascimento da civilização"
        autor="Paul Kriwaczek"
        imagem={imgBab}
        descricao= ""
      />
      <p>Passe o mouse para ampliar a imagem</p>
      <button>Ler amostra</button>
    </div>
  );
}

export default App;
