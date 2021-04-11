import React, { useContext, useState } from 'react';
import { InputBase, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import storeApi from '../../utils/storeApi';

const useStyle = makeStyles((theme) => ({
    editableTitleContainer: {
        margin: theme.spacing(1),
        display: "flex"
    },
    editableTitle: {
        flexGrow: 1,
        fontSize: "1.2rem",
        fontWeight: "bold"
    },
    input: {
        margin: theme.spacing(1),
        '&:focus': {
            background: "#ddd"
        }
    }
}))

function Title({ title, listId }) {
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const { updateListTitle } = useContext(storeApi);

    const handleOnChange = (e) => {
        setNewTitle(e.target.value);
    };
    const handleOnBlur = () => {
        updateListTitle(newTitle, listId);
        setOpen(!open);
    }

    return (
        <div>
            {open ? (
                <div>
                    <InputBase
                        onChange={handleOnChange}
                        value={newTitle}
                        inputProps={classes.input}
                        fullWidth
                        onBlur={handleOnBlur}
                        autoFocus
                    />
                </div>
            ) : (
                    <div className={classes.editableTitleContainer}>
                        <Typography className={classes.editableTitle}
                            onClick={() => setOpen(!open)}>
                            {title}
                        </Typography>
                        <MoreHorizIcon />
                    </div>
                )
            }
        </div>
    );
}

export default Title;