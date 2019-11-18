import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// Logo
import logoText from './Assets/logo-text-custom.png';
// Components
import ElevationScroll from './ElevationScroll'; //Make the navbar stick on top
// Matrial-ui
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// Custom style
import useStyle from './Style/Navbar';

const Navbar = (props) =>
{
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <ElevationScroll {...props}>

                    <AppBar className={classes.color} position="sticky">

                        <Toolbar>
                            {/* Logo */}
                            <Typography className={classes.title}>
                                <Button component={Link} to={'/Home'}>
                                    <img className={classes.logo} src={logoText} alt="logo" />
                                </Button>
                            </Typography>

                            {/* Navbar buttons */}
                            <Button color="inherit" component={Link} to={'/FAQ'}>FAQ</Button>
                            <Button color="inherit" component={Link} to={'/About'}>About</Button>

                            <Badge badgeContent={1} color="primary">
                                <Button color="inherit" component={Link} to={'/Cart'}>
                                    <ShoppingCartIcon fontSize='large'/>
                                </Button>
                            </Badge>

                            <Button color="inherit" component={Link} to={'/Login'}>Login</Button>
                        </Toolbar>

                    </AppBar>

            </ElevationScroll>
        </div>
    );
}

export default withRouter(Navbar);