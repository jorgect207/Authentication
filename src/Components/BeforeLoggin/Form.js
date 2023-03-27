import React, {
  useRef,
  useState,
  useEffect,
  useReducer,
  useContext,
} from "react";

import Context from "../../storage/context";

import Input from "../UI/Input";

import classes from "./Form.module.css";

const reducerEmail = (state, action) => {
  if (action.type === "VALUE") {
    return {
      value: action.val,
      isvalid: action.val.includes("@") || action.val.trim().length < 1,
    };
  }
  return {
    value: "",
    isvalid: false,
  };
};

const reducerPaswword = (state, action) => {
  if (action.type === "VALUE") {
    return {
      value: action.val,
      isvalid: action.val.trim().length > 6 || action.val.trim().length < 1,
    };
  }
  return {
    value: "",
    isvalid: false,
  };
};

function Form(props) {
  const [validd, setvalid] = useState(true);

  /* const [emailIsGoog, SetemailIsGood] = useState();
  const [emailkeeping, Setemailkeeping] = useState("");*/

  /*const [passwordIsGoog, SetpasswordIsGood] = useState();
  const [passwordkeeping, Setpasswordkeeping] = useState("");*/

  const [manageEmail, dispatchEmail] = useReducer(reducerEmail, {
    value: "",
    isvalid: null,
  });

  const [managePassword, dispatchPassword] = useReducer(reducerPaswword, {
    value: "",
    isvalid: null,
  });

  useEffect(() => {
    const Identifier = setTimeout(() => {
      console.log("just");
      setvalid(manageEmail.isvalid && managePassword.value.trim().length > 6);
    }, 500);
    return () => {
      console.log("cleanup");
      clearTimeout(Identifier);
    };
  }, [manageEmail.isvalid, managePassword.isvalid]);

  const ctx = useContext(Context);

  const Email = useRef();
  const password = useRef();

  const getEmailState = (event) => {
    dispatchEmail({ type: "VALUE", val: event.target.value });

    /* Setemailkeeping(event.target.value);
    if (
      event.target.value.trim().length < 1 ||
      event.target.value.includes("@")
    ) {
      SetemailIsGood(true);
    } else {
      SetemailIsGood(false);
    }*/
  };

  const getpasswordState = (event) => {
    dispatchPassword({ type: "VALUE", val: event.target.value });

    /*
    Setpasswordkeeping(event.target.value);
    if (
      event.target.value.trim().length > 6 ||
      event.target.value.trim().length < 1
    ) {
      SetpasswordIsGood(true);
    } else {
      SetpasswordIsGood(false);
    }*/
  };

  const KeepData = (event) => {
    event.preventDefault();
    const getEmail = manageEmail.value;
    const getpassword = managePassword.value;

    localStorage.setItem("id", "1");

    const Data = {
      Email: getEmail,
      Password: getpassword,
    };

    ctx.changeStateToTrue();

    dispatchEmail({ type: "VALUE", val: "" });
    dispatchPassword({ type: "VALUE", val: "" });
  };
  /*<Input
          isvalid={manageEmail.isvalid}
          label="E-Mail"
          type="text"
          placeholder="ENTER EMAIL"
          ref={Email}
          onChange={getEmailState}
        ></Input>
        <Input
          isvalid={managePassword.isvalid}
          label="Paswoord"
          type="password"
          placeholder="ENTER PASSWORD"
          ref={password}
          onChange={getpasswordState}
        ></Input>
        
        <div
          className={`${classes.divlabel} ${
            manageEmail.isvalid === false ? classes.wrong : " "
          } `}
        >
          <label>E-Mail</label>
          <input
            type="text"
            placeholder="ENTER EMAIL"
            ref={Email}
            onChange={getEmailState}
          ></input>
        </div>

        <div
          className={`${classes.divlabel} ${
            managePassword.isvalid === false ? classes.wrong : " "
          } `}
        >
          <label>Paswoord</label>
          <input
            type="password"
            placeholder="ENTER PASSWORD"
            ref={password}
            onChange={getpasswordState}
          ></input></div>
        
        
        
        */

  return (
    <div className={classes.form}>
      <form onSubmit={KeepData}>
        <Input
          isvalid={manageEmail.isvalid}
          label="E-Mail"
          type="text"
          placeholder="ENTER EMAIL"
          onChange={getEmailState}
        ></Input>
        <Input
          isvalid={managePassword.isvalid}
          label="Paswoord"
          type="password"
          placeholder="ENTER PASSWORD"
          onChange={getpasswordState}
        ></Input>

        <div className={classes.divbutton}>
          <button type="submit" disabled={!validd}>
            ENTER
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
