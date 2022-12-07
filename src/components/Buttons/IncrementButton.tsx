import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";
import "./IncrementButton.css";

interface IncrementButtonProps {
  value: number;
  handleClick: (value: number) => void;
}

const IncrementButton = ({ value, handleClick }: IncrementButtonProps) => {
  if (!value) return null;
  const buttonIcon = value > 0 ? <AddIcon /> : <RemoveIcon />;
  const buttonLabel = value > 0 ? "Augmenter" : "Diminuer";

  return (
    <Button
      onClick={() => handleClick(value)}
      variant="contained"
      endIcon={buttonIcon}
      className="icon-button"
    >
      <span>{buttonLabel}</span>
    </Button>
  );
};

IncrementButton.propTypes = {
  value: PropTypes.number,
  handleClick: PropTypes.func,
};

export default IncrementButton;
