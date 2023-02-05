import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Link from 'next/link'

import Layout from '../../components/Layout'
import Gallery from '../../components/Gallery'
import Member from '../../components/Member'


export default function Artist({ data }) {
    const [artistData, setArtistData] = useState({})
    const [members, setMembers] = useState([])

    useEffect(() => {
        const getData = async () => {
            setArtistData(data)
            setMembers(data.members)
        };
        getData();
    }, [])


    return (
        <Layout>
            <div className="w-full md:w-auto mt-10">
                <div className='padding-5 m-5 px-32'>
                    <div className="w-full bg-black px-3 py-3 text-white mb-4 content-center items-center">
                        <h1 className='text-2xl font-bold'>
                            {artistData.name}
                        </h1>
                    </div>
                    {artistData.realname && (
                    <div className="w-full bg-gray-200 px-3 py-3 text-black mb-4 content-center items-center">
                        <h2>Real Name: {artistData.realname}</h2>
                    </div>
                    )}

                    <div className='mb-5 flex text-justify'
                        dangerouslySetInnerHTML={{ __html: artistData.profile }}></div>
                    <div className='mb-5 w-full'>
                        <h2 className='mb-2 font-bold'>More Information:</h2>
                        <ul>
                            {
                                data.urls?.map(url => {
                                    return <li className='mb-1'><Link href={url}>{url}</Link></li>
                                })
                            }
                        </ul>
                    </div>
                    <div className='mb-5 w-full'>
                        <h2 className='mb-2 font-bold'>Name Variation:</h2>
                        <div className='grid grid-cols-4'>
                            {
                                data.namevariations?.map((name) => {
                                    return <span className='mb-1'>{name}</span>
                                })
                            }
                        </div>
                    </div>
                    {data.members && (
                    <div className='mb-5 w-full'>
                        <h2 className='font-bold'>Members:</h2>
                        <div className='grid grid-cols-4'>
                            {data.members?.map((m) => {
                                return <Member
                                    key={m.id}
                                    id={m.id}
                                    name={m.name}
                                    thumbnail_url={m?.thumbnail_url}
                                />
                            })}
                        </div>
                    </div>
                    )}
                </div>
                <div>
                    <Gallery images={artistData.images} />
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const artistId = context.query.index
    const response = await fetch(process.env.discogs_api + "/artists/" + artistId, process.env.discogs_api_headers)
    const data = await response.json();

    return {
        props: { data }
    }
}