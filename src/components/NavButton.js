/*
This is the button that takes care of moving forward and backwards through the breeds.
This component is accessing the pictures context directly using the custom hook usePictures.
Next iteration would use react suspense for pictures with a spinner.
*/

import React from 'react';
import {
  ButtonBase,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { ArrowBackIos as ArrowBackIosIcon, ArrowForwardIos as ArrowForwardIosIcon } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { usePictures } from '../data/pictures';

const useStyles = makeStyles(() => ({
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  pictureAndNameContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const NavButton = ({ breed, forward = false }) => {
  const styles = useStyles();
  const { pictures } = usePictures();

  return (
    <ButtonBase focusRipple>
      <Link to={`/${breed}`} className={styles.link}>
        <Card>
          <CardContent className={styles.cardContent}>
            { !forward && <ArrowBackIosIcon /> }
            <div className={styles.pictureAndNameContainer}>
              {
                pictures[breed]
                && <img width="100" src={pictures[breed][0]} alt={breed} />
              }
              <span>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                >
                  {breed}
                </Typography>
              </span>
            </div>
            { forward && <ArrowForwardIosIcon /> }
          </CardContent>
        </Card>
      </Link>
    </ButtonBase>
  );
};

NavButton.propTypes = {
  breed: PropTypes.string.isRequired,
  forward: PropTypes.bool,
};

export default NavButton;
