import reducer from "./index";

describe("Layout Reducer", () => {
  test("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({ showMessage: false });
  });

  test("should return with props showMessage = true", () => {
    expect(reducer(undefined, { type: "SHOW_MESSAGE" })).toEqual({
      showMessage: true,
    });
  });
  test("should return state with props showMessage = false", () => {
    expect(reducer(undefined, { type: "HIDE_MESSAGE" })).toEqual({
      showMessage: false,
    });
  });
});
