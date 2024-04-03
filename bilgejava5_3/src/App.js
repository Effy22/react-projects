
import Button from './components/Button';
import Header from './components/Header';
import Info from './components/Info';
import Footer from './components/Footer';
//Componentler bu şekilde import ediliyor.


function App() {
  const user = {
    profilePic : "https://upload.wikimedia.org/wikipedia/commons/b/b2/Van_Damme_Cannes_2010_%28cropped%29.jpg",
    fullName:  "Jean-Claude Van Damme",
    proffession: "Actor",
    profileUrl: "www.vandamme.com",
    about: "Van Damme was born Jean-Claude Camille François Van Varenberg in Berchem-Sainte-Agathe, Brussels, Belgium, toEliana and Eugène Van Varenberg, an accountant. The Muscles fromBrussels startedmartial arts at the age of eleven. His father introduced him to martialarts when he saw his son was physically weak. At the age of 12, VanDamme began his martial arts training at Centre National De ",
    interests: " martial artist and actor"
  }

  const fullName = "Jane Doe"
  const image = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww"
  return (
    <div className='app'>
      <Header profilePic={user.profilePic} fullName={user.fullName} proffession={user.proffession} profileUrl={user.profileUrl} about={user.about} interests={user.interests} />
      <Button bgColor="#38b" color="white" text="LinkedIn" url="https://www.linkedin.com"/>
      <Button bgColor="#white" color="black" text="Google" url="https://www.google.com"/>
      <Info about={user.about} interests={user.interests}/>
      <Footer/>
    
    </div>
  );
}

export default App;
