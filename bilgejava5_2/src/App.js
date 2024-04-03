import Header from "./components/Header";

function App() {
  
  return (
  
    <div className="app">
      <div className="main-frame">
      <Header />
        <div className="button">
          <a href="#">LinkedIn</a>
        </div>
        <div className="button">
          <a href="#">Facebook</a>
        </div>
        <div className="info-section">
          <h3>About</h3>
          <p>lorem ipsum dolor sit amet consectetur elit.</p>
          <h3>Interests</h3>
          <p>lorem ipsum dolor sit amet consectetur elit.</p>
        </div>
        <div className="footer">
          <img src="https://cdn-icons-png.flaticon.com/128/2168/2168336.png" alt="" />
          <img src="https://cdn-icons-png.flaticon.com/128/145/145802.png" alt="" />
          <img src="https://cdn-icons-png.flaticon.com/128/145/145807.png" alt="" />
          <img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="" />
        </div>
        
      </div>
      

    </div>
  );
}

export default App;
