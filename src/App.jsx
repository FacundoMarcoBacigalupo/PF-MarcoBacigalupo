import CartProvider from "./Componentes/Context/CartContext";
import Rutas from './Rutas/Rutas';




function App() {

  return (
    <div className="App">
      <CartProvider>
        <Rutas />
      </CartProvider>
    </div>
  );
}



export default App;