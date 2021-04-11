import { Button, IconButton, InputBase, Paper } from '@material-ui/core';
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyle = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(0, 1, 1, 1),
        paddingBottom: theme.spacing(4)
    },
    input: {
        margin: theme.spacing(1)
    },
    confirm: {
        margin: theme.spacing(0, 1, 1, 1),
    },
    btnConfirm: {
        background: "#5AAC44",
        color: "#fff"
    }
}))


function InputCard({ setOpen }) {
    const classes = useStyle();

    return (
        <div>
            <div>
                <Paper className={classes.card}>
                    <InputBase
                        onBlur={() => setOpen(false)}
                        multiline
                        fullWidth
                        inputProps={classes.input}
                        placeholder="Enter a title of this card" />
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm} onClick={() => setOpen(false)}>Add Card</Button>
                <IconButton>
                    <ClearIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default InputCard;