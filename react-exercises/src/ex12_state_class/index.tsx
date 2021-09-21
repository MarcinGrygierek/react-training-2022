import React from "react"

interface Props {}

interface State {
    name: string
}

class Ex12 extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            name: 'Marcin'
        }
    }

    render() {
        const {name} = this.state;
        return <h1>{name}</h1>
    }
}

export {Ex12}