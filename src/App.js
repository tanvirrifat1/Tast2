import './App.css';
import About from './Componet/About/About';
import Gamer from './Componet/Gamer/Gamer';
import Header from './Componet/Header/Header';
import Login from './Componet/Login/Login';
import Message from './Componet/Message/Message';
import Use from './Componet/Use/Use';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header></Header>
      <Message></Message>
      <Login></Login>
      <Use></Use>
      <About></About>
      <Gamer></Gamer>
    </div>
  );
}

export default App;
