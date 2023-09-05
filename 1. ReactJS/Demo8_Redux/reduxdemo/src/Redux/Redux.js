const { createStore } = require("redux");
console.log("I'm REDUX");
let initialState = { showForm: false, accounts: [] };
let reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_FORM":
      return { ...state, showForm: true };
    case "CLOSE_FORM":
      return { ...state, showForm: false };
    case "ADD_ACCOUNT":
      let accounts = state.accounts;
      let account = action.payload;
      accounts.push(account);
      return {
        ...state,
        accounts: accounts,
      };
    default:
      return { ...state };
  }
};
let reduxStore = createStore(reducer);
console.log("store", reduxStore);
let actionShowForm = {
  type: "SHOW_FORM",
};
let actionCloseForm = {
  type: "CLOSE_FORM",
};
let account = {
  id: 1,
  name: "Họ và tên",
};
let addAccount = {
  type: "ADD_ACCOUNT",
  payload: account,
};
reduxStore.dispatch(addAccount);
console.log("accs:", reduxStore.getState());
