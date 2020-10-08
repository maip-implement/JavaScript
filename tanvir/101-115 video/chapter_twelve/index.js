//108 Object Literal in Javascript | Stack Learner

// var rect = {
//     width: 100,
//     height: 50,

//     draw: function() {
//         console.log('I am a rectangle')
//         console.log('My Width is ' + this.width)
//         console.log('My Height is ' + this.height)
//     }
// }

// rect.draw()

// rect.height = 100

// rect.draw()

// I am a rectangle
// My Width is 100
// My Height is 50
// I am a rectangle
// My Width is 100
// My Height is 100

//109 "THIS" in Javascript | Stack Learner

// function myFunc() {
//     console.log(this)
// }

// new myFunc()

// myFunc {}

// var rect = {
//     width: 100,
//     height: 50,

//     draw: function() {
//         console.log('I am a rectangle')
//         this.printProperties()
        
//     },

//     printProperties: function(){
//         console.log('My Width is ' + this.width)
//         console.log('My Height is ' + this.height)
//     }
// }

// rect.draw()

// I am a rectangle
// My Width is 100
// My Height is 50

// function myFunc() {
//     console.log(this)
//     rect.printProperties()
// }

// myFunc()

// var another = {
//     width: 47,
//     height: 56,
//     print: rect.printProperties
// }
// console.log(another.print)
// another.print()

// My Width is 47
// My Height is 56

//110 Factory pattern in Javascript | Stack Learner


// var createRect = function (width,height) {
//     return {
//             width: width,
//             height: height,
        
//             draw: function() {
//                 console.log('I am a rectangle')
//                 this.printProperties()
//                 console.log(this)
                
//             },
        
//             printProperties: function(){
//                 console.log('My Width is ' + this.width)
//                 console.log('My Height is ' + this.height)
//             }
//         }     
// }

// var rect1 = createRect(10, 8)
// rect1.draw()

// var rect2 = createRect(40, 30)
// rect2.draw()

// I am a I am a rectangle
// My Width is 10
// My Height is 8
// I am a rectangle
// My Width is 40
// My Height is 30


// 111 Constructor Pattern in Javascript | Stack Learner

// var Rectangle = function(width,height) {
// this.width = width
// this.height = height
        
// this.draw = function() {
//     console.log('I am a rectangle')
//     this.printProperties()
//     console.log(this)
                
//             }
        
//             this.printProperties = function(){
//                 console.log('My Width is ' + this.width)
//                 console.log('My Height is ' + this.height)
//             }
// }

// var rect3 = new Rectangle(10, 8)
// rect3.draw()

// I am a rectangle
// My Width is 10
// My Height is 8

// 112 New Keyword in Javascript | Stack Learner

// var Rectangle = function(width,height) {
//     this.width = width
//     this.height = height
            
//     this.draw = function() {
//         console.log('I am a rectangle')
//         this.printProperties()
//         console.log(this)
                    
//                 }
            
//                 this.printProperties = function(){
//                     console.log('My Width is ' + this.width)
//                     console.log('My Height is ' + this.height)
//                 }
//     }
    
    // var rect3 = new Rectangle(10, 8)
    // rect3.draw()

    
    // function myNew(constructor) {
    //     var obj = {}
    //     Object.setPrototypeOf(obj, constructor.prototype )
    //     var argsArray = Array.prototype.slice.apply(arguments)
    //     constructor.apply(obj, argsArray.slice(1))

    //     return obj
    // }

    // var rect4 = myNew(Rectangle, 45, 30)
    // rect4.draw()

// I am a rectangle
// My Width is 45
// My Height is 30


// 113 Factory vs Constructor in Javascript | Stack Learner


// 114 Constructor Property in Javascript | Stack Learner

// var str = new String('str')
// console.log('My String is ' + str)

// My String is str


//115 Functions Are Object in Javascript | Stack Learner

// function test() {
//     console.log('Something')
// }

