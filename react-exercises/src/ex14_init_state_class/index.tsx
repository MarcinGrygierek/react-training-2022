import React from "react"

interface Props {
    defaultName: string;
}

interface State {
    name: string
}

class Ex14 extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            name: props.defaultName
        }
    }

    render() {
        const {name} = this.state;
        return <h1>{name}</h1>
    }
}

export {Ex14}