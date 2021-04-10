import React, { useState } from 'react';
import { InputBase, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyle = makeStyles((theme) => ({
    editableTitleContainer: {
        margin: theme.spacing(1),
        display: "flex"
    },
    editableTitle: {
        flexGrow: 1
    },
    input: {
        margin: theme.spacing(1),
        '&:focus': {
            background: "#ddd"
        }
    }
}))

function Title() {
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    return (
        <div>
            {open ? (
                <div>
                    <InputBase value="todoinputbase"
                        inputProps={classes.input}
                        fullWidth
                        onBlur={() => setOpen(!open)}
                    />
                </div>
            ) : (
                    <div className={classes.editableTitleContainer}>
                        <Typography className={classes.editableTitle}
                            onClick={() => setOpen(!open)}>
                            TodoTitle
                                </Typography>
                        <MoreHorizIcon />
                    </div>
                )
            }
        </div>
    );
}

export default Title;