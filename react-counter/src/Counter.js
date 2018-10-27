
import React, {Component} from "react";
import Display from './Display';
import ButtonsPanel from './ButtonsPanel';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: 0,
        }
    }

    incrementOrDecrementCounter = (increment) => {
        
        if (increment) {
            this.setState( (prevState) => {
                return({
                    counterValue: prevState.counterValue + 1
                })
            });
        } else {
            this.setState( (prevState) => {
                return({
                    counterValue: prevState.counterValue - 1
                })
            });
        }

    }

    render() {
        return(
            <div className="counter">
                <Display currentValue={this.state.counterValue}/>
                <ButtonsPanel updateCounter={this.incrementOrDecrementCounter}/>
            </div>
        )
    }
}

export default Counter;