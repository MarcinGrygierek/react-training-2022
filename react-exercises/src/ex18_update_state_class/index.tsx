import React from "react";

interface Props {}
interface State {
    counter: number;
}

class Ex18 extends React.Component<Props, State> {
    private interval: any;
    constructor(props: Props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            // this.setState({
            //     counter: this.state.counter + 1
            // })
            this.setState(prev => ({
                counter: prev.counter + 1
            }), () => {
                console.log(this.state.counter); // tutaj mamy pewność że odczytujemy aktualny stan
            })

        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const {counter} = this.state;
        return <h1>{counter}</h1>
    }
}

export {Ex18};