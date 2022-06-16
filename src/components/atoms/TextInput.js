// Importing stylesheet
import './atoms.css';


// Component that is being exported
const TextInput = (props) => {
    return(
        <fieldset>
            <input
                onChange={props.handleChange}
                value={props.value}
                placeholder={props.placeHolder}
                type={props.type ? props.type : 'text'}
            />
            <label className='input-label' >
                {props.label}
            </label>
        </fieldset>
    );    
};


export default TextInput;