/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const [val1,val2] = await Promise.all([promise1,promise2])
    return val1 + val2
};


  addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  .then(console.log); // 4



// const myPromise = new Promise(function(resolve,reject){
//   setTimeout(()=>{
//     console.log("async task")
//     resolve()
//   },2000)
// })

// myPromise.then(()=>{
//   console.log("Promise resolved")
// })


// const myPromise = new Promise((resolve,reject)=>{
//    let fileLoader = false;
//    if (fileLoader) {
//     resolve("file Loaded")
//    }else{
//     reject("File Not Loaded")
//    }
// })

// myPromise.then(function(value){
//   console.log(value)
// }).catch((err)=>{
//   console.log(err)
// })