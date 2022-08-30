import React from "react";
import Carousel from "./../components/carousel/Carousel";
import "./Layout.css";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";

function Layout() {
  return (
    <div className="container">
      {/* logo, navbar y carrito de compras */}
      <header className="header"><Navbar/></header>
      <main className="main">
        {/* Hero */}
        <section className="hero"><Banner/></section>
        {/* Cards */}
        <section className="cards">Cards</section>
        {/* About */}
        <section className="about">About</section>
        {/* carousel */}
        <section className="carousel">
          <Carousel />
        </section>
      </main>
      {/* footer */}
      <footer className="footer">
        {/* redes sociales */}
        <section className="social-network">redes sociales</section>
        {/* logo + menú desplegado */}
        <section className="complete-menu">menu desplegado</section>
      </footer>
    </div>
  );
}

export default Layout;
