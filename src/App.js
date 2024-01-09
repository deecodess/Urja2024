import { Fragment } from "react";
import "./App.css";
import logo from "./assets/urja_logo_black.png";
import  AppRoute  from "./Routes.jsx";

function App() {
  return (
    // <div className="App">
    //   <img src={logo} className="logo" />
    //   <h1>Something big is coming soon !</h1>
    //   <h5>Urja TIET is back , bigger better and bolder</h5>
    //   <h3>Stay Tuned !</h3>
    // </div>
    //Use this Fragment to check your page.
    <Fragment>
      <AppRoute />
    </Fragment>
  );
}

export default App;
