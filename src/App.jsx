import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Collections from "./Components/Collections";
import Features from "./Components/Features";
import Products from "./Components/Products";
import Review from "./Components/Review";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Cart from "./Components/Cart";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <div>
        <Provider store={store}>
          <Navbar setShowCart={setShowCart} />
          {showCart && <Cart setShowCart={setShowCart} />}

          <div id="home">
            <Home />
          </div>
          <div id="shop">
            <Shop />
          </div>
          <Collections />

          <div id="features">
            <Features />
          </div>

          <div id="products">
            <Products />
          </div>

          <div className="review">
            <Review />
          </div>

          <Footer />

          <Toaster position="bottom-center" reverseOrder={false} />
        </Provider>
      </div>
    </>
  );
};

export default App;
