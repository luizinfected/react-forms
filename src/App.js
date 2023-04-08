import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App-header">
      <h2>Forms</h2>
      <MyForm user={{nameForm: "Luiz", emailForm:"luiz@example.com", bio: "Sou dev", role: 'admin'}}/>
    </div>
  );
}

export default App;
