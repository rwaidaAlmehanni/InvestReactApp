import logo from '../../assets/investment-calculator-logo.png'
import classes from './Header.module.css'

export default function Header() { 
    return (
        <header className={classes.header}>
            <img src={ logo } />
            <h1>React Invertor Calculater</h1>
        </header>
    )
}