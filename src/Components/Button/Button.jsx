import "./Button.css";

export default function Button( { children, onClick, isActive } ) {
    return (
        <button 
            className={isActive ? "button selected" : "button"}
            onClick={onClick}
        >
            {children}
        </button>
    )
}