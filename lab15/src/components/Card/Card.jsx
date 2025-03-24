import { Card as MuiCard, CardContent, Typography, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../theme";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#00ac8b',
    color: '#00ac8b',
    boxShadow: `0 0 0 5px ${theme.palette.background.paper}`,
      width: 20,
      height: 20,
      borderRadius: '50%',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '5px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));


const Card = ({ title, description, image }) => {
  const handleClick = () => {
    alert(title);
  };

  return (
    <ThemeProvider theme={theme}>
    <MuiCard 
      sx={{
        borderRadius: 2,
        p: 3,
        pt: 1.5,
        pb: 1,
        textAlign: "center",
        width: 325,
        boxShadow: 3,
        transition: "transform 0.4s ease-in-out",
        backgroundColor: "#ddd6cd",
        "&:hover": { transform: "scale(1.05)" }
      }}
    >

      <CardContent>
        <Typography 
            variant="h5" 
            sx={{ 
              mb: 1.5, 
              color: "#2d2d2d", 
              fontFamily: "'Indie Flower', cursive",
              height: 40,
              fontWeight: 900,
              fontSize: 32
            }}
          >
            {title}
          </Typography>
          
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
          sx={{
            mb: 4,
          }}
        >
          <Avatar alt={title} src={image}  sx={{
                width: 135,
                height: 135,
          }}/>
        </StyledBadge>

        <Typography 
          variant="body2" 
          sx={{ 
            color: "#555", 
            height: 105,
            fontSize: 15
          }}
        >
          {description}
        </Typography>
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            mt: 0.5,
            textTransform: "lowercase",
            backgroundColor: "#bb976f",
            color: "white",
            fontWeight: 700,
            fontSize: 15,
            fontFamily: "'Josefin Sans', sans-serif",
            "&:hover": { backgroundColor: "#261778" }
          }}
        >
          learn more
        </Button>
      </CardContent>
    </MuiCard>
    </ThemeProvider>
  );
};

export default Card;
