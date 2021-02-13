import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"
import styles from "../styles/Home.module.scss"

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>NextJx NetNinja</title>
			</Head>
			<div className={styles.container}>
				<Navbar />
				{children}
				<Footer />
			</div>
		</>
	)
}
