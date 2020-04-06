import { hideMessage, showMessage } from "./index";

describe("Layout actions", () => {
  describe("actions types", () => {
    test("should return action type SHOW_MESSAGE", () => {
      expect(showMessage.type).toEqual("SHOW_MESSAGE");
    });

    test("should return action type HIDE_MESSAGE", () => {
      expect(hideMessage.type).toEqual("HIDE_MESSAGE");
    });
  });

  describe("actions creators", () => {
    test("should return action creator showMessage { type: SHOW_MESSAGE }", () => {
      expect(showMessage()).toEqual({
        type: "SHOW_MESSAGE",
      });
    });

    test("should return action creator hideMessage { type: HIDE_MESSAGE }", () => {
      expect(hideMessage()).toEqual({
        type: "HIDE_MESSAGE",
      });
    });
  });
});
