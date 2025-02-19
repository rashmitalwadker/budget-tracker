import Transaction from '../components/Transaction';
import {Box,styled,Card,CardContent,Typography,Divider,List}from '@mui/material';
const Component = styled(Box)`
    & > h5 {
        margin-bottom: 10px;
    }
`;

const Transactions = ({ transactions, deleteTransaction }) => {
    
    return (
        <Component>
            <Typography variant="h5">Transaction History</Typography>
            <Divider style={{width: '100%'}} />
            <List>
                {
                    transactions.map(transaction => {
                        return <Transaction transaction={transaction} deleteTransaction={deleteTransaction} key={transaction.id} />
                    })
                }
            </List>
        </Component>
    )
}

export default Transactions;