import "@testing-library/jest-dom";
import { loginReducers } from "../redux/reducers/loginReducers";
import { types } from "../redux/types/types";

describe("Prueba en loginReducers", () => {
  //preparar mea de trabajo
  test("debe realizar el login", () => {
    const initState = {};
    const action = {
      payload: {
        email: "",
        password: "",
      },
    };

    const state = loginReducers(initState, action);

    expect(state).toEqual({
      email: "mmariayennifer.25@gmail.com",
      password: "4567/",
    });
  });
});


