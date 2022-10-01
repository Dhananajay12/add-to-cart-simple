import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Thanks from "./pages/Thanks";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/thanks" element={<Thanks />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
