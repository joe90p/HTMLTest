function test() {
    
    
    function f1() {
        alert("f1");
        
    }

    var f2 = function() {
        alert("f2");
    };

    var fruit = ["apple", "banana", "coconut", "durian", "elderberry"];
    var x = fruit.splice(1, 3);
    
    var cat = {};
    cat.breed = "Persian";
    cat.makeSound = function () { alert("miaow"); };


    var dog = {
        breed: "Irish Wolfhound",
        makeSound: function() { alert("wooooof");}
    };

    cat.makeSound();
    dog.makeSound();


}

function show(thing) {
    thing();
}