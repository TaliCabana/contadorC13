import Bienvenidos from "./components/Bienvenidos"
import TeoriaComponente from "./components/TeoriaComponente";

function App() {
// Aquí agrego la lógica de un componente

const modulo = 2;

  return (
  <main className="container my-5">
  <h1>Hola mundo</h1>
  <Bienvenidos></Bienvenidos>
  {/*<Bienvenidos/>*/}
  <TeoriaComponente comision={'web 13'} modulo={modulo}/>
  </main>);
}

export default App
