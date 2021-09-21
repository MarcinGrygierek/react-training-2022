import React from "react";

interface Props {
    name: string;
}

class Ex16 extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        console.log('Constructor')
    }

    componentDidMount() {
        console.log('Mount');
    }

    componentDidUpdate() {
        console.log('Updated');
    }

    componentWillUnmount() {
        console.log('Will unmount');
    }

    render() {
        const {name} = this.props;
        console.log('Render');
        return <h1>{name}</h1>
    }
}

export { Ex16}