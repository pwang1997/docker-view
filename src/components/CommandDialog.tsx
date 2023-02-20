import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, Snackbar, TextField } from '@mui/material';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';

function CommandDialog() {
    const [open, setOpen] = React.useState(false);
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [shellCommand, setShellCommand] = React.useState("");
    const errorMessageRef = React.useRef("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    }

    const handleSubmit = () => {
        axios.post(
            "http://localhost/api/v1/container/invoke",
            {
                command: shellCommand
            })
            .then((res) => {
                console.log(res.data);
                setShellCommand("");
                handleClose();
            })
            .catch((err) => {
                errorMessageRef.current = err?.response?.data
                setShellCommand("");
                setOpenSnackbar(true);
            });
    }

    const renderSnackbar = React.useCallback(() => {
        return (
            <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={handleSnackbarClose}
                message={errorMessageRef.current}
                action={action}
            />
        )
    }, [openSnackbar])


    const handleSnackbarButtonClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        handleSnackbarClose();
      };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleSnackbarButtonClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Shell Command
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="command-dialog-label"
            >
                <DialogTitle id="command-dialog-label">
                    Use Shell Command:
                </DialogTitle>
                <DialogContent>
                    <TextField
                        id="shell-input"
                        size="small"
                        label="Shell Command"
                        variant="outlined"
                        value={shellCommand}
                        onChange={(e) => setShellCommand(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
            {renderSnackbar()}
        </div>
    )
}

export default React.memo(CommandDialog);