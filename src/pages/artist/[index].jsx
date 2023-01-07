import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import Layout from '../../components/Layout'
import Gallery from '../../components/Gallery'
import Member from '../../components/Member'



export default function Artist() {
    const router = useRouter()
    const artistId = router.query.index
    const [data, setData] = useState({})
    const [images, setImages] = useState([])
    const [isLoading, setLoading] = useState(false)

    const defaultOptions = {
        headers: {
            'Authorization': 'Discogs token=' + process.env.NEXT_PUBLIC_DISCOGS_PERSONAL_TOKEN,
        },
    };

    useEffect(() => {
        fetch(process.env.discogs_api + "/artists/" + artistId, defaultOptions)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setImages(data.images)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>

    return (
        <Layout>
            <div class="w-full md:w-auto mt-10">
                <div className='padding-5 m-5 px-32'>
                    <h1 className="text-ocean">{data.name}{data.realname}</h1>
                    <div>{data.profile}</div>
                    <div>
                        <h2>More Information:</h2>
                        <ul>
                            {data.urls?.map(url => { return <li>{url}</li> })}
                        </ul>
                    </div>
                    <div>
                        <h2>Members:</h2>

                        {data.members?.map(m => {
                            return <Member name={m.name} active={m.active} thumbnail={m.thumbnail_url} />
                        })}

                    </div>
                </div>
                <div>
                    <Gallery images={images} />
                </div>
            </div>
        </Layout>
    )
}