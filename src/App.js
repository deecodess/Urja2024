import { Fragment } from "react";
import "./App.css";
import logo from "./assets/urja_logo_black.png";
import About from "./Pages/About/About";

import AppRoute from './Routes';
import Loader from "./Components/loader/Loader";
import { useEffect, useState } from "react";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader />
    ) : (
    // <div className="App">
    //   <img src={logo} className="logo" />
    //   <h1>Something big is coming soon !</h1>
    //   <h5>Urja TIET is back , bigger better and bolder</h5>
    //   <h3>Stay Tuned !</h3>
    // </div>
    <Fragment>
      <AppRoute />
    </Fragment>
  );
}

export default App;
