interface GalleryProps {
    images: any
}

export default function Gallery(props: GalleryProps) {

    function getImagesDiv() {
        return props.images?.map((img, i) => {
            return (
                <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                            src={img.uri} />
                    </div>
                </div>
            )
        }
        )
    }

    return (
        <>
            <section className="overflow-hidden text-gray-700 ">
                <div className="container px-2 py-2 mx-auto lg:pt-12 lg:px-32">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        {getImagesDiv()}
                    </div>
                </div>
            </section>
        </>
    )
}