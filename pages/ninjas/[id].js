import styles from "../../styles/Home.module.scss"

export const getStaticPaths = async () => {
	const resp = await fetch("https://jsonplaceholder.typicode.com/users")
	const data = await resp.json()

	const paths = data.map((ninja) => {
		return {
			params: { id: ninja.id.toString() },
		}
	})

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async (context) => {
	const id = context.params.id
	const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
	const data = await resp.json()

	return {
		props: { ninja: data },
	}
}

export default function Ninja({ ninja }) {
	const { name, email, website, phone, address } = ninja

	return (
		<div className={styles.ninja}>
			<h3>{name} </h3>
			<p>{email} </p>
			<p>{website}</p>
			<p>{phone}</p>
			<p>{address.city} </p>
			<p>{address.street} </p>
		</div>
	)
}
