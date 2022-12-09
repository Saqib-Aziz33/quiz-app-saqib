import {
  Box,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import { useState } from "react";

function Question({ question, answers, handleQuizChange }) {
  const [selected, setSelected] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!selected) return alert("no answer is selected");
    handleQuizChange(selected);
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h6" sx={{ mb: "2rem" }}>
        {question}
      </Typography>
      <FormControl required>
        <RadioGroup
          required
          aria-labelledby="answers"
          name="answer-buttons-group"
        >
          <ol type="a">
            {answers.map((answer) => (
              <li key={answer}>
                <FormControlLabel
                  onClick={(e) => setSelected(e.target.value)}
                  sx={{ ml: "0.5rem" }}
                  value={answer}
                  control={<Radio />}
                  label={answer}
                />
              </li>
            ))}
          </ol>
        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        type="submit"
        sx={{ display: "block", mt: "2rem" }}
      >
        Next
      </Button>
    </Box>
  );
}
export default Question;
