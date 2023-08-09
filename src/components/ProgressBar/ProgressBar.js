import { getLeftPercent } from "../../utils";
import { FundsToBeRaised, RaisedAmountProgressBar } from "./ProgressBar.styled";

const ProgressBar = ({ width, height }) => {
  return (
    <FundsToBeRaised>
      <RaisedAmountProgressBar
        height={height}
        width={getLeftPercent(width.target_amount, width.amount_raised)}
      />
    </FundsToBeRaised>
  );
};

export default ProgressBar;
