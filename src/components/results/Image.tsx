import Image from 'next/image'

interface ImageArtistProps {
    url: string
    text: string
}

export default function ImageArtist(props: ImageArtistProps) {
    return (
        <Image src={props.url} alt={props.text} width={100} height={100}/>
    )
}