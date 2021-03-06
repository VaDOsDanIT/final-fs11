import React, { useEffect, useState } from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { photos as images } from "../../../../utils/constants/photos";
import TransitionsModal from "../../../Modal";

const useStyles = makeStyles(() => ({
  root: {
    width: '453px',
    marginRight: '20px',
  },
  gridList: {
    display: "flex",
    justifyContent: 'flex-start',
    alignItems: "center",
    flexDirection: 'row',
    transform: 'translateZ(0)',
    height: '100px',

  },
  gridListitem: {
    marginRight: 10,
    maxHeight: "110px",
    borderRadius: '10%',
    width: '140px',

  },
  gridListitemShadowImg: {
    maxHeight: "110px",
    borderRadius: '10%',
    opacity: '74%',
    position: "relative",
    width: '140px',

  },
  countOfPfoto: {
    position: 'absolute',
    top: '10px',
    right: '60px',
    color: 'white',
    fontSize: '24px'
  },
  bigPhoto: {
    marginBottom: '10px',
    borderRadius: '5%',
    width: "100%",
    maxHeight: '312px'
  }
}));

export const Slider = ({ images }) => {
  const classes = useStyles();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (photoIndex > images.length - 1) {
      setPhotoIndex(0);
    }
    if (photoIndex < 0) {
      setPhotoIndex(images.length - 1);
    }
  }, [photoIndex, setPhotoIndex]);

  function showPhoto(index) {
    setPhotoIndex(index);
  }

  function openModal() {
    setIsOpen(true);
  }


  return (
    <div className={classes.root}>
      <img
        className={classes.bigPhoto}
        src={photoIndex ? images[photoIndex] : images[0]}
        alt={'das'}/>
      {
        images.length > 1
          ? <div className={classes.gridList}>
            <img
              className={classes.gridListitem}
              onClick={() => {
                showPhoto(0);
              }}
              src={images.length >= 1 ? images[0] : images[1]} alt={"1"}/>
            <img
              className={classes.gridListitem}
              onClick={() => {
                showPhoto(1);
              }} src={images.length >= 2 ? images[0] : images[1]} alt={"1"}/>
            <div>
              <img
                className={classes.gridListitemShadowImg}
                onClick={openModal}
                src={images.length >= 1 ? images[0] : images[1]}
                alt={"2"}/>
              <p className={classes.countOfPfoto}>+{images.length}</p>
            </div>
          </div>
          : ''
      }

      {isOpen ? <TransitionsModal
          images={images}
          open={isOpen}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        /> :
        ""
      }
    </div>
  );
};
