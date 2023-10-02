import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import './App.css';

import GlobalStyled from './GlobalStyle';
import { Helmet } from 'react-helmet';
import { coloresCursos } from './components/UI/variables';

const {
  frontend,
  infra,
  backend,
  marketing,
  mobile,
  inovation,
  ux,
  dataScience,
} = coloresCursos;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NuevoVideo from './pages/NuevoVideo';
import NuevaCategoria from './pages/NuevaCategoria';
import Home from './pages/Home';
import Error404 from './pages/Error404';

function App() {
  
  const [mostrarBotonDescripcion, setMostrarBotonDescripcion] = useState(false);
  const [categorias, setCategorias] = useState([
    {
      id: uuidv4(),
      nombre: "Front End",
      color: frontend,
      descripcion: "Todos los videos que estoy usando para estudiar Back End",
      codigoSeguridad: "",
    },
    {
      id: uuidv4(),
      nombre: "Back End",
      color: backend,
      descripcion: "Todos los videos que estoy usando para estudiar Back End",
      codigoSeguridad: "",
    },
    {
      id: uuidv4(),
      nombre: "Mobile",
      color: mobile,
      descripcion:"Contenido que vengo estudiando sobre React Native y Flutter",
      codigoSeguridad: "",
    },
    {
      id: uuidv4(),
      nombre: "Infraestructura",
      color: infra,
      descripcion: "Todo lo que estoy aprendiendo sobre Docker y mucho más",
      codigoSeguridad: "",
    },
    {
      id: uuidv4(),
      nombre: "Data Science",
      color: dataScience,
      descripcion: "Cosas de React y Python que vengo aprendiendo",
      codigoSeguridad: "",
    },
    {
      id: uuidv4(),
      nombre: "Design & UX",
      color: ux,
      descripcion: "Herramientas y técniacas que estudio sobre UX y Design",
      codigoSeguridad: "",
    },
    {
      id: uuidv4(),
      nombre: "Marketing Digital",
      color: marketing,
      descripcion: "La forma de vender y monetizar mis ideas",
      codigoSeguridad: "",
    },
    {
      id: uuidv4(),
      nombre: "Innovación y Gestión",
      color: inovation,
      descripcion: "Como mantener el equipo feliz y mucho mas",
      codigoSeguridad: "",
    },
  ]);

  const [videos, setVideos] = useState([
    {
      title: "Cuando usar let, var y const",
      link: "https://www.youtube.com/watch?v=PztCEdIJITY",
      imagenVideo:
        "https://s3-alpha-sig.figma.com/img/17ef/6f4a/12b3502a7d7a91f629b08d1082a16d1d?Expires=1697414400&Signature=pKFWGfUl2sU3tBgGJfFer-2Ytiid99aXMmOPg1Ijz3J2CPPYn2Kcod8SBSMicivMy7z0FA0hTdRFhBBRwwKHKNd3febNNt3OuTMhX4IJNEH2b~0BVawx8k8azR916jySuPgaNhgt5BUJrUkJu0UjBzRcFwD-dK3Qz6VtyKmbEpJIU02sxcBP0j2quYgh7Lmfh~v~08oXU4F9nrxCm17Dl6FJkqSP5uEw9p5gzktiw5HsHe289MlQFe2OeD1hXU9xc6eJzDAISU8XnQBiNFvkSmLu83v9XxDKmGmW6nHwgWWIi8QCDtk8kuwb5OS53-uTHUgT0~qux8GfnShdfffXNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      categoria: "Front End",
      descripcion: "Como puedes usar let, var y const.",
      codigoSeguridad: "122112",
      id: uuidv4(),
    },
    {
      title: "¿Qué es JavaScript?",
      link: "https://www.youtube.com/watch?v=GJfOSoaXk4s",
      imagenVideo: "",
      categoria: "Front End",
      descripcion:
        "JavaScript: ¿Qué es y cómo se hizo este lenguaje que genera muchas discuciones  y debates.",
      codigoSeguridad: "212121",
      id: uuidv4(),
    },
    {
      title: "Equipo Front End",
      link: "https://www.youtube.com/watch?v=rpvrLaBQwgg",
      imagenVideo: "",
      categoria: "Front End",
      descripcion:
        "¿Estás empezando tus estudios de Programación? ¿Te interesa todo lo que es la creación de Páginas Web Desarrollo de Softwares? ¿O estás pensando en cambiar de carrera y entrar a la maravillosa area de tecnología?",
      codigoSeguridad: "",
      id: uuidv4(),
    },
    {
      title: "¿Cómo es un desarrollador Fron End utiliza el Figma?",
      link: "https://www.youtube.com/watch?v=UuAX5azcvDQ&t=4s",
      imagenVideo: "",
      categoria: "Front End",
      descripcion: "¿Cómo un desarrollador Front End utiliza el Figma? ",
      codigoSeguridad: "",
      id: uuidv4(),
    },
    {
      titulo: "Spring Framework. ¿Qué es ?",
      link: "https://www.youtube.com/watch?v=t-iqt1b2qqk",
      imagenVideo: "",
      categoria: "Back End",
      descripcion: "Que es Spring Framework",
      codigoSeguridad: "",
      id: uuidv4(),
    },
    {
      titulo: "¿Qué es SQL y NoSQL?",
      link: "https://www.youtube.com/watch?v=cLLKVd5CNLc",
      imagenVideo: "",
      categoria: "Back End",
      descripcion:
        "¿Cuáles son las diferencias entre una estructura de datos relacional (SQL) y una no relacional (NoSQL) y cuáles son las principales ventajas de cada una?",
      codigoSeguridad: "",
      id: uuidv4(),
    },
    {
      titulo: "Simplificando tu código en Java: Conoce los enum",
      link: "https://www.youtube.com/watch?v=EoPvlE85XAQ",
      imagenVideo: "",
      categoria: "Back End",
      descripcion:
        "¿Escribir muchas variables del tipo constantes en Java te parece un proceso tedioso y que genera muchas líneas de código? En este Alura+ la instructora Génesys Rondón nos enseña a simplificar esta tarea usando un tipo de dato especial llamado enum.",
      codigoSeguridad: "",
      id: uuidv4(),
    },
    {
      titulo: "¿Cuál es la diferencia entre Fron End y Back End?",
      link: "https://www.youtube.com/watch?v=R9uaBxgCkyA",
      imagenVideo: "",
      categoria: "Back End",
      descripcion: "¿Cuál es la diferencia entre Front End y Back End? ",
      codigoSeguridad: "",
      id: uuidv4(),
    },
    {
      titulo: "¿Qué son las Soft Skills?",
      link: "https://www.youtube.com/watch?v=vhwspfvI52k",
      imagenVideo: "",
      categoria: "Innovación y Gestión",
      descripcion:
        "¿Qué son las Softskills y por qué es tan importante desarrollarlas para posicionarse en el mercado laboral? En este video de Alura Tips, Pri Stuani nos habla de las habilidades más buscadas por las empresas en sus profesionales y cómo las Soft Skills te ayudan en el día a día.",
      codigoSeguridad: "",
      id: uuidv4(),
    },
    {
      titulo: "7 Soft Skills más deseadas por las empresas",
      link: "https://www.youtube.com/watch?v=YhR7Zp8NUzE",
      imagenVideo: "",
      categoria: "Innovación y Gestión",
      descripcion:
        "Seguro que ya escuchaste hablar sobre las Soft Skills, pero ¿sabes cuáles son las 7 más buscadas por las empresas?",
      codigoSeguridad: "",
      id: uuidv4(),
    },
    {
      titulo: "¿Qué son las metodologías ágiles?",
      link: "https://www.youtube.com/watch?v=6N3OkLCfK-0",
      imagenVideo: "",
      categoria: "Innovación y Gestión",
      descripcion:
        "En este video nuestra invitada, Andyara, nos explicará que són las muy conocidas hoy en día metodologias ágiles y nos comentará un poco sobre como aplicarlas y cuáles son los beneficios de utilizarlas en su equipo o empresa.",
      codigoSeguridad: "",
      id: uuidv4(),
    },
    {
      titulo: "¿Cómo ser un profesional en T? Conociendo al Tech Guide",
      link: "https://www.youtube.com/watch?v=0udk1vXmwkc",
      imagenVideo: "",
      categoria: "Innovación y Gestión",
      descripcion:
        "El término profesional en T es muy utilizado en los días de hoy, pero ¿sabes que quiere decir y cómo ser un profesional en T? En este video Christian Velasco, Head de Alura Latam, no ayudará a enteder sobre ese término y nos explicará como podemos convertirnos en un profesional en T, enseñándonos una herramienta muy válida para quienes quiere aprender más al respecto.",
      codigoSeguridad: "",
      id: uuidv4(),
    },
  ]);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setMostrarBotonDescripcion(true)
    }

    const manejaResize = () => {
      window.innerWidth >= 768 ? setMostrarBotonDescripcion(true) : setMostrarBotonDescripcion(false)
    }

    window.addEventListener('resize', manejaResize)

    return () => {
      window.removeEventListener('resize', manejaResize)
    }
  }, [])

  const actualizarVideos = (objVideos) => {
    setVideos([...videos, objVideos]);
  }

  const actualizarCategorias = (objCategorias) => {
    setCategorias([...categorias, objCategorias]);
  }

  return (
    <BrowserRouter>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <GlobalStyled />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              mostrarBotonDescripcion={mostrarBotonDescripcion}
              categorias={categorias}
              videos={videos}
            />
          }
        />
        <Route
          path="/nuevoVideo"
          element={
            <NuevoVideo
              categorias={categorias}
              actualizarVideos={actualizarVideos}
            />
          }
        />
        <Route
          path="/nuevaCategoria"
          element={
            <NuevaCategoria
              actualizarCategorias={actualizarCategorias}
              categorias={categorias}
            />
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
