import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import ZoomIn from '@material-ui/icons/ZoomIn';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(() => ({
  icon: {
    color: 'rgba(255,255,255,0.54)',
  },
}))

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ImageResults = (props) => {
  const classes = useStyles();
  const { images, selectedTile, setSelectedTile } = props;

  const handleClickOpen = (img) => {
    setSelectedTile(img);
    console.log('clicked');
    console.log(img);
  }

  const handleClose = () => {
    setSelectedTile(null);
  };

  let imageListContent;

  if (images) {
    imageListContent = (
      <GridList cols={3}>
        {images.map(img => (
          <GridListTile key={img.id}>
            <img src={img.largeImageURL} alt="" />
            <GridListTileBar
              title={img.tags}
              subtitle={<span>by: <strong> {img.user}</strong> </span>}
              actionIcon={
                <IconButton className={classes.icon} onClick={() => handleClickOpen(img.largeImageURL)}>
                  <ZoomIn />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    )
  } else {
    imageListContent = null;
  }

  return (
    <div>
      {imageListContent}
      <Dialog
        open={selectedTile !== null}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle id="alert-dialog-title">Selected Image</DialogTitle>
        <DialogContent>
          {selectedTile && (
            <img src={selectedTile} alt='' style={{ width: '100%' }} />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired,
  setSelectedTile: PropTypes.func.isRequired,
}

export default ImageResults;