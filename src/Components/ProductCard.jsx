import React from 'react';
// Style
import useStyles from './Style/Card';
// MUI
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function ProductCard(props)
{
  const classes = useStyles();

  const product = props.product;

  return (
    <Grid item xs={4}>

      <Paper className={classes.paper}>

        <Card className={classes.card}>

          <CardActionArea>

            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="270"
              image={product.imageURL}
              title={product.name}
            />

            <CardContent>

              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                {product.description}
              </Typography>

              <Typography className={classes.price} variant="h6" component="p">
                {product.price}
              </Typography>

            </CardContent>

          </CardActionArea>



          <ButtonGroup fullWidth>
            <Button variant='outlined' size='large'>
              <AddShoppingCartIcon className={classes.icon} />
              ADD
          </Button>
          </ButtonGroup>

        </Card>
      </Paper>
    </Grid>
  );
}