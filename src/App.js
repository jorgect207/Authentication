import Headers from "./Components/UI/Headers";
import Justtittle from "./Components/BeforeLoggin/Justtittle";

import Box from "./Components/UI/Box";
import Form from "./Components/BeforeLoggin/Form";

import Phrase from "./Components/Afterloggin/Phrase";
import Justheader from "./Components/Afterloggin/Justheader";

import React, { Fragment, useContext } from "react";
import classes from "./App.module.css";

import Context from "./storage/context";

function App() {
  /*useEffect(() => {
    const getItem = localStorage.getItem("id");

    if (getItem === "1") {
      Setenter(true);
    }
  }, []);
  const [Enter, Setenter] = useState(false);

  const changeStateToTrue = () => {
    Setenter(true);
  };

  const changeStateToFalse = () => {
    Setenter(false);
  };*/

  const ctx = useContext(Context);
  return (
    <React.Fragment>
      <div className={classes.back}>
        <Headers>
          {!ctx.Enter ? <Justtittle></Justtittle> : <Justheader></Justheader>}
        </Headers>
        <Box>{!ctx.Enter ? <Form></Form> : <Phrase></Phrase>}</Box>
      </div>
    </React.Fragment>
  );
}

export default App;
