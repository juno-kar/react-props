import { Container, Typography } from "@mui/material";
import Main from "./components/Main/Main";
import { cardsData } from "./data";
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <>
    <CssBaseline/>
    <Container 
    disableGutters
    maxWidth={false}
      sx={{
        textAlign: "center",
        py: 5,
        fontFamily: "'Josefin Sans', sans-serif",
        backgroundColor: "#b6b0a8",
        width: "100%",
        margin: 0
      }}
    >
      <Typography     
        variant="h3" 
        component="h1"
        sx={{
          mb: 4,
          color: "#2d2d2d",
          fontWeight: 800,
          fontFamily: "'Josefin Sans', sans-serif"
        }}
      >
        Our Experts - Lab15
      </Typography>
      <Main cards={cardsData} />
    </Container>
    </>
  );
}

export default App;
