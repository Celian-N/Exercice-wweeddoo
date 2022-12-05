import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton, Stack } from "@mui/material";
import './IncrementButton.css'
interface IncrementButtonProps {
  value: number;
  handleClick: (value: number) => void;
}

const IncrementButton = ({ value, handleClick }: IncrementButtonProps) => {
  return (
    <IconButton onClick={() => handleClick(value)}>
      <Stack spacing={2} direction="column" alignItems="center">
        <span>{value > 0 ? "Augmenter" : "Diminuer"}</span>
        {value > 0 ? <AddIcon /> : <RemoveIcon />}
      </Stack>
    </IconButton>
  );
};

IncrementButton.propTypes = {
  value: PropTypes.number,
  handleClick: PropTypes.func,
};

export default IncrementButton;
