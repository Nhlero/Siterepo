//OLD JavaScript

/**var user = {
    name: "Ed",
    age: 25,
    sayName: function(){
        console.log(`My name is ` + this.name);
        var that = this;
        var fullName = function() {
            console.log(`My name is ` + that.name + ` and my age is ` + that.age);
        };
        fullName();
    }
};

user.sayName();**/

//ES6

const user = {
    name: "Ed",
    age: 27,
    sayName: function() {
        console.log(`My name is ${this.name}`);
        const fullName = () => {
            console.log(`My name is ${this.name} and my age is ${this.age}`);
        };
        fullName();
    }
};

user.sayName();