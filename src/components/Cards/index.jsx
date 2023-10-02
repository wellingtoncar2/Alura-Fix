import VideoCard from "../VideoCard";

const Cards = ({ categoria, videos }) => {

  const { color, nombre } = categoria;

  return (
    <div className=" relative contenedor posicionar">
      <div className="posiciona-div md:flex md:items-center mb-5 md:mb-0">
        <h2
          className={`text-gray-200 text-center inline-block px-6 py-2 md:py-0 text-[22px] md:text-[60px] font-normal my-5 rounded-md`}
          style={{backgroundColor: color}}
        >
          {nombre}
        </h2>

        <p className="text-gray-200 md:inline-block md:ml-5">
          Formación {nombre} de Alura Latam
        </p>
      </div>

      {/* <BsFillArrowLeftCircleFill className="absolute text-gray-200 top-1/2 right-[-32px] translate-y-1/2 text-2xl w-[40px] h-[40px]" /> */}

      <div className="flex whitespace-nowrap gap-5 overflow-hidden md:justify-start posicionar-video ">
        {videos.map((video) => (
          <VideoCard link={video.link} key={video.id} />
        ))}
      </div>
      {/* <BsFillArrowRightCircleFill className="absolute text-gray-200 top-1/2 left-[-32px] translate-y-1/2 text-2xl w-[40px] h-[40px]" /> */}
    </div>
  );
}


export default Cards;