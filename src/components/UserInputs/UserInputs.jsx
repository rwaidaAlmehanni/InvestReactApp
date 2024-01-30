import classes from './UsersInputs.module.css'
import Buttons from '../Buttons/Buttons'

export default function UserInputs({ userInput, handleChange }) { 
    return (
        <section className={classes['user-input']}>
            <div className={classes["input-group"]}>
                <p>
                   <label>Initial Investment</label>
                    <input type="number"
                        value={userInput.initialInvestment}
                        required
                        onChange={(e) => handleChange('initialInvestment', e.target.value)} />
                </p>
                <p>
                   <label>Annual Investment</label>
                    <input type="number"
                        value={userInput.annualInvestment}
                        required
                        onChange={(e) => handleChange('annualInvestment', e.target.value)}  />
                </p>
            </div>
            <div className={classes["input-group"]}>
                <p>
                   <label>Expected Return</label>
                    <input type="number"
                        value={userInput.expectedReturn}
                        required
                        onChange={(e) => handleChange('expectedReturn', e.target.value)}  />
                </p>
                <p>
                   <label>Duration</label>
                    <input type="number"
                        value={userInput.duration}
                        required
                        onChange={(e) => handleChange('duration', e.target.value)}
                    />
                </p>
            </div>
            <Buttons />
        </section>
    )
}