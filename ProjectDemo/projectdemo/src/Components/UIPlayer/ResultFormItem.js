import React from "react";
import Avatar from "./Avatar";
import Edit from "./Edit";
import Delete from "./Delete";
import { Button } from "reactstrap";

function ResultFormItem(props) {
  const {
    players,
    setPlayer,
    setShowFormEdit,
    setShowFormDelete,
    setShowPlayerModal,
  } = props;

  const onHandleEditButton = (player) => {
    setShowFormEdit(true);
    setPlayer(player);
  };
  const onHandleDeleteButton = (player) => {
    setShowFormDelete(true);
    setPlayer(player);
  };
  const onHandleAvatarButton = (player) => {
    setShowPlayerModal(true);
    setPlayer(player);
  };

  const items = players.map((player, index) => {
    return (
      <tr key={index}>
        <td>
          <Button
            onClick={() => {
              onHandleAvatarButton(player);
            }}
            style={{
              padding: "5px",
              borderRadius: "50%",
              objectFit: "cover",
              backgroundColor: "white",
            }}
          >
            <Avatar avatar={player.avatar}></Avatar>
          </Button>
        </td>
        <td>{player.id}</td>

        <td>{player.name}</td>
        <td>{player.nation}</td>
        <td>{player.position}</td>
        <td>{player.teamName}</td>
        <td>{player.joinedYear}</td>
        <td>
          <Edit onHandleEditButton={() => onHandleEditButton(player)} />
        </td>
        <td>
          <Delete onHandleDeleteButton={() => onHandleDeleteButton(player)} />
        </td>
      </tr>
    );
  });

  return <tbody style={{ textAlign: "left" }}>{items}</tbody>;
}

export default ResultFormItem;
