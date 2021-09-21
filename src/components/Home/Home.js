import { gsap } from "gsap";
import "../../styles/_home.scss";



const Home = () => {


    // gsap.to("#home-msg", {stagger: 1, x: 750, rotation: 27, fill: "pink", duration: 3});
    //  gsap.fromTo("#home-msg", {opacity: 0}, {opacity: 0.8, duration: 1, ease: "elastic"});


    
    return(
        <div className='home-container'>
            <h2 id='home-msg'>Welcome</h2>
        </div>

    )
}



export default Home;