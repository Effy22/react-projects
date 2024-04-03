import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap dosyasının doğru yolu
import MuhammetHocaInput from './components/atoms/Custominput'

function App() {
  return (
    <div className='container-fluid text-center mb-2 text-danger'>
      <h1> İlk react Projemiz </h1>
      <MuhammetHocaInput tip="text" ozelid="5" />
      <MuhammetHocaInput tip="password" ozelid="111" />
      
    </div>
  );
}

export default App;
