import { createGlobalStyle } from "styled-components";
import { fuentePrincipal, colores } from "./components/UI/variables";

const GlobalStyled = createGlobalStyle`
    html {
        /* font-size: 62.5%; */
        box-sizing: border-box;
    }
    *,*::before, *::after {
        box-sizing: inherit;
    }
    body {
        /* font-size: 1.6rem; */
        font-family: ${fuentePrincipal};
        font-weight: 300;
        line-height: normal;
    }
    [class*="contenedor"] {
        max-width: 90%;
        margin: 0 auto;
    }

    .logo {
        will-change: filter;
        transition: filter 300ms;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }

    .hero {
        position: relative;
    }
    .hero::after {
        content: "";
        background: linear-gradient(to bottom, rgba(0, 18, 51, 0.56) 0%, rgb(0 0 0 / 0.8) 100% );
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .bg-color {
        background: linear-gradient(to bottom, ${colores.blackDark} 0%, ${colores.blackDark} 100%);
    }

    @media (min-width: 768px) {
        .bg-color {
            background: linear-gradient(to bottom, transparent 0rem, ${colores.blackDark} 7.5rem , ${colores.blackDark} 100%);
        }
    }
    
    @media (min-width: 768px) {
        .posicionar:first-of-type .posicionar-video > div:nth-child(1) {
            position: absolute;
            top: -22rem;
            z-index: 100;
            right: 0;
        }
    }

    .posicionar:first-of-type > .posiciona-div,
    .posicionar:first-of-type h2 {
        margin-top: 0;
    }

    @media (min-width: 768px) {
        .subir-margin {
            margin-top: -8rem;
        }
        .posicionar:first-of-type > .posiciona-div {
            position: absolute;
            top: -22rem;
        }
        .posicionar:first-of-type > .posiciona-div > p {
            display: none;
        }
    }
        
    .tabla-categorias {
        border-collapse: collapse;
        margin-top: 3rem;
        width: 100%;
        color: ${colores.grayLight};
        border: 2px solid ${colores.primary} ;
    }
    
    .tabla-categorias th {
        border: 2px solid ${colores.primary};
        font-weight: normal;
        padding: 10px 1rem;
        text-align: left;
    }

    .tabla-categorias td {
        font-weight: 300;
        border-top: 2px solid ${colores.black};
        border-right: 2px solid ${colores.black};
        padding: 10px 1rem;
    }
    .tabla-categorias td:last-of-type {
        border-right: none;
    }
    

    /* @media (prefers-reduced-motion: no-preference) {
        a:nth-of-type(2) .logo {
        animation: logo-spin infinite 20s linear;
        }
    } */
`;

export default GlobalStyled;