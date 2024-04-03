import Header from "./components/Header";

function App() {
  
  const description = " Lorem ipsumlar.. fdsfs.."
  const courses = [
    { id: 1, course: "HTML" },
    { id: 2, course: "CSS" },
    { id: 3, course: "JAVASCRIPT" },
    { id: 4, course: "REACT" },
    { id: 5, course: "RUBY" },
    { id: 6, course: "PYTHON"}
  ]
  const isVisible = true;
  

  return (
  
    <div className="App">
       <Header />
    
      <p>{description}</p>
      
      {courses.length > 5 && <div>
        <h4>Courses {courses.length}</h4>
         <ul>
        {courses.map((element)=> <li key={element.id}>{element.course}</li>)}
        </ul>
        </div>
      
      }
    

    </div>
  );
}

export default App;
// Eğer dizi elemanları 5'ten büyükse o zaman listeyi göster demiş olduk.
