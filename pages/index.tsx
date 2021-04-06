import Link from 'next/link'
import Layout from '../components/Layout'
import {getPublicConfiguration} from "../utils/config";

const IndexPage = () => {
    console.log(`getPublicConfiguration().backendEndpoint = ${getPublicConfiguration().backendEndpoint}`);
    console.log(`process.env.NEXT_PUBLIC_BACKEND_ENDPOINT = ${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}`);
    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <h1>Hello Next.js 👋</h1>
            <p>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </p>
        </Layout>
    );
}

export const getServerSideProps = () => {
    console.log(`getPublicConfiguration() = ${getPublicConfiguration().backendEndpoint}`)
    return {
        props: {

        }
    }
}
export default IndexPage