// console.log(test.name, test.length)

// //test 0

// var Rect = new Function('width', 'height', `this.width = width
// this.height = height
        
// this.draw = function() {
//     console.log('I am a rectangle')
//     this.printProperties()
//     console.log(this)
                
//             }
        
//             this.printProperties = function(){
//                 console.log('My Width is ' + this.width)
//                 console.log('My Height is ' + this.height)
//     }`
//  )

//  var rect5 = new Rect(4, 5)
//  console.log(rect5)


//116 Bind Call Apply in Javascript | Stack Learner

//  function myFunc(c, d) {
//      console.log(this)
//      console.log(this.a + this.b + c + d)
//  }

 //call, Apply
 //Bind

//  myFunc.call({a: 40, b: 25}, 10, 5) //80
//  myFunc.apply({a: 400, b: 250}, [10, 5])    //665

//  myFunc.apply({})
//  myFunc()

// var testBind = myFunc.bind({a: 7, b:3}, 5, 5)
// testBind()  //20

// var testBind = myFunc.bind({a: 7, b:3})
// testBind(5, 10) //25


// 117 Pass By Value vs Pass by Reference in Javascript | Stack Learner

// var n = 10

// function change(n) {
//     n = n + 100
//     console.log(n)
// }

// change(n)   //110
// console.log(n)  //10

// var obj = {
//     a: 10,
//     b: 20
// }

// function changeMe(obj) {
//     obj.a = obj.a + 100
//     obj.b = obj.b + 100
//     console.log(obj)
// }

// changeMe(obj)   //{a: 110, b: 120}
// console.log(obj)    //{a: 110, b: 120}

//118 Abstraction in Javascript | Stack Learner

// 119 Private Properties in Javascript | Stack Learner


// var Rectangle = function(width, height) {

// var position = {
//     x: 56,
//     y: -100
// }
// this.width = width
// this.height = height

//        var printProperties = function() {
//         console.log('My Width is ' + this.width)
//         console.log('My Height is ' + this.height)
//     }.bind(this)

//     this.draw = function() {
//         console.log('I am a rectangle')
//         printProperties()
//         console.log('Position: X=' + position.x + ' Y=' + position.y)
                    
//      }
// }

//  var rect7 = new Rectangle(45, 30)
// rect7.draw()

// I am a rectangle
// My Width is 45
// My Height is 30
// Position: X=56 Y=-100

//120 Getter Setter in Javascript | Stack Learner

// var Rectangle = function(width, height) {

//     var position = {
//         x: 56,
//         y: -100
//     }
//     this.width = width
//     this.height = height
    
//            var printProperties = function() {
//             console.log('My Width is ' + this.width)
//             console.log('My Height is ' + this.height)
//         }.bind(this)
        
//         this.getPosition = function() {
//             return position
//         }

//         this.draw = function() {
//             console.log('I am a rectangle')
//             printProperties()
//             console.log('Position: X=' + position.x + ' Y=' + position.y)
                        
//          }
//     }
    
//      var rect7 = new Rectangle(45, 30)
//     rect7.draw()
//     console.log(rect7.getPosition)

// I am a rectangle
// My Width is 45
// My Height is 30
// Position: X=56 Y=-100

var Rectangle = function(width, height) {

var position = {
    x: 56,
    y: -100
}

this.width = width
this.height = height

       var printProperties = function() {
        console.log('My Width is ' + this.width)
        console.log('My Height is ' + this.height)
    }.bind(this)

    this.draw = function() {
        console.log('I am a rectangle')
        printProperties()
        console.log('Position: X=' + position.x + ' Y=' + position.y)
                    
     }

     Object.defineProperty(this, 'position',{
         get: function(){
            return position 
         },
         set: function(value) {
             position = value
         }
     })
}

 var rect7 = new Rectangle(45, 30)
rect7.draw()
rect7.position = {
    x: 456,
    y: -123
}
console.log(rect7.position)
