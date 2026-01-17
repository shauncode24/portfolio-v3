export default function Corners({ top, left, bottom, right }) {
    return (
        <div className="default corners" style={{ width: "10px", height: "10px", border: "1px solid white", position: "absolute", top: top, left: left, transform: "translate(-50%, -50%)" }}>

        </div>
    );
}
