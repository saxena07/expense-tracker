import React, {useContext} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { GlobalContext } from '../context/global';
// import  from 'react';

function Incomeexpense() {
    const {transactions} = useContext(GlobalContext);
    const amount = transactions.map(transaction => transaction.amount);
    const inc = amount.reduce((total, item) => (total += (item>0?item:0)),0).toFixed(2);
    const exp = amount.reduce((total, item) => (total += (item<0?item:0)),0).toFixed(2);

  return (
    <><hr/>
    <Card 
    variant="elevation" sx={{ maxWidth: 200}} >
      <CardMedia
        component="h1"
        height="840"
        align="center"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Income : {inc}
        </Typography>
      </CardContent>
    </Card><br/>
    <Card 
    variant="elevation" sx={{ maxWidth: 200 }}>
      <CardMedia
        component="h1"
        height="840"
        align="center"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Expense : {exp}
        </Typography>
      </CardContent>
    </Card>
    </>
  );
}

export default Incomeexpense;