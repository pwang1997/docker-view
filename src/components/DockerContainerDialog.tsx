import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DockerContainerDialogProps } from '../utils/DockerContainerUtils';
import { FormControl, FormControlLabel, FormHelperText, IconButton, Input, InputLabel } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function DockerContainerDialog({ mode }: DockerContainerDialogProps) {

  const [open, setOpen] = React.useState(false);
  const [containerName, setContainerName] = React.useState("");
  const [portList, setPortList] = React.useState<string[]>([]);
  const [imageList, setImageList] = React.useState<string[]>([]);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log({
      containerName,
      imageList,
      portList
    });
  }

  const addPortInput = () => {

  }

  const removePortInput = () => {

  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        CREATE
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle> Create a Docker Container</DialogTitle>
        <DialogContent>

          <TextField fullWidth label="Container Name" id="container-name-input" value={containerName} onChange={e => setContainerName(e.target.value)} />
          <div style={{ float: 'right' }}>
            <IconButton size='small' onClick={addPortInput}>
              <AddIcon color='secondary' />
            </IconButton>
            <IconButton size='small' onClick={removePortInput}>
              <RemoveIcon color='secondary' />
            </IconButton>
          </div>
          <FormControl>
            <InputLabel htmlFor="expose-port">Expose Port</InputLabel>
            <Input id="expose-port" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="container-port">Container Port</InputLabel>
            <Input id="container-port" />
          </FormControl>
          {/* <TextField fullWidth label="Ports" id="ports-input" value={portList} onChange={e => setPortList(e.target.value)} /> */}
          {/* <TextField fullWidth label="fullWidth" id="image-input" value={} /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}


export default DockerContainerDialog;