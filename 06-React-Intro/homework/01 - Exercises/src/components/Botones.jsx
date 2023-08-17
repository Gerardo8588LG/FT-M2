import React from "react";

class Botones extends React.Component{
    constructor({alerts: {m1, m2}}){
        super({alerts: {m1, m2}})
    }

    render(){
        return(
        <div>
            <button onClick={() => alert(this.props.alerts.m1)}>Módulo 1</button>
            <button onClick={() => alert(this.props.alerts.m2)}>Módulo 2</button>
        </div>
        )
    }
    
}

export default Botones;