interface CarouselProps {
    images: any
}

export default function Carousel(props: CarouselProps) {

    function getImagesDiv() {
        return props.images?.map((img, i) => {
            return (
                <div className="carousel-item relative float-left w-full h-80 active" key={i}>
                    <img
                        src={img.uri}
                        className="block w-full h-90"
                        alt={img.name}
                        max-height="100px"
                    />
                </div>
            )
        })
    }

    return (
        <>
            <div id="carouselExampleControls"
                className="carousel slide relative mb-5"
                data-bs-ride="carousel">
                <div className="carousel-inner relative w-full overflow-hidden">
                    {getImagesDiv()}
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )

}