// function init () {
//     let c = 'hello'
//     function inner(){
//         console.log(c)
//     }
// }


function makeFUnc(){
   const name = "Mozila";
   function displayName() {
    console.log(name)
   }
   return displayName;
}

const myFunc = makeFUnc()

myFunc()