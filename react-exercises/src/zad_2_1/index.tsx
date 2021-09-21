import React from "react"
import { useState } from "react"

// Funkcyjnie
// interface Props {
//     defaultFirstName: string;
//     defaultLastName: string;
// }

// const Zad21 = ({defaultLastName, defaultFirstName}: Props) => {
//     const [lastName, setLastNaame] = useState<string>(defaultLastName);
//     const [firstName, setFirstName] = useState<string>(defaultFirstName);

//     return <h1>{firstName} {lastName}</h1>
// }

// Klasowo
interface Props {
    defaultFirstName: string;
    defaultLastName: string;
}

interface State {
    firstName: string;
    lastName: string;
}
class Zad21 extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            firstName: props.defaultFirstName,
            lastName: props.defaultLastName
        }
    }

    render() {
        const {firstName, lastName} = this.state;
        return <h1>{firstName} {lastName}</h1>
    }
}

export {Zad21}