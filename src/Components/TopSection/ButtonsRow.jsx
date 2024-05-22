import Button from 'react-bootstrap/Button';


function ButtonsRow() {
return (
    <div>
        <div>
            <span style={{ fontSize: "2em"}}>
                <button type="button" class="btn btn-primary" style={{ marginRight: "10px", width: "100px" }}>Buy</button>
                <button type="button" class="btn btn-primary" style={{ marginRight: "10px", width: "100px" }}>Send</button>
                <button type="button" class="btn btn-primary" style={{ width: "100px" }}>Convert</button>
            </span>
        </div>
    </div>
);
}


export default ButtonsRow;