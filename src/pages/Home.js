import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import Flashcard from "../components/Flashcard";
import StudyProgress from "../components/StudyProgress";

const Home = () => {
  const [progress, setProgress] = React.useState(40); // Example progress

  return (
    <Container sx={{ textAlign: "center", padding: 3 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        🎓 Study Buddy
      </Typography>

      <StudyProgress progress={progress} />

      <Box sx={{ marginTop: 3 }}>
        <Flashcard question="What is React?" answer="A JavaScript library for building UIs." />
      </Box>

      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 3 }}
        onClick={() => setProgress(progress + 10)}
      >
        Mark as Studied
      </Button>
    </Container>
  );
};

export default Home;
