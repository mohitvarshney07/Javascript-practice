//Immediately Invoked Functions Expressions
function chai(){
    console.log("Db Connected")
}
chai();

(function cha(){
    console.log("DB Connected")
})();

( () => {
    console.log("DB Connected")
})();