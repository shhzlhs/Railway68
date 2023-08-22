import React, { useState } from "react";
import { Container, Table } from "reactstrap";
import ResultFormItem from "./ResultFormItem";
import ModalEditInputForm from "./EditPlayer/ModalEditInputForm";
import ModalDeletePlayer from "./DeletePlayer/ModalDeletePlayer";
import ModalMoreInfo from "./MoreInfo/ModalMoreInfo";

function ResultForm(props) {
  const urlImg = "/imgs/players.jpg";
  let { players, teams, onHandleEditPlayer, onHandleDeletePlayer } = props;
  let [showFormEdit, setShowFormEdit] = useState(false);
  let [showFormDelete, setShowFormDelete] = useState(false);
  let [showPlayerModal, setShowPlayerModal] = useState(false);
  let [player, setPlayer] = useState({});
  let onHandleCloseEditModal = () => {
    setShowFormEdit(false);
  };
  let onHandleCloseDeleteModal = () => {
    setShowFormDelete(false);
  };
  let onHandleClosePlayerModal = () => {
    setShowPlayerModal(false);
  };
  return (
    <Container>
      <div
        style={{
          height: "200px",
          backgroundImage: `  url(${urlImg})`,
          color: "white",
          backgroundSize: "cover",
        }}
      ></div>
      <Table hover>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>Nation</th>
            <th>Position</th>
            <th>Team</th>
            <th>Joined Year</th>
            <th>Edit</th>
            <th>Delete</th>
            <th></th>
          </tr>
        </thead>

        <ResultFormItem
          teams={teams}
          players={players}
          setShowFormEdit={setShowFormEdit}
          setShowFormDelete={setShowFormDelete}
          setShowPlayerModal={setShowPlayerModal}
          setPlayer={setPlayer}
        />
      </Table>
      <ModalEditInputForm
        showFormEdit={showFormEdit}
        onHandleCloseEditModal={onHandleCloseEditModal}
        onHandleEditPlayer={onHandleEditPlayer}
        teams={teams}
        player={player}
      />
      <ModalDeletePlayer
        onHandleDeletePlayer={onHandleDeletePlayer}
        player={player}
        showFormDelete={showFormDelete}
        onHandleCloseDeleteModal={onHandleCloseDeleteModal}
      ></ModalDeletePlayer>
      <ModalMoreInfo
        onHandleClosePlayerModal={onHandleClosePlayerModal}
        player={player}
        showPlayerModal={showPlayerModal}
      />
    </Container>
  );
}

export default ResultForm;
