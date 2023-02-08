export default function Column({ children, attr = "" }) {
    return (
        <div className={`column${attr ? ` ${attr}` : ""}`}>
            {children}
        </div>
    );
}