/* eslint-disable no-restricted-syntax */
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InformativeMessages from '../InformativeMessages';
import './src/index.css';

const styles = theme => ({
  container: {
    backgroundColor: 'bisque',
  },
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class RenderLogUp extends React.PureComponent {
  constructor(props) {
    super(props);

    this.classes = this.props.classes;

    this.state = {
      userInformation: {
        name: '',
        lastName: '',
        nickName: '',
        email: '',
        password: '',
      },
      mistakes: [],
    };
  }

  componentWillReceiveProps(props) {
    for (const prop of props.errors) {
      this.setState(prevState => ({ mistakes: prevState.push(prop) }));
    }
  }

  handleName = event => {
    const name = event.target.value;
    this.setState(prevState => ({
      userInformation: {
        ...prevState.userInformation,
        name,
      },
    }));
  };

  handleLastName = event => {
    const lastName = event.target.value;
    this.setState(prevState => ({
      userInformation: {
        ...prevState.userInformation,
        lastName,
      },
    }));
  };

  handleNickName = event => {
    const nickName = event.target.value;
    this.setState(prevState => ({
      userInformation: {
        ...prevState.userInformation,
        nickName,
      },
    }));
  };

  handleEmail = event => {
    const email = event.target.value;
    this.setState(prevState => ({
      userInformation: {
        ...prevState.userInformation,
        email,
      },
    }));
  };

  handlePassword = event => {
    const password = event.target.value;
    this.setState(prevState => ({
      userInformation: {
        ...prevState.userInformation,
        password,
      },
    }));
  };

  handleClick = () => {
    console.log(this.state);
    this.props.onClick(this.state);
  };

  renderErrors = errors => {
    errors.map(error => {
      switch (error) {
        case 'name':
          return (
            <div id="nameErorr">
              <InformativeMessages visible type="error" text="eeeee" />
            </div>
          );
        case 'lastName':
          return (
            <div id="lastNameErorr">
              <InformativeMessages />
            </div>
          );
        case 'emailErorr':
          return (
            <div id="emailErorr">
              <InformativeMessages />
            </div>
          );
        case 'passwordErorr':
          return (
            <div id="passwordErorr">
              <InformativeMessages />
            </div>
          );
        case 'nickNameErorr':
          return (
            <div id="nickNameErorr">
              <InformativeMessages />
            </div>
          );
        default:
          return <span />;
      }
    });
  };

  render() {
    return (
      <div>
        <div>{this.renderErrors(this.state.mistakes)}</div>
        <div className={this.classes.container}>
          <main className={this.classes.main}>
            <CssBaseline />
            <Paper className={this.classes.paper}>
              <Avatar className={this.classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form className={this.classes.form}>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Name</InputLabel>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    onChange={this.handleName}
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Last Name</InputLabel>
                  <Input
                    id="lastName"
                    name="lastName"
                    autoComplete="lastName"
                    onChange={this.handleLastName}
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Nick</InputLabel>
                  <Input
                    id="nickName"
                    name="nickName"
                    autoComplete="nickName"
                    onChange={this.handleNickName}
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Email Address</InputLabel>
                  <Input
                    id="email"
                    name="email"
                    autoComplete="email"
                    onChange={this.handleEmail}
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.handlePassword}
                  />
                </FormControl>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={this.classes.submit}
                  onClick={this.handleClick}
                >
                  Sign up
                </Button>
              </form>
            </Paper>
          </main>
        </div>
      </div>
    );
  }
}

RenderLogUp.propTypes = {
  classes: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(RenderLogUp);
