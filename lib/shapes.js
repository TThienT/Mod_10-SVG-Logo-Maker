// Base class for shapes
class Shape {
  constructor() {
    this.color = ""; // Initialize color as an empty string
  }

  setColor(color) {
    this.color = color; // Set the color property of the shape
  }
}

class Circle extends Shape {
  // Render method for Circle shape
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`; // Return SVG markup for Circle
  }
}

class Triangle extends Shape {
  // Render method for Triangle shape
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`; // Return SVG markup for Triangle
  }
}

class Square extends Shape {
  // Render method for Square shape
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`; // Return SVG markup for Square
  }
}

module.exports = { Circle, Triangle, Square }; // Export the Circle, Triangle, and Square classes
