function Greet(name){
    console.log("Hello " + name + "!");
    if (name == null) {
        console.log("Hello, there!");
    }
    if (Array.isArray(name)) {
        console.log("Hello" + name[0] + name[1] + name[2] + name[3]);
    }
    else if (name == name.toUpperCase()) {
        console.log("HELLO " + name + "!");
    }
}

Greet("Joseph");