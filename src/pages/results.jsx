import { useRouter } from 'next/router'
import Card from '../components/results/Card'
import Layout from '../components/Layout'
import Link from 'next/link'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import { useEffect, useState } from 'react'


export async function getServerSideProps(context) {
    const q = context.query.q
    const response = await fetch(process.env.discogs_api + "/database/search?type=artist&q=" + q, process.env.discogs_api_headers);
    const data = await response.json();

    return {
      props: { data, q }
    }
  }

export default function Results({ data, q }) {   
    const [results, setResults] = useState([])

    useEffect(() => {
        const getData = async () => {
            setResults(data.results?.map(result => {
                return (
                    <Link href={`/artist/${result.id}`} key={result.id}>
                        <Card id={result.id} name={result.title} image={result.cover_image} />
                    </Link>
                )
            })
            )
        };
        getData();   
    }, [])
    
    return (
        <>
            <Layout>
                <div className=''s="w-full md:w-auto mt-10">
                    <SearchBar />
                    <div className='padding-5 m-5'>
                        <span>Resultado da busca por: {q} </span>
                    </div>
                    <div className='flex flex-wrap m-2 p-2 justify-center'>
                        {results}
                    </div>
                </div>
            </Layout>
        </>
    )
}