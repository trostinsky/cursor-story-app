import React, {Component} from "react";
import Timer from "./timer.view";
// functional(Fool) - only props
// class(Smart) - state and lifecycle

export default class TimerController extends Component {
    state = {
        time: this.props.time, // seconds,
        pause: false
    }

    intervalStep = 100

    lastTime = this.props.time

    componentDidMount(){
        this.initInterval();
    }

    shouldComponentUpdate(nextProps, nextState){
        const {step = this.intervalStep / 1000} = this.props;
        if((this.lastTime - nextState.time) >= step){
            this.lastTime = nextState.time;
            return true;
        } else {
            return false;
        }
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    initInterval(){
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            if(this.state.time <= 0){
                return clearInterval(this.interval);
            }
            if(!this.state.pause){
                this.tick();
            }
        }, this.intervalStep);
    }

    tick(){
        this.setState((prevState) => {
            return {
                time: prevState.time - (this.intervalStep / 1000)
            }
        })
    }

    togglePause = () => {
        this.setState({
            pause: !this.state.pause
        })
    }

    render() {
        const seconds = ("0" + Math.round(this.state.time) % 60);
        const minutes = ("0" + Math.floor(this.state.time / 60));
        return (
            <Timer.Wrapper>
                <Timer.Time>
                    {minutes.slice(minutes.length - 2, minutes.length)}
                    :{seconds.slice(seconds.length - 2, seconds.length)}
                </Timer.Time>
                <Timer.Line
                    intervalStep={this.intervalStep}
                    width={(this.state.time / this.props.time) * 100}
                />
                {/*START || PAUSE*/}
                <Timer.Button
                    src={
                        this.state.pause ? "/images/play.svg" : "/images/pause.svg"
                    }
                    onClick={this.togglePause}
                />
            </Timer.Wrapper>
        )
    }
    // refs react
}