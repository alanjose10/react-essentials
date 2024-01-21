
const TabButton = ({ children, onSelect, buttonIsActive}) => {
    return (
        <l1>
            <button onClick={onSelect} className={ buttonIsActive ? "active" : undefined } value={children}>{children}</button>
        </l1>
    )
};

export default TabButton;
