import Link from "next/link";
import Head from "next/head";
import Layout from '../components/layout';
import index from "../styles/index.module.scss";


function HomePage() {
    return (
        <Layout>
            <Head>
                <title>Class Component 生命週期</title>
            </Head>
            <div>
                <h1>Class Component 生命週期</h1>
            </div>
        </Layout>
    )
}

export default HomePage