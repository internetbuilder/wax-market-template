import { useRouter } from 'next/router'

export default function Post() {
    const router = useRouter()
    const { id } = router.query
    return <text>
    <br /><br />
    Hello {id}<br />
    </text>
}