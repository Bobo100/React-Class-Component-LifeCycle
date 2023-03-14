// 用來介紹 Class Component Life Cycle 的頁面
import React from 'react';
type Props = {
    title: string;
}
type State = {
    count: number;
}
class ClassComponentLifeCycle extends React.Component<Props, State> {
    // 建構階段
    constructor(props: Props) {
        console.log('constructor');
        super(props);
        this.state = {
            count: 0,
        }
    }
    static getDerivedStateFromProps(props: Props, state: State) {
        console.log('getDerivedStateFromProps');
        return null;
    }
    componentDidMount() {
        console.log('componentDidMount');
    }

    // 更新階段
    // 由於React v16.3版本中 componentWillUpdate 已經被棄用 所以要改用別的寫法 如下面的 shouldComponentUpdate 和 getSnapshotBeforeUpdate
    // componentShouldUpdatte() {
    //     console.log('componentShouldUpdatte');
    // }
    // componentWillUpdate() {
    //     console.log('componentWillUpdate');
    // }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('componentShouldUpdate');
        return true; // or false based on comparison of nextProps and this.props and/or nextState and this.state
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    // 卸載階段
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    // 渲染階段
    render() {
        console.log('render');
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

export default ClassComponentLifeCycle;