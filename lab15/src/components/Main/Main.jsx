import { Box } from "@mui/material";
import Card from "../Card/Card";

const Main = ({ cards }) => {
  return (
    <Box 
      sx={{ 
        display: "flex", 
        flexWrap: "wrap", 
        gap: 4, 
        justifyContent: "center",
        width: "100%",
        height: "100%"
      }}
    >
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </Box>
  );
};

export default Main;
