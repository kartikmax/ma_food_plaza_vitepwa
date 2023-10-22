import AddToCart from "./pages/AddToCart/AddToCart";
import Category from "./pages/Category";
import Page2 from "./pages/Page2";
import Welcome from "./pages/Welcome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Payment from "./pages/PaymentMethod/Payment";
import Account from "./pages/AccountDetails/Account";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/cart" element={<AddToCart/>} />
        <Route path="/category" element={<Category/>} />
        <Route path="/page" element={<Page2 />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/cart" element={<AddToCart/>} />
        <Route path="/account" element={<Account/>} />
      </Routes>
    </Router>
  );
};

export default App;
