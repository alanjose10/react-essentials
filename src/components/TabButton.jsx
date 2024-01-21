
const TabButton = ({ children, buttonIsActive, ...props }) => {
    return (
        <li>
            <button className={buttonIsActive ? "active" : undefined} value={children} {...props}>{children}</button>
        </li>
    )
}

export default TabButton;
