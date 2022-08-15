import Head from 'next/head'
import Navbar from "../components/navbar/Navbar";


const Home = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description"
              content="My name's Seyha Vorn. I’m a front-end web developer "/>
        <link rel="icon" href="/fav.png"/>
      </Head>
      <Navbar/>
    </div>
  )
}

export default Home;