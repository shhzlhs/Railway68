//Call API:
let promiseAPI = new Promise((resolve, reject) => {
  //Code Call API
  let data = true;
  if (data) {
    reject("xxx");
  } else {
    resolve("yyy");
  }
});
//Sử dụng:
promiseAPI.then(
  (mess) => {
    console.log(mess);

    console.log("call API thành công");
    //   return promise2();
  },
  (mess) => {
    console.log(mess);

    console.log("no!");
  }
);
