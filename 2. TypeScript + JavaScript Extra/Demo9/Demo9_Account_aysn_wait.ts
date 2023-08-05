//Check email:
function callAPICheckEmail() {
  //Call API
  let data = false;
  return data;
}
//Check user:
function callAPICheckUser() {
  //Call API
  let data = false;
  return data;
}
//Check user:
function callAPICreateAccount() {
  //Call API
  let data = false;
  return data;
}
async function createAccount() {
  await callAPICheckEmail();
  await callAPICheckUser();
  await callAPICreateAccount();
}
createAccount();
