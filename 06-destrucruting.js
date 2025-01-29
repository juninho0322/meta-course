// destructuring PI from Math
let { PI } = Math;
console.log(PI);

// destructuring cos, sin, tan from Math
let { cos, sin, tan } = Math;
console.log(cos(PI));
console.log(sin(PI));
console.log(tan(PI));

// destructuring log from console
let { log } = console;
log("hello");

// destructuring log as message from console
let { log: message } = console;
message("world");
