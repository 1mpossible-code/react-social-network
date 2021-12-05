import classes from './Preloader.module.css';
import loading from '../../assets/loading.gif';

const Preloader = () => {
    return <div className={classes.loading}>
        <img src={loading} alt='loading'/>
    </div>
}

export default Preloader;