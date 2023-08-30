import React from "react";
import {
  styleBig1,
  styleBig2,
  styleBig3,
  styleBigNow1,
  styleBigNow2,
  styleBigNow3,
  styleNormal,
  styleNow,
} from "../CSS/Styles";

function RightPart(props) {
  let { qNumber, hideRightPart } = props;
  let styles = [
    styleNormal,
    styleNormal,
    styleNormal,
    styleNormal,
    styleBig1,
    styleNormal,
    styleNormal,
    styleNormal,
    styleNormal,
    styleBig2,
    styleNormal,
    styleNormal,
    styleNormal,
    styleNormal,
    styleBig3,
  ];
  let changeStyle = () => {
    if (qNumber === 5) {
      styles[4] = styleBigNow1;
    } else if (qNumber === 10) {
      styles[9] = styleBigNow2;
    } else if (qNumber === 15) {
      styles[14] = styleBigNow3;
    } else {
      styles[qNumber - 1] = styleNow;
    }
  };
  changeStyle();
  return (
    <div hidden={hideRightPart} className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <div style={styles[14]} className="row">
        <h3>15. 500.000.000đ</h3>
      </div>
      <div style={styles[13]} className="row">
        <h3>14. 300.000.000đ</h3>
      </div>
      <div style={styles[12]} className="row">
        <h3>13. 200.000.000đ</h3>
      </div>
      <div style={styles[11]} className="row">
        <h3>12. 100.000.000đ</h3>
      </div>
      <div style={styles[10]} className="row">
        <h3>11. 50.000.000đ</h3>
      </div>
      <div style={styles[9]} className="row">
        <h3>10. 30.000.000đ</h3>
      </div>
      <div style={styles[8]} className="row">
        <h3>9. 15.000.000đ</h3>
      </div>
      <div style={styles[7]} className="row">
        <h3>8. 10.000.000đ</h3>
      </div>
      <div style={styles[6]} className="row">
        <h3>7. 5.000.000đ</h3>
      </div>
      <div style={styles[5]} className="row">
        <h3>6. 3.000.000đ</h3>
      </div>
      <div style={styles[4]} className="row">
        <h3>5. 2.000.000đ</h3>
      </div>
      <div style={styles[3]} className="row">
        <h3>4. 500.000đ</h3>
      </div>
      <div style={styles[2]} className="row">
        <h3>3. 300.000đ</h3>
      </div>
      <div style={styles[1]} className="row">
        <h3>2. 200.000đ</h3>
      </div>
      <div style={styles[0]} className="row">
        <h3>1. 100.000đ</h3>
      </div>
    </div>
  );
}

export default RightPart;
