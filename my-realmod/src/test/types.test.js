import "@testing-library/jest-dom";

describe("verificar types", () => {
  test("should", () => {});
});

test("comparar objetos", () => {
  expect(" types").toEqual({
    login: "login",
    logout: "logout",
    register: "register",

    taksAddNew: "[Taks] New taks ",
    taksActivate: "[Taks] Activate taks",
    taksLoad: "[Taks] Load taks",
    taksUpdate: "[Taks] Update taks,",
    taksDelete: "[Taks] Delete taks",
    taksClear: "[Taks] Clear taks",
    taksLogout: "[Taks] Logout taks"

  })
})

