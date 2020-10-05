// Getting access by creating a function a return ant property that will be access by accessing the function like "getProperty"
// Use built in Object.defineProperty method and use getter to access and use setter to set the value;

var Rectangle = function (height, width) {
  this.height = height;
  this.width = width;
  var position = {
    x: 56,
    y: -120,
  };

  var printProperties = function () {
    console.log("My Width is " + this.width);
    console.log("My Height is " + this.height);
  }.bind(this);

  // this.getPosition = function(){
  //     return position;
  // }

  this.draw = function () {
    console.log("I am a rectangle");
    printProperties();
    console.log("Position: x=" + position.x + " y+" + position.y);
  };

  Object.defineProperty(this, "position", {
    get: function () {
      return position;
    },
    set: function (value) {
        position = value
    }
  });
};

var rect = new Rectangle(45, 30);
rect.draw(50, 21);
rect.position = {
    x: 374,
    y: -834
}

// console.log(rect.getPosition())
console.log(rect.position);
