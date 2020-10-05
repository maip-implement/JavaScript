// Using a local variable can private any property because of scoping.


var Rectangle = function (height, width) {
  this.height = height;
  this.width = width;
  var position = {
      x: 56,
      y: -120
  }
  

  var printProperties = function () {
    console.log("My Width is " + this.width);
    console.log("My Height is " + this.height);
  }.bind(this)


  this.draw = function () {
    console.log("I am a rectangle");
    printProperties();
    console.log('Position: x=' + position.x + ' y+' + position.y);
  };
};



var rect = new Rectangle(45, 30)
rect.draw(50, 21)