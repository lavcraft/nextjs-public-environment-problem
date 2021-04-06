import Link from 'next/link'
import Layout from '../components/Layout'
import {getPublicConfiguration} from "../utils/config";

console.log(`getPublicConfiguration().backendEndpoint = ${getPublicConfiguration().backendEndpoint}`);
console.log(`process.env.NEXT_PUBLIC_BACKEND_ENDPOINT = ${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}`);

const AboutPage = () => {
    console.log(`getPublicConfiguration().backendEndpoint = ${getPublicConfiguration().backendEndpoint}`);
    console.log(`process.env.NEXT_PUBLIC_BACKEND_ENDPOINT = ${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}`);
    import.meta.url;
    return (
        <Layout title="About | Next.js + TypeScript Example">
            <h1>About</h1>
            <p>This is the about page</p>
            <p>
                <Link href="/">
                    <a>Go home</a>
                </Link>
            </p>
        </Layout>
    );
}

export default AboutPage
