import { makeStyles } from '@material-ui/core/styles';
import Background from '../Assets/background.jpg';

export default makeStyles(
    {
        theme:
        {
            backgroundImage: `url(${Background})`,
            backgroundRepeat: 'no-repeat',  
            backgroundSize: '100% 100%',
        }
    });