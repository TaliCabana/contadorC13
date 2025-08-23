import Bienvenidos from "./components/Bienvenidos"
import TeoriaComponente from "./components/TeoriaComponente";

function App() {

  return (
  <main className="container my-5">
  <h1>Hola mundo</h1>
  <Bienvenidos></Bienvenidos>
  {/*<Bienvenidos/>*/}
  <TeoriaComponente comision={'web 13'}/>
  </main>);
}

export default App
