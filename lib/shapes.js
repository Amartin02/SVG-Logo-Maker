class Triangle {
  constructor(logoColor, logoText, textColor) {
    this.logoColor = logoColor;
    this.logoText = logoText;
    this.textColor = textColor;
  }
  render() {
    return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,15 250,190 50,190" style="fill:${this.logoColor}"/>
    Sorry, your browser does not support inline SVG.
    <text style="font-size: 75px" x="100" y="175" fill="${this.textColor}">${this.logoText}</text></svg>`;
  }
}
class Circle {
  constructor(logoColor, logoText, textColor) {
    this.logoColor = logoColor;
    this.logoText = logoText;
    this.textColor = textColor;
  }
  render() {
    return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
    <circle r="95" cx="150" cy="100" fill="${this.logoColor}" />
    Sorry, your browser does not support inline SVG.  
    <text style="font-size: 75px" x="100" y="125" fill="${this.textColor}">${this.logoText}</text></svg> `;
  }
}
class Square {
  constructor(logoColor, logoText, textColor) {
    this.logoColor = logoColor;
    this.logoText = logoText;
    this.textColor = textColor;
  }
  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="150" height="150" x="75" y="25" style="fill:${this.logoColor}"/>Sorry, your browser does not support inline SVG.  
    <text style="font-size: 75px" x="100" y="125" fill="${this.textColor}">${this.logoText}</text></svg>`;
  }
}
module.exports = { Square, Circle, Triangle };
