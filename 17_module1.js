function algoExpert() {
  console.log("AlgoExpert is the best!");
}

function frontendExpert() {
  console.log("FrontendExpert is the best!");
}

/*

Using a IIFE (Immediately Invoked Function Expression) fails here because
the same no longer now is named 'frontendExpert' so 17_module2.js cannot call it
from the global namespace.

(function frontendExpert(){
    console.log('FrontendExpert is the best!');
})();

*/
