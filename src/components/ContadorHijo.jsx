import { memo } from "react";

function ContadorHijo(){
    console.log("hijo contador")
    return(
    <div style={{
        border:"thin solid #000",
        margin: "1rem"
    }}>
        <h2>Contador Hijo</h2>
    </div>
    );
}

export default memo(ContadorHijo)