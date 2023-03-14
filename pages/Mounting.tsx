import React, { useState } from 'react';
import ClassComponentMounting from '../components/ClassComponentMounting';

import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import indexStyle from '../styles/index.module.scss';

export default function Mounting() {

    const [isMounted, setIsMounted] = useState(false);

    const handleClick = () => {
        setIsMounted((prevState) => !prevState);
    }

    const codeString = `import React from 'react';
type Props = {
    title: string;
}
type State = {
    count: number;
}
class ClassComponentMounting extends React.Component<Props, State> {
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

export default ClassComponentMounting;`;

    return (
        <div>
            <h1 className={indexStyle.h1}>Mounting：React 將一個 DOM 元素插入到頁面上</h1>
            <p>首先是 Mounting 階段，Mounting 階段的生命週期函數有以下幾個:</p>
            <ul>
                <li>constructor</li>
                <li>static getDerivedStateFromProps</li>
                <li>render</li>
                <li>componentDidMount</li>
            </ul>
            <p>下面將會介紹這些函數的用途。</p>
            <h2>constructor</h2>
            <p>constructor 是一個特殊的函數，它會在 component 建立的時候被呼叫，而且只會被呼叫一次。</p>
            <p>constructor 的主要用途是用來初始化 state，或者是綁定函數的 this。</p>
            <p>如下面的程式碼：</p>

            <Prism language="typescript" style={vscDarkPlus}>
                {`class MyComponent extends React.Component {
   constructor(props) {
      super(props);
      // state 可以用 props 來初始化，用來儲存一些 component 的狀態
      this.state = {counter: 0};
   }
}`}
            </Prism>

            <p>這個例子中，constructor 會將 state 初始化為 {`{counter: 0}`}。</p>
            <h2>static getDerivedStateFromProps</h2>
            <p>static getDerivedStateFromProps 是一個靜態函數，它會在 component 建立的時候被呼叫，並且在每次更新的時候也會被呼叫。</p>
            <p>static getDerivedStateFromProps 的主要用途是用來更新 state，它會在 render 之前被呼叫，並且在初始 render 和每次更新之前都會被呼叫。</p>
            <p>它會接收兩個參數，第一個參數是 props，第二個參數是 state，並且必須回傳一個物件，這個物件會被合併到 state 中。</p>
            <p>如下面的程式碼：</p>

            <Prism language="typescript" style={vscDarkPlus}>
                {`class MyComponent extends React.Component {
        static getDerivedStateFromProps(props, state) {
        // ...
    }
}`}
            </Prism>

            <p>這個例子中，static getDerivedStateFromProps 會將 props 的值合併到 state 中。</p>
            <h2>render</h2>
            <p>render 是一個必須要實作的函數，它會在 component 建立的時候被呼叫，並且在每次更新的時候也會被呼叫。</p>
            <p>render 的主要用途是用來渲染 component，它會回傳一個 React element，這個 element 會被用來更新 DOM。</p>
            <p>如下面的程式碼：</p>

            <Prism language="typescript" style={vscDarkPlus}>
                {`class MyComponent extends React.Component {
  render() {
    return <div>Hello, World!</div>;
  }
}`}
            </Prism>

            <p>這個例子中，render 會回傳一個 div element，裡面的文字是 Hello, World!。</p>
            <h2>componentDidMount</h2>
            <p>componentDidMount 是一個函數，它會在 component 建立的時候被呼叫，並且只會被呼叫一次。</p>
            <p>componentDidMount 的主要用途是用來執行一些副作用，例如：發送 AJAX 請求、訂閱事件、設定計時器等等。</p>
            <p>如下面的程式碼：</p>

            <Prism language="typescript" style={vscDarkPlus}>
                {`class MyComponent extends React.Component {
  componentDidMount() {
// network request/ 真實DOM 操作/ 啟動計時器
  }
  render() {
    return <div>Hello, World!</div>;
  }
}
`}
            </Prism>

            <h2>那我們來實際看一次吧</h2>
            <p>下面的程式碼是一個 Class Component，它會在建立的時候呼叫 constructor、static getDerivedStateFromProps、render、componentDidMount 這四個函數。</p>
            <p>而且，每次按下按鈕的時候，都會呼叫 static getDerivedStateFromProps、render 這兩個函數。</p>
            <p>你可以打開 console 觀察一下，看看這些函數是什麼時候被呼叫的。</p>
            <p>點集button來把ClassComponentMounting渲染到DOM上</p>
            <button onClick={handleClick}>{isMounted ? 'Unmount' : 'Mount'} ClassComponentMounting</button>
            {isMounted && <ClassComponentMounting title='ClassComponentMounting' />}

            <p>你可以複製下面的程式碼，自己試試看喔
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