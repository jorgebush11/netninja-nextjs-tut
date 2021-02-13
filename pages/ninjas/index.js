import styles from "../../styles/Home.module.scss"
import Link from "next/link"

export const getStaticProps = async () => {
	const resp = await fetch("https://jsonplaceholder.typicode.com/users")
	const data = await resp.json()

	return {
		props: { ninjas: data },
	}
}

export default function Ninjas({ ninjas }) {
	return (
		<div>
			<h1>All Ninjas List Component</h1>
			{ninjas &&
				ninjas.map((ninja) => (
					<Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
						<a className={styles.ninjaLink}>{ninja.name}</a>
					</Link>
				))}
		</div>
	)
}
