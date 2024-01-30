import classes from './Buttons.module.css'

const Buttons = () => { 
    return (
        <div className={ classes.container }>
            <button className={ classes.button + ' ' + classes['button-reset'] } type="reset" onClick={ (e) => e.preventDefault()}>Reset</button>
            <button className={ classes.button } type="submit" onClick={ (e) => e.preventDefault()}>Submit</button>
        </div> 
    )
}
export default Buttons