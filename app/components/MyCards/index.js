import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import ImgBoat from './images/boat.png';
import ImgTank from './images/tank2.jpg';
import ImgHotAirBalloon from './images/hot-air balloon2.jpg';

const imageEmpty = 0;
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class MyCards extends React.Component {
  constructor(props) {
    super(props);
    this.img = imageEmpty;
  }

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({
      checked: newChecked,
    });
    // eslint-disable-next-line react/prop-types
    this.props.whenChecking(newChecked);
  };

  render() {
    const { classes } = this.props;

    return (
      <List dense className={classes.root}>
        {this.props.obj.cards.map(value => {
          switch (value.type) {
            case 'tank':
              this.img = ImgTank;
              break;

            case 'hot-air-balloon':
              this.img = ImgHotAirBalloon;
              break;

            case 'boat':
              this.img = ImgBoat;
              break;
            default:
              break;
          }
          return (
            <div key={value.name}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Province Name" src={this.img} />
                </ListItemAvatar>
                <ListItemText primary={value.name} />
                <ListItemSecondaryAction>
                  <Checkbox
                    onChange={this.handleToggle(value)}
                    checked={this.state.checked.indexOf(value) !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            </div>
          );
        })}
      </List>
    );
  }
}

MyCards.propTypes = {
  classes: PropTypes.object.isRequired,
  obj: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyCards);
