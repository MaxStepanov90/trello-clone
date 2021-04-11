import { Button, IconButton, InputBase, Paper } from '@material-ui/core';
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles, fade } from '@material-ui/core/styles';
import React, { useContext, useState } from 'react';
import storeApi from '../../../utils/storeApi';

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
        color: "#fff",
        '&:hover': {
            background: fade('#5AAC44', 0.75),
        },
    }
}))


function InputCard({ setOpen, listId, type }) {
    const classes = useStyle();
    const { addMoreCard, addMoreList } = useContext(storeApi);
    const [title, setTitle] = useState('');

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    }
    const handleClose = () => {
        setOpen(false);
        setTitle('');
    }
    const handleBtnConfirm = () => {
        if (title != '') {
            if (type === 'card') {
                addMoreCard(title, listId);
                setTitle('');
                setOpen(false);
            } else {
                addMoreList(title);
            }
        }
    }

    return (
        <div>
            <div>
                <Paper className={classes.card}>
                    <InputBase
                        onChange={handleOnChange}
                        onBlur={() => setOpen(false)}
                        multiline
                        fullWidth
                        inputProps={classes.input}
                        value={title}
                        placeholder={type === "card" ? "Enter a title of this card..." : "Enter list title"} />
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
                    {type === "card" ? "Add Card" : "Add List"}
                </Button>
                <IconButton>
                    <ClearIcon onClick={handleClose} />
                </IconButton>
            </div>
        </div>
    );
}

export default InputCard;