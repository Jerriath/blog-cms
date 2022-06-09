// Importing stylesheet
import './atoms.css';


// Component that is being exported
const TextArea = (props) => {
    return(
        <fieldset>
            <label>

            </label>
            <textarea
                onChange={props.handleChange}
                value={props.value}
            >
            </textarea>            
        </fieldset>
    );
};


export default TextArea;