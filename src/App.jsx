import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My MUI App
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome!
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Open Dialog
        </Button>
      </Container>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Greetings</DialogTitle>
        <DialogContent>
          <DialogContentText>hi.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default App;
