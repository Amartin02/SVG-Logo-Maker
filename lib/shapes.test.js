const Shapes = require("./shapes");

describe("Shapes", () => {
  describe("Circle", () => {
    it("should create a string that if pasted into an HTML will generate an SVG logo", () => {
      const newCircle = new Shapes.Circle("red", "svg", "blue");
      const expected = `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
    <circle r="95" cx="150" cy="100" fill="red" />
    Sorry, your browser does not support inline SVG.  
    <text style="font-size: 75px" x="100" y="125" fill="blue">svg</text></svg> `;
      expect(newCircle.render()).toBe(expected);
    });
  });
});
describe("Shapes", () => {
  describe("Triangle", () => {
    it("should create a string that if pasted into an HTML will generate an SVG logo", () => {
      const newTriangle = new Shapes.Triangle("red", "svg", "blue");
      const expected = `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,15 250,190 50,190" style="fill:red"/>
    Sorry, your browser does not support inline SVG.
    <text style="font-size: 75px" x="100" y="175" fill="blue">svg</text></svg>`;
      expect(newTriangle.render()).toBe(expected);
    });
  });
});
describe("Shapes", () => {
  describe("Square", () => {
    it("should create a string that if pasted into an HTML will generate an SVG logo", () => {
      const newSquare = new Shapes.Square("red", "svg", "blue");
      const expected = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="150" height="150" x="75" y="25" style="fill:red"/>Sorry, your browser does not support inline SVG.  
    <text style="font-size: 75px" x="100" y="125" fill="blue">svg</text></svg>`;

      expect(newSquare.render()).toBe(expected);
    });
  });
});
