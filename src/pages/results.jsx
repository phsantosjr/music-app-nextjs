import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Card from '../components/results/Card'
import Layout from '../components/Layout'
import Link from 'next/link'
import SearchBar from '../components/SearchBar'



export default function Results() {
    const router = useRouter()
    const q = router.query.q
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    const defaultOptions = {
        headers: {
            'Authorization': 'Discogs token=' + process.env.NEXT_PUBLIC_DISCOGS_PERSONAL_TOKEN,
        },
    };

    useEffect(() => {
        fetch(process.env.discogs_api + "/database/search?type=artist&q=" + q, defaultOptions)
            .then(res => res.json())
            .then(data => {
                setData(data.results.map(result => {
                    return (
                        <Link href={`/artist/${result.id}`} key={result.id}>
                            <Card id={result.id} name={result.title} image={result.cover_image} />
                        </Link>
                    )
                }))
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>

    return (
        <>
            <Layout>
                <div class="w-full md:w-auto mt-10">
                    <SearchBar />
                    <div className='padding-5 m-5'>
                        <span>Resultado da busca por: {q} </span>
                    </div>
                    <div className='flex flex-wrap m-2 p-2 justify-center'>
                        {data}
                    </div>
                </div>
            </Layout>
        </>
    )
}