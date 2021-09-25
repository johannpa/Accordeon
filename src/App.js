import './App.css';
import Accordeon from './components/Accordeon';

function App() {
  return (
    <div className="App">
      <div className="accordeons">
        <Accordeon title="Titre 1" content="Contenu 1"/>
        <Accordeon title="Titre 2" content="Contenu 2"/>
        <Accordeon title="Titre 3" content="Contenu 3"/>
        <Accordeon title="Titre 4" content="Contenu 4"/>
      </div>
    </div>
  );
}

export default App;
