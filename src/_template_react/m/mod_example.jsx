import React, {Component} from 'react';


export default class Example1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data1:'利民网活动',
            data2: this.props.prop2
        };
    }

    componentDidMount(){
        console.log('模块加载完');
    }

    render() {
        return (
            <div>
                <header>{this.state.data1}</header>
                <article>
                    <a href="javascript:void(0)" onClick={() => this.setState({
                        data2: this.state.data2 + this.props.prop2
                    })}>{this.state.data2}</a>
                </article>
            </div>
        );
    }
}