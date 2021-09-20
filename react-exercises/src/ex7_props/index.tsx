import React from "react";

interface Props {
    name: string
}

// const Ex7 = (props: Props) => {
//     return <h1>{props.name}</h1>
// }

class Ex7 extends React.Component<Props> {
    render() {
        return <h1>{this.props.name}</h1>  
    }
}

export { Ex7 }