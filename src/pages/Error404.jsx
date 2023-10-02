import Header from "../components/Header";

const Error404 = () => {
  return (
    <div className="bg-blueDark h-[100vh]">
      <Header />

      <img
        className="w-full h-[87.5vh] block"
        src="/public/404.png"
        alt="404 page"
      />
    </div>
  );
}

export default Error404;