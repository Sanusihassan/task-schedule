export default function Row({ children, attr = "" }) {
    return (
        <div className={"row " + attr}>
            {children}
        </div>
    );
}