import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    root: {
        opacity: '1'
    },
    card: {
        maxWidth: 345,
        backgroundColor: '#F4A261',
    },
    price: {
        marginTop: '1rem'
    },
    paper: {
        padding: theme.spacing(2),
        background: '#E2985A',
    },
    icon: {
        marginRight: '1rem',
    }
}));