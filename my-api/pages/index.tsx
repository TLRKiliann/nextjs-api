import Link from 'next/link'

const MainFunction = () => {
    return (
        <div>
            <Link href={'/comments'}>
                Go to the comments !
            </Link>
        </div>
    )
}
export default MainFunction