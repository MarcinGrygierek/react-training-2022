import React from "react";

interface Props {
    name: string
}

// const Ex8 = (props: Props) => {
//     const {name} = props;
//     return <h1>{name}</h1>
// }


// const Ex8 = ({name}: Props) => {
//     return <h1>{name}</h1>
// }

class Ex8 extends React.Component<Props> {
    render() {
        const {name} = this.props;
        return <h1>{name}</h1>  
    }
}

export { Ex8 }