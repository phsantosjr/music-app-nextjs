import { useEffect, useState } from "react"

export default function useResults(){
    const [data, setData] = useState([])

    const defaultOptions = {
        headers: {
            'Authorization': 'Discogs token=' + process.env.NEXT_PUBLIC_DISCOGS_PERSONAL_TOKEN,
        },
    };

    async function getResults(q: string) {
        const response = await fetch(process.env.discogs_api + "/database/search?type=artist&q=" + q, defaultOptions);
        const data = await response.json();
        setData(data.results)
    }

    return {
        data,
        getResults
    }
    
}