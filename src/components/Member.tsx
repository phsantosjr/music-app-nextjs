interface MemberProps {
    name: string
    active: boolean
    thumbnail: string
}

export default function Member(props: MemberProps) {
    return (
        <div className="flex flex-wrap p-1 md:p-2">
            <img alt="gallery" 
                className="block object-cover object-center w-20 h-20 rounded-lg"
                src={props.thumbnail} />
        </div>
    )
}