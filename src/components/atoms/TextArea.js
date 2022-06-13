// Importing stylesheet
import './atoms.css';


// Component that is being exported
const TextArea = (props) => {
    return(
        <fieldset>
            <label>
                {props.label}
            </label>
            <textarea
                onChange={props.handleChange}
                value={props.value}
                placeholder={props.placeHolder}
            >
            </textarea>            
        </fieldset>
    );
};


export default TextArea;