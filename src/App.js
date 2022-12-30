import './App.css';
import About from './Componet/About/About';
import Footer from './Componet/Footer/Footer';
import Gamer from './Componet/Gamer/Gamer';
import Header from './Componet/Header/Header';
import Image from './Componet/Image/Image';
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
      <Image></Image>
      <Footer></Footer>
    </div>
  );
}

export default App;
