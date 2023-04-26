
import './App.css';
import Profile from './Profile/Profile';


function App() {
  const profile_details = {
    fullName: "Hassen Jeiden",
    bio: "Hi,I'm a Junior developer I'm just graduated, have a little work experience, so still have a lot to learn and gain expertise.",
    profession: "Junior Developper"
  };
  const styleImage = { width: 200, heigh: 200 };
  const styleApp = { textAlign: "center" };
  const handleName=(name)=>{
    alert(name)
  }
  return (
    <div className="App" style={styleApp}>
      <header className="App-header">
        <div>
          <Profile pf={profile_details} handleName={handleName}><img src='picture.png' style={styleImage} ></img></Profile>
        </div>
      </header>
    </div>
  );
}

export default App;
