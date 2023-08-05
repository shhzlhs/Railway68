//Call API Check email:
function callAPICheckEmail() {
  let promiseAPI = new Promise((resolve, reject) => {
    //Code Call API
    let data = false;
    if (data) {
      reject("This email is Exists");
    } else {
      resolve("This email is not Exists");
    }
  });
  return promiseAPI;
}
//Call API Check User:
function callAPICheckUser() {
  let promiseAPI = new Promise((resolve, reject) => {
    //Code Call API
    let data = false;
    if (data) {
      reject("This user is already exists");
    } else {
      resolve("This user is not exists");
    }
  });
  return promiseAPI;
}

//Call API Create Account:
function callAPICreateAccount() {
  let promiseAPI = new Promise((resolve, reject) => {
    //Code Call API
    let data = false;
    if (data) {
      reject("Fail!");
    } else {
      resolve("Success!");
    }
  });
}
//Chạy:
callAPICheckEmail()
  .then((mess) => {
    console.log(mess);
    return callAPICheckUser();
  })
  .then((mess) => {
    console.log(mess);
    return callAPICreateAccount();
  })
  .then((mess) => {
    console.log(mess);
  })
  .catch((mess) => {});
