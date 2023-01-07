import internal from 'stream'
import Image from './Image'

interface LineProps{
    id: number
    name: string
    image: string

}

export default function Line(props: LineProps) {
    return (
        <div className="border p-10 m-5 rounded flex">
            <Image url={props.image} text={props.name}/>
            <span>{props.name}</span>
        </div>
    )
}