import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Account } from "./pages/account/Account";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { useSelector } from "react-redux";
import { AppRoutes } from "./routes/routes";
import { AuthGoogleProvider } from "./contexts/authGoogle";

export const App = () => {
  const isLoggIn = useSelector((state) => state.auth.isLoggIn);
  const cartItems = useSelector((state) => state.cart.itemsList);
  console.log(cartItems);

  // return (
  //   <>
  //     {isLoggIn && (
  //       <Router>
  //         <Header />
  //         <Switch>
  //           <Route exact path="/" component={Home} />
  //           <Route exact path="/account" component={Account} />
  //         </Switch>
  //         <Footer />
  //       </Router>
  //     )}
  //     {!isLoggIn && <Login />}
  //   </>
  // );

  return (
    <AuthGoogleProvider>
      <AppRoutes />
    </AuthGoogleProvider>
  );
};

export default App;
