function ButtonRow() {
    return (
        <div>
            <div>
                <span style={{ fontSize: "2em"}}>{10}</span>
                <span style={{ fontSize: "0.7em", verticalAlign: "middle"}}>{"G1"}</span>
                <span style={{ fontSize: "0.7em", verticalAlign: "middle", marginLeft: 5}}>
          <ion-icon name="caret-down-outline"></ion-icon>
        </span>
            </div>

            <div>
                <span style={{ fontSize: "0.5em"}}>{"Updated 9 Minutes ago."}</span>
                <span style={{ fontSize: "0.5em", marginLeft: 5, color: "lightblue"}}>{"Refresh"}</span>
                <span style={{ fontSize: "0.5em", marginLeft: 5, color: "lightblue"}}>
          <ion-icon name="reload-outline"></ion-icon>
        </span>
            </div>

            <div>
                <span style={{ fontSize: "0.5em", color: "lightblue"}}>{"0x7a9B...Cf50"}</span>
                <span style={{ fontSize: "0.5em", marginLeft: 5, color: "lightblue"}}>
        <ion-icon name="copy-outline"></ion-icon>
        </span>
                <span style={{ fontSize: "0.5em", marginLeft: 5, color: "lightblue"}}>
        <ion-icon name="open-outline"></ion-icon>
        </span>
            </div>

        </div>
    );
}


export default ButtonRow;