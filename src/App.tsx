import { BlueSwitch } from './components/switch/simpleBlue';
import './style/style.css';

type HeaderProps = {
  
};

const Header = (props: HeaderProps) => {
  const {} = props;
  return (
    <div className="topHeader">
      <img src="./src/media/myself.JPG" className="logo"/>
      <div className="content">
        <p className="ownerName">
          Kilian Beuchard
          <br />
          Fullstack Engineer
        </p>
        <div className="switchLanguage">
          <BlueSwitch />
        </div>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Header /> 
    </div>
  )
}

export default App
