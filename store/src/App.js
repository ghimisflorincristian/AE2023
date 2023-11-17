import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/home-page/HomePage";
import Login from "./login/Login";
import { useState } from "react";
import Cart from "./components/cart/Cart";
import AdminPage from "./components/admin/AdminPage"

function App() {
  const [cart, setCart] = useState([]);

  const calculateTotal = (cart) => {
    let sum = 0;
    sum = cart.map(prod => prod.price).reduce((partialSum, a) => partialSum + a, 0);;
    return sum;
  }

  function cartUpdate(product) {
    const newCart = [...cart, product]
    setCart(newCart);
  }

  function deleteProductFromCart(product) {
    const newCart = cart.filter((p) => p !== product);
    setCart(newCart);
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<HomePage cart={cart} cartUpdate={cartUpdate} />} />
          <Route exact path="/details/:id" />
          <Route exact path="/cart" element={<Cart cart={cart} deleteProduct={deleteProductFromCart} total={calculateTotal(cart)}/>} />
          <Route exact path="/admin" element={<AdminPage/>}/>
          <Route exact path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
