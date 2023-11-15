import { useReducer } from "react";
import { Sub } from "../types";

interface FormState {
  inputData: Sub;
}

type FormReducerAction =
  | {
      type: "CHANGE_VALUE";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | {
      type: "CLEAR";
    };

const INITIAL_STATE = {
  nick: "",
  subMonths: 0,
  avatar: "",
  description: "",
};

const formReducer = (
  state: FormState["inputData"],
  action: FormReducerAction
) => {
  switch (action.type) {
    case "CHANGE_VALUE":
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };

    case "CLEAR":
      return INITIAL_STATE;

    // NO ES NECESARIO YA QUE AL ESTAR TIPADO SI O SI HAY QUE USAR LOS CASOS QUE DEFINIMOS
    default:
      return state;
  }
};

const useNewSubForm = () => {
  return useReducer(formReducer, INITIAL_STATE);
};

export default useNewSubForm;
