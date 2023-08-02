import {AuthState} from "./AuthContext";

type AuthAction = {
  type: "signIn";
};

// generaEstado
export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case "signIn":
      //Retorna un nuevo estado
      return {
        ...state,
        isLoggedIn: true,
        username: "Jeral",
      };

    default:
      return state;
  }
};
