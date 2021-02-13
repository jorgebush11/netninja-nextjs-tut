import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function NotFound() {
	const router = useRouter()

	useEffect(() => {
		console.log("404 mounted")
		setTimeout(() => {
			//router.go(-1)
			router.push("/")
		}, 3000)
	}, [])

	return (
		<div className="not-found">
			<h1>Ops...</h1>
			<h2>That page cannot be found</h2>
			<Link href="/">
				<a>Go Back</a>
			</Link>
		</div>
	)
}
