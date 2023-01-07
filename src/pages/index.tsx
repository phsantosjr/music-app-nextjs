import { Inter } from '@next/font/google'
import Layout from '../components/Layout'
import SearchBar from '../components/SearchBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout titulo="Home">
        <div className='relative px-6 lg:px-8'>
          <div className='mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40'>
            <SearchBar />
          </div>
        </div>           
      </Layout>
    </>
  )
}
