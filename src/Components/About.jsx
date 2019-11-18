import React from 'react';
// MUI
import Typography from '@material-ui/core/Typography';
// Componetns
import useStyle from './Style/About';
import Template from './Template';

export default function About()
{
    const classes = useStyle();

    const content = (
        <div>
            <Typography variant="h2" className={classes.root}>About</Typography>

            <Typography variant='h6' className={classes.root}>
                    <hr />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur explicabo provident nisi ipsum necessitatibus corrupti nobis temporibus. Ipsa odio facilis nesciunt nisi fuga deserunt beatae veritatis sequi, nemo adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur explicabo provident nisi ipsum necessitatibus corrupti nobis temporibus. Ipsa odio facilis nesciunt nisi fuga deserunt beatae veritatis sequi, nemo adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur explicabo provident nisi ipsum necessitatibus corrupti nobis temporibus. Ipsa odio facilis nesciunt nisi fuga deserunt beatae veritatis sequi, nemo adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur explicabo provident nisi ipsum necessitatibus corrupti nobis temporibus. Ipsa odio facilis nesciunt nisi fuga deserunt beatae veritatis sequi, nemo adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur explicabo provident nisi ipsum necessitatibus corrupti nobis temporibus. Ipsa odio facilis nesciunt nisi fuga deserunt beatae veritatis sequi, nemo adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur explicabo provident nisi ipsum necessitatibus corrupti nobis temporibus. Ipsa odio facilis nesciunt nisi fuga deserunt beatae veritatis sequi, nemo adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur explicabo provident nisi ipsum necessitatibus corrupti nobis temporibus. Ipsa odio facilis nesciunt nisi fuga deserunt beatae veritatis sequi, nemo adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur explicabo provident nisi ipsum necessitatibus corrupti nobis temporibus. Ipsa odio facilis nesciunt nisi fuga deserunt beatae veritatis sequi, nemo adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur explicabo provident nisi ipsum necessitatibus corrupti nobis temporibus. Ipsa odio facilis nesciunt nisi fuga deserunt beatae veritatis sequi, nemo adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur explicabo provident nisi ipsum necessitatibus corrupti nobis temporibus. Ipsa odio facilis nesciunt nisi fuga deserunt beatae veritatis sequi, nemo adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur explicabo provident nisi ipsum necessitatibus corrupti nobis temporibus. Ipsa odio facilis nesciunt nisi fuga deserunt beatae veritatis sequi, nemo adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur explicabo provident nisi ipsum necessitatibus corrupti nobis temporibus. Ipsa odio facilis nesciunt nisi fuga deserunt beatae veritatis sequi, nemo adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur explicabo provident nisi ipsum necessitatibus corrupti nobis temporibus. Ipsa odio facilis nesciunt nisi fuga deserunt beatae veritatis sequi, nemo adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur explicabo provident nisi ipsum necessitatibus corrupti nobis temporibus. Ipsa odio facilis nesciunt nisi fuga deserunt beatae veritatis sequi, nemo adipisci.
            </Typography>
        </div>
    )

    return (<Template content={content} />);
}
