import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Adreess from './Component/Profile/Adreess';
import'./Component/Profile/profilPhoto.css';

function App() {
  return (
    <div className="App">
  <ProfilePhoto/>
  <FullName/>
  <Adreess/>
    </div>
  );
}

export default App;
