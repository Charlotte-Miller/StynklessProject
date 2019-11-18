import React from 'react';
// Style
import useStyle from './Style/Main';
// MUI
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Login(props)
{
    const classes = useStyle();

    return (
        <div>
            <CssBaseline />

            <Container fixed className={classes.main}>
                <Typography component="div">

                    <Container fixed>
                        {props.content}
                    </Container>

                </Typography>
            </Container>

        </div>
    );
}
