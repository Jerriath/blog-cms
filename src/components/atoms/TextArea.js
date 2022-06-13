// Importing stylesheet
import './atoms.css';


// Component that is being exported
const TextArea = (props) => {
    return(
        <fieldset>
            <textarea
                onChange={props.handleChange}
                value={props.value}
                placeholder={props.placeHolder}
                rows={7}
            >
            </textarea>  
            <label className='area-label' >
                {props.label}
            </label>          
        </fieldset>
    );
};


export default TextArea;