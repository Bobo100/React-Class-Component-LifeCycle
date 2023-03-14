// 用來介紹 Class Component Unmounting 的頁面
import React from 'react';
type Props = {
    title: string;
}
type State = {
    count: number;
}
class ClassComponentUnmounting extends React.Component<Props, State> {
    constructor(props: Props) {
        // console.log('constructor');
        super(props);
        this.state = {
            count: 0,
        }
    }

    // static getDerivedStateFromProps(props: Props, state: State) {
    //     console.log('getDerivedStateFromProps');
    //     return null;
    // }
    // componentDidMount() {
    //     console.log('componentDidMount');
    // }

    // // 更新階段
    // componentShouldUpdatte() {
    //     console.log('componentShouldUpdatte');
    // }
    // componentWillUpdate() {
    //     console.log('componentWillUpdate');
    // }
    // componentDidUpdate() {
    //     console.log('componentDidUpdate');
    // }

    // 卸載階段
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        // console.log('render');
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
    handleClick = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }
}

export default ClassComponentUnmounting;