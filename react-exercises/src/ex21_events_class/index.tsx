import React from "react";

interface Props {
    
}

interface State {
    counter: number;
}

class Ex21 extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
    }

    render() {
        const {counter} = this.state;
        return <button onClick={this.handleClick}>{counter}</button>
    }
}

export {Ex21}