const { Square, Triangle, Circle } = require("./shapes");

// Test cases for the Circle shape
describe("Circle", () => {
  test("should render SVG for a green circle element", () => {
    // Define the expected SVG markup
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
    const circle = new Circle();
    circle.setColor("green");
    const actualSvg = circle.render();
    // Compare the actual SVG with the expected SVG
    expect(actualSvg).toEqual(expectedSvg);
  });

  test("should accept a fillColor param", () => {
    // Define the expected SVG markup with a different fill color
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
    const circle = new Circle();
    circle.setColor("blue");
    const actualSvg = circle.render();
    // Compare the actual SVG with the expected SVG
    expect(actualSvg).toEqual(expectedSvg);
  });
});

// Test cases for the Triangle shape
describe("Triangle", () => {
  test("should render SVG for a green polygon element", () => {
    // Define the expected SVG markup
    const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />';
    const triangle = new Triangle();
    triangle.setColor("bisque");
    const actualSvg = triangle.render();
    // Compare the actual SVG with the expected SVG
    expect(actualSvg).toEqual(expectedSvg);
  });

  test("should accept a fillColor param", () => {
    // Define the expected SVG markup with a different fill color
    const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';
    const triangle = new Triangle();
    triangle.setColor("purple");
    const actualSvg = triangle.render();
    // Compare the actual SVG with the expected SVG
    expect(actualSvg).toEqual(expectedSvg);
  });
});

// Test cases for the Square shape
describe("Square", () => {
  test("should render SVG for a green rectangle element", () => {
    // Define the expected SVG markup
    const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';
    const square = new Square();
    square.setColor("dodgerblue");
    const actualSvg = square.render();
    // Compare the actual SVG with the expected SVG
    expect(actualSvg).toEqual(expectedSvg);
  });

  test("should accept a fillColor param", () => {
    // Define the expected SVG markup with a different fill color
    const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="red" />';
    const square = new Square();
    square.setColor("red");
    const actualSvg = square.render();
    // Compare the actual SVG with the expected SVG
    expect(actualSvg).toEqual(expectedSvg);
  });
});
