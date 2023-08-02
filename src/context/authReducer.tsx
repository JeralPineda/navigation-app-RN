import {AuthState} from "./AuthContext";

type AuthAction = {type: "signIn"} | {type: "changeFavIcon"; payload: string};

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

    case "changeFavIcon":
      return {
        ...state,
        favoriteIcon: action.payload,
      };

    default:
      return state;
  }
};
