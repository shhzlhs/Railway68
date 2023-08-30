import { Button } from "reactstrap";
import { answerSelectButton, midBarDiv } from "../CSS/Styles";
const correct1 = "Chúc mừng bạn trả lời đúng câu đầu tiên!";
const correct2 = "Đúng rồi! Đến câu số 3 thôi!";
const correct3 = "Được 3 câu rồi nhé!";
const correct4 = "Nice! Sắp qua mốc đầu tiên rồi!";
const correct5 = "Chúc mừng bạn đã có chắc trong tay 2.000.000đ!";
const correct6 = "Chính xác, mốc thưởng tăng lên 3.000.000đ";
const correct7 = "Chà chà! Tôi bắt đầu thích bạn rồi đấy!";
const correct8 = "Con nhà ai mà giỏi thế!";
const correct9 = "Tuyệt vời! Sẵn sàng qua mốc 2 nào!";
const correct10 = "Xin chúc mừng! Bạn đã có chắc trong tay 30.000.000đ";
const correct11 = "Trời ơi khó vậy cũng trả lời được???";
const correct12 = "Bạn từ hành tinh nào đến vậy?";
const correct13 = "Nhà bạn có két sắt chưa?";
const correct14 = "Yêu bạn quá đi mất! Còn 1 câu nữa là ôm nửa tỉ rồi!";
const correct15 =
  "Thật không thể tin nổi! Bạn chính là người chúng tôi tìm kiếm bấy lâu nay!";
const corrects = [
  correct1,
  correct2,
  correct3,
  correct4,
  correct5,
  correct6,
  correct7,
  correct8,
  correct9,
  correct10,
  correct11,
  correct12,
  correct13,
  correct14,
  correct15,
];

const reward0 = "??? Bạn dừng cuộc chơi với cái nịt à?";
const reward1 =
  "Chúc mừng bạn vượt qua duy nhất câu số 1! Gửi bạn 100.000đ uống nước nhé!";
const reward2 =
  "Chúc mừng bạn vượt qua được hẳn 2 câu hỏi! Gửi bạn 200.000đ uống nước nhé!";
const reward3 =
  "Chúc mừng bạn vượt qua được hẳn 3 câu hỏi! Gửi bạn 300.000đ tiền xăng xe nhé!";
const reward4 =
  "Chúc mừng bạn trở thành người hiếm hoi dừng cuộc chơi ở câu số 5! Nhận 500.000đ và về đi nhé!";
const reward5 =
  "Bạn thật là ngu ngốc khi dừng ở câu số 6! Cầm 2.0000.000đ về suy ngẫm nhé!";
const reward6 = "Chúc mừng bạn! Giải thưởng 3.0000.000đ là của bạn";
const reward7 = "Chúc mừng bạn! Giải thưởng 5.0000.000đ là của bạn";
const reward8 = "Chúc mừng bạn! Giải thưởng 10.0000.000đ là của bạn";
const reward9 =
  "Bạn suýt chút nữa vượt qua mốc quan trọng số 2! Không sao, bạn bảo toàn được giải thưởng 15.000.000đ";
const reward10 =
  "Chúc mừng bạn có được giải thưởng 30.000.000đ! Nhưng bạn quả là một người ngu ngốc khi dừng ở câu 11";
const reward11 = "Chúc mừng bạn nhận được giải thưởng 50.000.000đ";
const reward12 = "Chúc mừng bạn nhận được giải thưởng 100.000.000đ!";
const reward13 =
  "Bạn là một trong số rất ít người đi đến được câu 14! Xin chúc mừng, giải thưởng 200.000.000đ là của bạn";
const reward14 =
  "Suýt nữa thì bạn vượt qua câu cuối cùng rồi! Không sao, bạn vẫn là triệu phú với giải thưởng 300.000.000đ";
const rewards = [
  reward0,
  reward1,
  reward2,
  reward3,
  reward4,
  reward5,
  reward6,
  reward7,
  reward8,
  reward9,
  reward10,
  reward11,
  reward12,
  reward13,
  reward14,
];
const defaulButtonStyle = {
  background: "none",
  border: "none",
  color: "black",
  width: "350px",
  overflow: "hidden",
};
const defaulQuestionFindById = {
  id: "0",
  content: "Chưa có câu hỏi này",
  isTrue: "",
  answers: [],
};
const wrongReward1 =
  "Thật tiếc vì bạn không qua nổi câu số 5! Chúc mừng bạn ra về với cái nịt!!!";
const wrongReward2 = "Tiếc quá, bạn phải ra về với phần thưởng mốc 1 rồi!";
const wrongReward3 =
  "Thật tiếc khi phải chia tay! Không sao, bạn vẫn có 30.000.000đ mang về!";
const defaultAnswer1 = { content: "---", isTrue: "Y" };
const defaultAnswer2 = { content: "---", isTrue: "N" };
const wrongImgSmile = (
  <img
    alt="Lêu Lêu"
    src="/imgs/LêuLêu.gif"
    style={{ width: "300px", height: "80px" }}
  />
);
const happyImg = (
  <img
    alt="Happy!!!"
    src="/imgs/happy.gif"
    style={{ width: "80px", height: "80px", marginRight: "100px" }}
  />
);
const defaultQuestion = {
  content: "Bạn còn chờ gì nữa mà chưa bắt đầu?",
  answers: [defaultAnswer1, defaultAnswer2, defaultAnswer2, defaultAnswer2],
};
const defaultQuestions = [defaultQuestion];
const defaulItems = (
  <div style={midBarDiv} className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
    <Button style={answerSelectButton}>
      <h2>--------------------</h2>
    </Button>
  </div>
);

export {
  defaultQuestion,
  defaulButtonStyle,
  defaultQuestions,
  defaulItems,
  wrongReward1,
  wrongReward2,
  wrongReward3,
  wrongImgSmile,
  corrects,
  happyImg,
  rewards,
  defaulQuestionFindById,
};
