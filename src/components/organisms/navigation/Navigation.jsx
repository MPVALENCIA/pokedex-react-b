import React from "react";
import logoApp from "assets/img/logo.png"

const Navigation = () => {
    return (
        <nav className="o-navigation">
            <div ClassName="o-navigation_brand">
                <img 
                className="o-navigation__brand__image"
                src={logoApp} 
                alt="logo de la aplicación" 
                />
                <span>POKEDEX_</span>
            </div>
        </nav>
    );
};

export default Navigation;
