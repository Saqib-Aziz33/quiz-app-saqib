import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Container,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../data.json";

function QuizSelection() {
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/test?subject=${subject}`);
  }

  return (
    <Container
      onSubmit={handleSubmit}
      component="form"
      sx={{
        width: "300px",
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Typography variant="h6" sx={{ mb: "2rem", textAlign: "center" }}>
        Select quiz subject
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">subject</InputLabel>
        <Select
          required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subject}
          label="subject"
          onChange={(e) => setSubject(e.target.value)}
        >
          {data.map((quizSubject) => (
            <MenuItem value={quizSubject.subject} key={quizSubject.subject}>
              {quizSubject.subject}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        type="submits"
        variant="contained"
        fullWidth
        sx={{ display: "block", mt: "2rem" }}
      >
        Confirm
      </Button>
    </Container>
  );
}
export default QuizSelection;
