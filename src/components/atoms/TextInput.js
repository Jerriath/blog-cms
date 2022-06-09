// Importing stylesheet
import './atoms.css';


// Component that is being exported
const TextInput = (props) => {
    return(
        <fieldset>
            <label>

            </label>
            <input
                onChange={props.handleChange}
                value={props.value}
                placeHolder={props.placeHolder}
            />
        </fieldset>
    );    
};


export default TextInput;