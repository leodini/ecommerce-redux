import { Types, Creators } from "./index";

describe("Layout actions", () => {
  describe("actions types", () => {
    test("should return action type SHOW_MESSAGE", () => {
      expect(Types.SHOW_MESSAGE).toEqual("SHOW_MESSAGE");
    });

    test("should return action type HIDE_MESSAGE", () => {
      expect(Types.HIDE_MESSAGE).toEqual("HIDE_MESSAGE");
    });
  });

  describe("actions creators", () => {
    test("should return action creator showMessage { type: SHOW_MESSAGE }", () => {
      expect(Creators.showMessage()).toEqual({
        type: Types.SHOW_MESSAGE,
      });
    });

    test("should return action creator hideMessage { type: HIDE_MESSAGE }", () => {
      expect(Creators.hideMessage()).toEqual({
        type: Types.HIDE_MESSAGE,
      });
    });
  });
});
