import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import ClassComponentUpdating from '../components/ClassComponentUpdating';
import indexStyle from '../styles/index.module.scss';

export default function Updating() {
    const [isMounted, setIsMounted] = useState(false);

    const handleClick = () => {
        setIsMounted((prevState) => !prevState);
    }

    const codeString = `// 用來介紹 Class Component Updating 的頁面
import React from 'react';
type Props = {
    title: string;
}
type State = {
    count: number;
}
class ClassComponentUpdating extends React.Component<Props, State> {
    constructor(props: Props) {
        // console.log('constructor');
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
        // console.log('componentDidMount');
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

export default ClassComponentUpdating;`;

    return (
        <div>
            <h1 className={indexStyle.h1}>Updating：將一個 DOM 元素更新到頁面上</h1>
            <p>接下來是 Updating 階段，Updating 階段的生命週期函數有以下幾個：</p>
            <ul>
                <li>static getDerivedStateFromProps</li>
                <li>shouldComponentUpdate (以前叫做componentShouldUpdatte)</li>
                <li>render</li>
                <li>getSnapshotBeforeUpdate (以前叫做componentWillUpdate)</li>
                <li>componentDidUpdate</li>
            </ul>
            <p>下面將會介紹這些函數的用途。</p>
            <h2>static getDerivedStateFromProps</h2>
            <p>static getDerivedStateFromProps 是一個靜態函數，它會在 component 建立的時候被呼叫，並且在每次更新的時候也會被呼叫。</p>
            <p>static getDerivedStateFromProps 的主要用途是用來更新 state，它會在 render 之前被呼叫，並且在初始 render 和每次更新之前都會被呼叫。</p>
            <p>它會接收兩個參數，第一個參數是 props，第二個參數是 state，並且需要回傳一個物件，這個物件會被合併到 state 中。</p>
            <p>static getDerivedStateFromProps 會在 render 之前被呼叫，所以它不會造成 re-render，但是如果它回傳了一個物件，這個物件會被合併到 state 中，所以會造成 re-render。</p>
            <p>如下面的程式碼：</p>

            <Prism language="javascript" style={vscDarkPlus}>
                {``}
            </Prism>

            <h2>shouldComponentUpdate</h2>
            <p>shouldComponentUpdate 會在每次更新的時候被呼叫，它會接收兩個參數，第一個參數是 nextProps，第二個參數是 nextState，並且需要回傳一個布林值，如果回傳 true，則會繼續更新，如果回傳 false，則不會繼續更新。</p>
            <p>shouldComponentUpdate 會在 render 之前被呼叫，所以它不會造成 re-render，但是如果它回傳了 true，則會繼續更新，所以會造成 re-render。</p>
            <p>如下面的程式碼：</p>

            <Prism language="javascript" style={vscDarkPlus}>
                {``}
            </Prism>

            <h2>render</h2>
            <p>render 會在每次更新的時候被呼叫，它會回傳一個 React 元素，這個 React 元素會被 render 到頁面上。</p>
            <p>render 會在 shouldComponentUpdate 之後被呼叫，所以它不會造成 re-render，但是如果它回傳了一個 React 元素，這個 React 元素會被 render 到頁面上，所以會造成 re-render。</p>
            <p>如下面的程式碼：</p>

            <Prism language="javascript" style={vscDarkPlus}>
                {``}
            </Prism>

            <h2>getSnapshotBeforeUpdate</h2>
            <p>getSnapshotBeforeUpdate 會在每次更新的時候被呼叫，它會接收兩個參數，第一個參數是 prevProps，第二個參數是 prevState，並且需要回傳一個物件，這個物件會被傳入 componentDidUpdate 中的 snapshot 參數。</p>
            <p>getSnapshotBeforeUpdate 會在 render 之後被呼叫，所以它不會造成 re-render，但是如果它回傳了一個物件，這個物件會被傳入 componentDidUpdate 中的 snapshot 參數，所以會造成 re-render。</p>
            <p>如下面的程式碼：</p>

            <Prism language="javascript" style={vscDarkPlus}>
                {``}
            </Prism>

            <h2>componentDidUpdate</h2>
            <p>componentDidUpdate 會在每次更新的時候被呼叫，它會接收三個參數，第一個參數是 prevProps，第二個參數是 prevState，第三個參數是 snapshot。</p>
            <p>componentDidUpdate 會在 getSnapshotBeforeUpdate 之後被呼叫，所以它不會造成 re-render。</p>
            <p>如下面的程式碼：</p>

            <Prism language="javascript" style={vscDarkPlus}>
                {``}
            </Prism>

            <p>幫你整理一下，只有render階段會導致重新渲染</p>
            <p>在 shouldComponentUpdate (以前叫做componentShouldUpdatte) 和 getSnapshotBeforeUpdate （以前叫做 componentWillUpdate） 中返回特定的值可能會觸發重新渲染</p>

            <p>例如，在 shouldComponentUpdate 中返回 false 將會阻止組件的重新渲染，而在 getSnapshotBeforeUpdate 中返回非空值將會通知 React 執行更新操作。</p>

            <Prism language="javascript" style={vscDarkPlus}>
                {`
                 shouldComponentUpdate(nextProps, nextState) {
                    return nextProps.id !== this.props.id;
                }

                getSnapshotBeforeUpdate(prevProps, prevState) {                    
                    return null;
                }`}
            </Prism>


            <h2>那我們來實際看一次吧!</h2>
            <p>下面的程式碼是一個 Class Component，它會在每次更新的時候呼叫 static getDerivedStateFromProps，並且在呼叫完 static getDerivedStateFromProps 之後，會將回傳的物件合併到 state 中，所以會造成 re-render。</p>
            <p>當我們點擊按鈕的時候，會將 count 的值加一，然後將 count 的值設定到 state 中，所以會造成 re-render。</p>
            <p>你可以打開 console 觀察一下，看看這些函數是什麼時候被呼叫的。</p>
            <p>點擊button來把ClassComponentUpdating mount到DOM上</p>
            <button onClick={handleClick}>{isMounted ? 'Unmount' : 'Mount'} ClassComponentMounting</button>
            {isMounted && <ClassComponentUpdating title="ClassComponentUpdating" />}

            <p className='hightlight'>貼心提醒：如果你對觸發順序不清楚，可以回到最上面去看流程的圖片~</p>

            <p>你可以複製下面的程式碼，自己試試看喔！
                &nbsp;
                <CopyToClipboard text={codeString}>
                    <button>Copy</button>
                </CopyToClipboard>
            </p>

            <Prism language="typescript" style={vscDarkPlus}>
                {codeString}
            </Prism>


        </div>
    )
}