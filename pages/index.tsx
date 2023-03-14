import Head from "next/head";
import Layout from '../components/layout';

import Mounting from "./Mounting";
import Updating from "./Updating";
import Unmounting from "./Unmounting";

import indexStyle from '../styles/index.module.scss';

function HomePage() {
    return (
        <Layout>
            <Head>
                <title>Class Component 生命週期</title>
            </Head>
            <div>
                <h1 className={indexStyle.h1}>Class Component 生命週期</h1>
                <p>https://reactjs.org/docs/react-component.html</p>
                <p>React的Component生命週期分為三個階段：Mounting, Updating 和 Unmounting。</p>
                <p>Mount 顧名思義是要將 Component 給掛到 DOM 上面，所以說如果 DOM 裡面如果不存在這個 component，肯定會執行 Mount 的流程。</p>
                <p>Updating 是指將 Component 進行更新，例如原本 DOM 上面已經存在某個 component，如果 setState 被觸發了，那麼會走 Updating 的流程。</p>
                <p>Unmount 是指從 DOM 上面拿掉 component，所以說在 component 被 unmount 之後，如果想要再讓它出現，必須走 Mount 的流程。</p>

                <p>官方圖片</p>
                <img className={indexStyle.img_size} src="https://i2.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png?ssl=1" alt="React Component Life Cycle" />

                <p>下面將會介紹三個階段的生命週期，並且介紹每個階段的生命週期函數。</p>
            </div>
            <div>
                <h2>詳細介紹</h2>
            </div>          
            <Mounting />
            <Updating />
            <Unmounting />

            <p>看完了Class Component的生命週期，接下來我們來看看Function Component的生命週期。</p>
            <a href="https://bobo100.github.io/React-Function-Component-LifeCycle/">點我前往 學習 Function Component生命週期</a>
        </Layout>
    )
}

export default HomePage