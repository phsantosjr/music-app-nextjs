interface CardProps {
    id: number
    name: string
    image: string
}
export default function Card(props: CardProps) {
    return (
        <div className="bg-gray-200 w-full p-6 flex flex-col items-center justify-center rounded">
            <div className="bg-white rounded shadow-lg transform duration-200 easy-in-out ">
                <div className="h-2/4 sm:h-64 overflow-hidden">
                    <img className="rounded-lg h-30 w-80"
                        src={props.image ? props.image: '/band.jpg'}
                        alt={props.name} 
                        />
                </div>
                <div className="flex justify-start px-5 -mt-12">
                    <span className="block relative h-32 w-32">
                        <img alt={props.name}
                            src={props.image ? props.image: '/band.jpg'}
                            className="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1" /> 
                    </span>
                </div>
                <div className="">
                    <div className="px-4 mb-2">
                        <h2 className="text-3xl font-bold dark:text-gray-300">{props.name}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}