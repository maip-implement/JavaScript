// var rect = {
//     height:100,
//     width:50,
    
//     draw:function(){
//         console.log((this.height + this.height) + (this.width + this.width))
//         this.another()
//     },
//     another:function(){
//         console.log('square =')
//     }

// }

// rect.draw()


var Person = function(name, age){
    this.name = name
    this.age = age

    this.greet = function(){
        console.log(`hello ${this.name} you are ${this.age} years old`)
        if(this.age < 18){
            this.adultCheck()
        }else{
            console.log('Your Age is' + " " + this.age)
        }
    }

    this.adultCheck = function(){
        console.log('You are not Adult')
    }

}
var per1 = new Person('zubaer', 20)
per1.greet()
var per2 = new Person('ABc', 16)
per2.greet()

var Operator = function(name, num){
    this.name = name
    this.num = num

    this.check = function(){
       var n = this.num
       var n_str = n.toString()
       var n_arr = n_str.split('')
       
       for(let i = 0; i<n_arr.length; i++){
           
            if(n_arr[1] == 7){
                return 'GP'
            }else if(n_arr[1] == 6){
                return 'Airtel'
            }else if(n_arr[1] == 5){
                return 'Teletalk'
            }else if(n_arr[1] == 9){
                return 'Banglalink'
            }else if(n_arr[1] == 8){
                return 'Robi'
            }
       }
    }

    this.show = function(){
        console.log(`name : ${this.name}`)
        console.log(`Phone-Number : ${this.num}`)
        console.log(`Operator : ${this.check()}`)
    }
}
var operator1 = new Operator('abu zubaer', 01729886380)
operator1.show()

var operator2 = new Operator('shajib', 01920735495)
operator2.show()