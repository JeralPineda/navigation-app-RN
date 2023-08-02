import {AuthState} from "./AuthContext";

type AuthAction =
  | {type: "signIn"}
  | {type: "logout"}
  | {type: "changeFavIcon"; payload: string}
  | {type: "changeUsername"; payload: string};

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

    case "logout":
      //Retorna un nuevo estado
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined,
      };

    case "changeFavIcon":
      return {
        ...state,
        favoriteIcon: action.payload,
      };

    case "changeUsername":
      return {
        ...state,
        username: action.payload,
      };

    default:
      return state;
  }
};
