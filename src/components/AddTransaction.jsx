import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    }

    return (
        <>
            <h3>Add the transaction</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder='Enter text...' />
                </div>
                <div className='form-control'>
                    <label htmlFor="amount">
                        Amount <br/> (negative - expenses, positive - income)
                    </label>
                    <input 
                    type="number" 
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                    placeholder='Enter amount...' />
                </div>
                <button className='btn'>Add transaction</button>
            </form>
        </>
    )
}
