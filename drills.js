"use strict"
function repeat(fn, n) {
  for(let i=0; i < n; i++) {
    fn();
  }
}

const hello = function hello() {
  console.log('Hello World');
}

const goodbye = function goodbye() {
   console.log('Goodbye World');
}

repeat(hello, 5);
repeat(goodbye, 5);