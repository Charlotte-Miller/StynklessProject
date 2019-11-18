import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
// Style
import useStyle from './Style/ShowMoreButton';
// Comppnent
import ProductsOnPage from './ProductsOnPage';
import Template from './Template';
// MUI
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default class Home extends Component
{
    state = {
        currentPage: 1,
    }

    handleNext = () =>
    {
        this.setState({ currentPage: this.state.currentPage + 1 });
    }

    handleBack = () =>
    {
        this.setState({ currentPage: this.state.currentPage - 1 });
    }

    render()
    {
        const classes = useStyle;

        const disableBackStatus = this.state.currentPage === 1 ? true : false;

        const content = (

            <Grid container spacing={6}>

                <BrowserRouter>
                    {/* Showing products */}
                    <Switch>
                        <Route exact path='Home/:current_page'>
                            <ProductsOnPage />
                        </Route>
                    </Switch>
                </BrowserRouter>

                <ProductsOnPage />

                {/* Show more button */}
                <Grid item xs={6}>
                    <ButtonGroup fullWidth>
                        <Button
                            onClick={this.handleBack}
                            disabled={disableBackStatus}
                            className={classes.root}
                            variant='contained'
                            size='large'
                            color="inherit"
                            component={Link}
                            to={`/Home/${this.state.currentPage}`}
                        >
                            <ArrowBackIosIcon />
                        </Button>
                    </ButtonGroup>
                </Grid>

                <Grid item xs={6}>
                    <ButtonGroup fullWidth>
                        <Button
                            onClick={this.handleNext}
                            name='next'
                            className={classes.root}
                            variant='contained'
                            size='large'
                            color="inherit"
                            component={Link}
                            to={`/Home/${this.state.currentPage}`}
                        >
                            <ArrowForwardIosIcon />
                        </Button>
                    </ButtonGroup>
                </Grid>

            </Grid>
        );

        return (<Template content={content} />);
    }
}