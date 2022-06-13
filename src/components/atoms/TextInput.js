// Importing stylesheet
import './atoms.css';


// Component that is being exported
const TextInput = (props) => {
    return(
        <fieldset>
            <label>
                {props.label}
            </label>
            <input
                onChange={props.handleChange}
                value={props.value}
                placeholder={props.placeHolder}
            />
        </fieldset>
    );    
};


export default TextInput;