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
  return (
    <Button
      onClick={() => handleClick(value)}
      variant="contained"
      endIcon={value > 0 ? <AddIcon /> : <RemoveIcon />}
      className="icon-button"
    >
      <span>{value > 0 ? "Augmenter" : "Diminuer"}</span>
    </Button>
  );
};

IncrementButton.propTypes = {
  value: PropTypes.number,
  handleClick: PropTypes.func,
};

export default IncrementButton;
