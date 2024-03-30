import './app.scss';
import CartProvider from './context/CartContext';
import LoginProvider from './context/LoginContext';
import RoutesComp from './routes/Routes';

function App() {

  return (
    <div className='app'>
      
      <LoginProvider>

        <CartProvider>

          <RoutesComp />
          
        </CartProvider>

      </LoginProvider>

    </div>
  );
};

export default App;