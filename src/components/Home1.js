import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import styled from "styled-components";
import '../App.css'
const Parent=styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:20vh auto;
`

export default function Home1 () {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
//particles arrangement with text reference website:
//https://javascript.plainenglish.io/creating-an-interactive-background-in-react-with-particles-js-263c2dec30df

//Giving styling to the particles reference website:
//https://www.section.io/engineering-education/javascript-particles-effect-with-tsparticles/
    return (
        <>
        
        <div style={{ position: 'relative', overflow: "hidden" }}>
            <div style={{ position: 'absolute'}}>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
               
                fpsLimit: 50,
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
                        value: "random",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.7,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 4,
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
                        value: 0.7,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        </div>
        <Parent className="container">
        <h1 style={{"font-size":"4rem","font-weight":"600"}}>WE'RE COMING SOON</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
        </Parent>
        </div>
        <div className="footer container">
        <p> Made with ❤️ by Abhiyodaya Pandey </p>
        <p > <span>Connect me on:</span>
         
         <a href="https://www.instagram.com/_pandey_7169" target="_blank" rel="noopener noreferrer" id="link1" class="link"> <i class="fa fa-instagram" > </i></a>
         <a href="https://www.facebook.com/abhiyodaya.pandey.3" target="_blank" rel="noopener noreferrer" class="link"> <i class="fa fa-facebook" > </i></a>
         <a href="https://www.linkedin.com/in/abhiyodaya-pandey-1834831b1" rel="noopener noreferrer" target="_blank" class="link"> <i class="fa fa-linkedin" > </i></a>
         <a href="https://twitter.com/AbhiyodayaP?t=SSASkgeTr5cJnpDfHS5ohQ&s=08" target="_blank" rel="noopener noreferrer" class="link"> <i class="fa fa-twitter" ></i> </a>
         <a href="https://mail.google.com/mail/u/0/#inbox" rel="noopener noreferrer" target="_blank" class="link"> <i class="fa fa-envelope" ></i> </a>
     </p>
        </div>
    </>
    );
};