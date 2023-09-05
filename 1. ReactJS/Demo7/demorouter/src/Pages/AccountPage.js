import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AccountPage(props) {
  let [accounts, setAccounts] = useState([]);
  let fakeAccounts = [
    { id: "1", name: "Họ và tên" },
    { id: "2", name: "Họ Thị Tên" },
  ];
  useEffect(() => {
    setAccounts(fakeAccounts);
  }, []);
  const items = accounts.map((account, index) => {
    const url = "account/" + account.id;
    return (
      <div key={index}>
        <Link to={url}>
          Account: {accounts.id}, Name: {account.name}
        </Link>
      </div>
    );
  });
  return (
    <div>
      <h1>Tôi là Ơ CAO PẾT</h1>
      {items}
    </div>
  );
}

export default AccountPage;
