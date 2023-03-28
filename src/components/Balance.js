import React, {useContext} from 'react';
import { GlobalContext } from '../context/global';
// var bal=0;
function Balance() {
    const {transactions} = useContext(GlobalContext);
    const amount = transactions.map(transaction => transaction.amount);
    const bal = amount.reduce((total, item) => (total += item),0).toFixed(2);

    // if (amount !== undefined) bal=amount;
    return (
        <>
            <h2>YOUR BALANCE: {'\u20B9'} {bal}</h2>
        </>
    )
}

export default Balance;