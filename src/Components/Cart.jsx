import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Template from './Template';

export default function Cart()
{
    const content = (
        <div>
            <Typography variant="h2" gutterBottom>Cart</Typography>

            <Typography variant='h6' gutterBottom>
                <Container>
                    <hr />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur explicabo provident nisi ipsum necessitatibus corrupti nobis temporibus. Ipsa odio facilis nesciunt nisi fuga deserunt beatae veritatis sequi, nemo adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur explicabo provident nisi ipsum necessitatibus corrupti nobis temporibus. Ipsa odio facilis nesciunt nisi fuga deserunt beatae veritatis sequi, nemo adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur explicabo provident nisi ipsum necessitatibus corrupti nobis temporibus. Ipsa odio facilis nesciunt nisi fuga deserunt beatae veritatis sequi, nemo adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur explicabo provident nisi ipsum necessitatibus corrupti nobis temporibus. Ipsa odio facilis nesciunt nisi fuga deserunt beatae veritatis sequi, nemo adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur explicabo provident nisi ipsum necessitatibus corrupti nobis temporibus. Ipsa odio facilis nesciunt nisi fuga deserunt beatae veritatis sequi, nemo adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur explicabo provident nisi ipsum necessitatibus corrupti nobis temporibus. Ipsa odio facilis nesciunt nisi fuga deserunt beatae veritatis sequi, nemo adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur explicabo provident nisi ipsum necessitatibus corrupti nobis temporibus. Ipsa odio facilis nesciunt nisi fuga deserunt beatae veritatis sequi, nemo adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur explicabo provident nisi ipsum necessitatibus corrupti nobis temporibus. Ipsa odio facilis nesciunt nisi fuga deserunt beatae veritatis sequi, nemo adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur explicabo provident nisi ipsum necessitatibus corrupti nobis temporibus. Ipsa odio facilis nesciunt nisi fuga deserunt beatae veritatis sequi, nemo adipisci.
                </Container>
            </Typography>
        </div>
    )

    return (<Template content={content} />);
}
