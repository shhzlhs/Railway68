import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from "reactstrap";
import { buttonStyle1, imgButtonStyle1 } from "../CSS/Styles";

function ReviewModal(props) {
  let { qNumber, etcAnswers, showReviewModal, setShowReviewModal } = props;
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

  const getRandomT = (qNumber) => {
    if (qNumber < 5) {
      return Math.floor(Math.random() * 11) + 90;
    } else if (qNumber < 6) {
      return Math.floor(Math.random() * 41) + 60;
    } else if (qNumber < 8) {
      return Math.floor(Math.random() * 61) + 40;
    } else if (qNumber < 10) {
      return Math.floor(Math.random() * 51) + 20;
    } else if (qNumber < 12) {
      return Math.floor(Math.random() * 81);
    } else {
      return Math.floor(Math.random() * 71);
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
        const randomF = shuffledFs[currentIndex];
        currentIndex = (currentIndex + 1) % shuffledFs.length;
        return { ...a, columnLength: randomF };
      }
    });
  };
  const [a1, a2, a3, a4] = etcAnswers.map((answer, index) => ({
    content: answer.content,
    isTrue: answer.isTrue,
    columnLength: "50",
  }));
  const as = [a1, a2, a3, a4];
  const getRandomF = (sum) => {
    return Math.floor(Math.random() * (100 - sum + 1));
  };

  const t = getRandomT(qNumber);

  const f1 = getRandomF(t);

  const f2 = getRandomF(f1 + t);

  const f3 = 100 - t - f1 - f2;

  const asUpdate = assignColumnLength(as, t, f1, f2, f3);

  const headItems = asUpdate.map((a, index) => {
    return <th key={index}>{a.content}</th>;
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
            justifyContent: "flex-end", // Change 'end' to 'flex-end'
            alignItems: "center", // Add this line to center the content horizontally
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
    <Modal fade={false} isOpen={showReviewModal}>
      <ModalHeader>
        <h1>Hỏi ý kiến khán giả</h1>
      </ModalHeader>
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
            setShowReviewModal(false);
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
