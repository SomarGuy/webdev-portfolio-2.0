import Head from 'next/head'
import type { NextPage } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Diogo's Portfolio</title>
      </Head>


      <Header />
      {/* Hero */}
      <section id='hero'>
      <Hero />
      </section>
      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}

    </div>
  )
}

export default Home;
