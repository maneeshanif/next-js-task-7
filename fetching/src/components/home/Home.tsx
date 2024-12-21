import Link from 'next/link'

const Home = () => {
  return (
    <div>
      this is a home page
      <ul>
        <Link href={"/clientfetch"}> <li>client fetch</li></Link>
        <Link href={"/serverfetch"}> <li>server fetch</li></Link>
      </ul>
   
    </div>
  )
}

export default Home
