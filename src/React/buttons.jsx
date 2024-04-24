import PropTypes from "prop-types";

function Button(props) {
    return (
   <button className={props.class} onClick={props.onClick} >{props.name}</button> 
    )
}
Button.propTypes = {
    onClick: PropTypes.string,
    name: PropTypes.string,
    class: PropTypes.string
}
export {Button} 
