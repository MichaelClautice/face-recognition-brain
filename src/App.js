// Michael Clautice, Richmond, VA

// DELETE THIS CRA CODE
// import logo from './logo.svg';
// import { Component } from 'react';

import React, { Component } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navigation from "./components/Navigation/Navigation.js";
import Logo from "./components/Logo/Logo.js";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.js";
import Rank from "./components/Rank/Rank.js";
import "./App.css";

// particlesOptions
// const particlesOptions = {
//   particles: {
//     color: {
//       value: "#610775",
//     },
//     number: {
//       value: 300,
//       density: {
//         enable: true,
//         area: 800,
//       },
//     },
//   },
// };

// particlesInit
const particlesInit = async (main) => {
  console.log(main);
  await loadFull(main);
};

// particlesLoaded
const particlesLoaded = (container) => {
  console.log(container);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles
          className="particles"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "linear-gradient(89deg, #ff5edf 0%, #04c8d3 100%)",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                // value: '#ffffff',
                value: 'FF0066',
              },
              links: {
                // color: "#ffffff",
                color: 'FFFF33',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "right",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 100,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "square",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
