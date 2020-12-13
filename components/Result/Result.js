import { CorrectWrapper, InCorrectWrapper } from "./style";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export const Correct = (props) => {
  const { width, height } = useWindowSize();
  return (
    <CorrectWrapper>
      <div className="main">
        <div className="result">Correct Answer! Congratulations</div>
        <Confetti width={width} height={height} recycle={false} />
        <button
          className="try-button"
          onClick={() => {
            location.reload();
          }}
        >
          Try Again
        </button>
      </div>
    </CorrectWrapper>
  );
};

export const InCorrect = (props) => {
  return (
    <InCorrectWrapper>
      <div className="main">
        <div className="result">Your Answer Was Wrong</div>
        <div>The question was {props.question}</div>
        <img
          src="https://users.manchester.edu/student/smcarmichael/mywebpage/a-z.gif"
          width={"300px"}
          alt="help"
        />
        <button
          className="try-button"
          onClick={() => {
            location.reload();
          }}
        >
          Try Again
        </button>
      </div>
    </InCorrectWrapper>
  );
};
