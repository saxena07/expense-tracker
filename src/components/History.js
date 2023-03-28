import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useContext } from "react";
import { GlobalContext } from "../context/global";
// import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";


const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper
}));

export default function  History() {
  const { transactions } = useContext(GlobalContext);
  const { deleteTransaction } = useContext(GlobalContext);

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 0, maxWidth: 1052 }}>
      <Grid container spacing={1}></Grid>
      <Grid container spacing={2}>
        <Grid item xs={10} md={10}>
          <Typography sx={{ mt: 5, mb: 0 }} variant="h5" component="div">
            HISTORY
          </Typography>
          <Demo>
            <List dense={dense}>
            {transactions.map(transaction => (
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={()=> deleteTransaction(transaction.id)}> 
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={transaction.text+" : "+transaction.amount}
                  />
                </ListItem>
                ))}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}