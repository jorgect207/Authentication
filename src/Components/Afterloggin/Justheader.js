import React, { useContext } from "react";

import classes from "./Justheader.module.css";

import Context from "../../storage/context";

function Justheader(props) {
  const ctx = useContext(Context);

  function activation() {
    ctx.changeStateToFalse();
    localStorage.removeItem("id");
  }

  return (
    <React.Fragment className={classes.main}>
      <div className={classes.tittle}>
        <h1>SUB WEB3</h1>
      </div>
      <div className={classes.contain}>
        <na className={classes.nav}>
          <ul>
            {ctx.Enter ? (
              <li>
                <button>USER</button>
              </li>
            ) : (
              ""
            )}
            <li>
              <button onClick={activation}>DISSCONECT</button>
            </li>
          </ul>
        </na>
      </div>
    </React.Fragment>
  );
}

export default Justheader;
