// Importing stylesheet
import './atoms.css';


// Component being exported
const Button = (props) => {
    return (
        <button
            onClick={props.callback} 
        >
            {props.text}
        </button>
    );
};


export default Button;