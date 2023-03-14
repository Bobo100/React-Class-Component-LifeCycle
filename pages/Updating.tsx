import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Updating() {
    return (
        <div>
            <h1>Updating：React 將一個 DOM 元素更新到頁面上</h1>
            <p>接下來是 Updating 階段，Updating 階段的生命週期函數有以下幾個:</p>
            <ul>
                <li>static getDerivedStateFromProps</li>
                <li>shouldComponentUpdate</li>
                <li>render</li>
                <li>getSnapshotBeforeUpdate</li>
                <li>componentDidUpdate</li>
            </ul>
            <p>下面將會介紹這些函數的用途。</p>
            <h2>static getDerivedStateFromProps</h2>
            <p>static getDerivedStateFromProps 是一個靜態函數，它會在 component 建立的時候被呼叫，並且在每次更新的時候也會被呼叫。</p>
            <p>static getDerivedStateFromProps 的主要用途是用來更新 state，它會在 render 之前被呼叫，並且在初始 render 和每次更新之前都會被呼叫。</p>
            <p>它會接收兩個參數，第一個參數是 props，第二個參數是 state，並且需要回傳一個物件，這個物件會被合併到 state 中。</p>
            <p>static getDerivedStateFromProps 會在 render 之前被呼叫，所以它不會造成 re-render，但是如果它回傳了一個物件，這個物件會被合併到 state 中，所以會造成 re-render。</p>
            <p>如下面的程式碼:</p>






            <h2>那我們來實際看一次吧!</h2>
            <p>下面的程式碼是一個 Class Component，它會在每次更新的時候呼叫 static getDerivedStateFromProps，並且在呼叫完 static getDerivedStateFromProps 之後，會將回傳的物件合併到 state 中，所以會造成 re-render。</p>
            <p>當我們點擊按鈕的時候，會將 count 的值加一，然後將 count 的值設定到 state 中，所以會造成 re-render。</p>

        </div>
    )
}