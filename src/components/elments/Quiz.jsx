import data from "../../data.json";
import { useState } from "react";
import { Link } from "react-router-dom";
import Question from "./Question";
import { Container, Typography, Button, Box } from "@mui/material";

function Quiz({ subject }) {
  const [quiz] = useState(data.find((item) => item.subject === subject));
  const [score, setScore] = useState(0);
  const [currentQues, setCurrentQues] = useState(0);
  const quesLimit = quiz?.questions?.length;

  function handleQuizChange(ans) {
    if (currentQues >= quesLimit) return alert("Questions are ended");
    if (ans === quiz.questions[currentQues].answer) setScore(score + 1);
    setCurrentQues(currentQues + 1);
  }

  if (!quiz)
    return (
      <Box>
        <Typography>No quiz with this name is found</Typography>
      </Box>
    );
  return (
    <Container>
      <Typography sx={{ mb: "3rem" }} variant="h4">
        {quiz.subject} Quiz
      </Typography>
      {currentQues >= quesLimit ? (
        <Box>
          <Typography variant="h4">
            Score = {score} / {quesLimit}
          </Typography>
          <Button variant="outlined" sx={{ mt: "1rem" }}>
            <Link to="/">Back to Home</Link>
          </Button>
        </Box>
      ) : (
        <Question
          handleQuizChange={handleQuizChange}
          question={quiz.questions[currentQues].question}
          answers={quiz.questions[currentQues].answers}
        />
      )}
    </Container>
  );
}
export default Quiz;
