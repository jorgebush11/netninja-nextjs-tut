import Layout from "../comps/Layout"
import "../styles/globals.scss"

export default function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
