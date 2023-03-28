import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { GlobalContext } from '../context/global';  

export default function Addexpense() {
    // function setText()
    const {addTransaction } = useContext(GlobalContext);
    const [Text, setText] = useState("");
    const [Amount, setAmount] = useState("");

    const onSubmit = e => {
    e.preventDefault();

    const newtransaction = {
        id: Math.floor(Math.random() *10000),
        text: Text,
        amount: +Amount
    }
    setText("");
    setAmount("");
    console.log(newtransaction);
    addTransaction(newtransaction);  

}
    return (
        <Grid justifyContent="center">
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
        <TextField id="input1" name="desc" label="Add Text" variant="standard" value={Text} onChange={(e) => setText(e.target.value)} /><br/>
        <TextField id="input2" name="amount" label="Enter Amount" type="number" variant="standard" value={Amount} onChange={(e) => setAmount(e.target.value)} />
        <br/>
        <Button type="submit">Add transaction</Button>
        </form>
        </Grid>
    )
}

