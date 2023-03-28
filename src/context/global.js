import React, { createContext, useReducer}  from 'react';
import AppReducer from './AppReducer';
const initialState = {
    transactions: [
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(newTransaction){
        dispatch({
            type: 'DELETE', 
            payload: newTransaction
        })
    }
    function addTransaction(newtransaction){
        console.log(newtransaction);
        dispatch({
            type: 'ADD', 
            payload: newtransaction
        })
    }

    return <GlobalContext.Provider value={{
        transactions: state.transactions, 
        deleteTransaction, 
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>
}