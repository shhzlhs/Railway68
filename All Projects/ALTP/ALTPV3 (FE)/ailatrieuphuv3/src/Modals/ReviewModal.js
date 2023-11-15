import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { closeReviewModal } from "../Redux/Actions/Show_Hide_ModalActions";
import { buttonStyle1, imgButtonStyle1 } from "../Styles";
function ReviewModal(props) {
  let reduxState = useSelector((state) => state);

  let dispatchRedux = useDispatch();
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  let qNumber = reduxState.qNumber;
  let answers = reduxState.answers;
  const [a1, a2, a3, a4] = answers.map((answer) => ({
    content: answer.content,
    isTrue: answer.isTrue,
    columnLength: "50",
  }));
  const as = [a1, a2, a3, a4];
  const nulls = as.filter((answer) => answer.content === null);
  let showReviewModal = reduxState.showReviewModal;
  const getRandomT = (qNumber) => {
    if (nulls.length === 0) {
      if (qNumber < 5) {
        return Math.floor(Math.random() * 11) + 90;
      } else if (qNumber < 6) {
        return Math.floor(Math.random() * 41) + 60;
      } else if (qNumber < 8) {
        return Math.floor(Math.random() * 61) + 40;
      } else if (qNumber < 10) {
        return Math.floor(Math.random() * 61) + 20;
      } else if (qNumber < 12) {
        return Math.floor(Math.random() * 81);
      } else {
        return Math.floor(Math.random() * 71);
      }
    } else {
      if (qNumber < 5) {
        return Math.floor(Math.random() * 11) + 90;
      } else if (qNumber < 6) {
        return Math.floor(Math.random() * 31) + 70;
      } else if (qNumber < 8) {
        return Math.floor(Math.random() * 61) + 40;
      } else if (qNumber < 10) {
        return Math.floor(Math.random() * 61) + 20;
      } else if (qNumber < 12) {
        return Math.floor(Math.random() * 81);
      } else {
        return Math.floor(Math.random() * 71);
      }
    }
  };
  const assignColumnLength = (as, t, f1, f2, f3) => {
    const randomFs = [f1, f2, f3];
    const shuffledFs = shuffleArray(randomFs);

    let currentIndex = 0;

    return as.map((a) => {
      if (a.isTrue === "Y") {
        return { ...a, columnLength: t };
      } else {
        if (nulls.length === 0) {
          const randomF = shuffledFs[currentIndex];
          currentIndex = (currentIndex + 1) % shuffledFs.length;
          return { ...a, columnLength: randomF };
        } else {
          if (a.content === null) {
            return { ...a, columnLength: 0 };
          } else {
            return { ...a, columnLength: 100 - t };
          }
        }
      }
    });
  };

  const getRandomF = (sum) => {
    return Math.floor(Math.random() * (100 - sum + 1));
  };

  const t = getRandomT(qNumber);

  const f1 = getRandomF(t);

  const f2 = getRandomF(f1 + t);

  const f3 = 100 - t - f1 - f2;

  const asUpdate = assignColumnLength(as, t, f1, f2, f3);
  const titles = ["A", "B", "C", "D"];

  const headItems = asUpdate.map((a, index) => {
    return <th key={index}>{titles[index]}</th>;
  });

  const bodyItems = asUpdate.map((a, index) => {
    return (
      <td key={index} style={{ textAlign: "center" }}>
        <div
          className="row"
          style={{
            height: "250px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "blue",
              width: "110px",
              height: `${a.columnLength * 2}px`,
            }}
            className="row"
          ></div>
          <div className="row" style={{ marginTop: "5px" }}>
            {a.columnLength}%
          </div>
        </div>
      </td>
    );
  });

  return (
    <Modal isOpen={showReviewModal} fade={false}>
      <ModalHeader>Hỏi ý kiến khán giả</ModalHeader>
      <ModalBody>
        <Table hover>
          <thead>
            <tr>{headItems}</tr>
          </thead>
          <tbody>
            <tr>{bodyItems}</tr>
          </tbody>
        </Table>
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={() => {
            dispatchRedux(closeReviewModal());
          }}
          style={buttonStyle1}
        >
          <img
            style={imgButtonStyle1}
            alt="Continue"
            src="/imgs/Play1.png"
          ></img>
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ReviewModal;
