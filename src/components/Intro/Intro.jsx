
import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import {motion} from 'framer-motion';


const Intro = () => {
  const transition ={duration : 2 ,type :'spring '}
    return(
       <div className="intro">
          <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am</span>
                <span>Bawa Sakthi Harish.s</span>
                <span>beginner level full stack developer 
                    in web designing and development ,
                     producting quality work</span>
            </div>
            <button className=" button i-button">Hireme</button>
            <div className="i-icon">
                <a href="https://github.com/Novacoder-03"><img src={Github} alt="g" /></a>
                <a href="https://www.linkedin.com/in/bawasakthi-harish-1aaa34251/"><img src={LinkedIn} alt="l" /></a>
                <a href=""><img src={Instagram} alt="i" /></a>
            </div>
          </div>
          <div className="i-right">
           <img src={Vector1} alt="" />
           <img src={Vector2} alt="" />
           <img src={boy} alt="" />
           <motion.img 
           initial={{left:'-36%'}}
           whileInView={{left:'-24%'}}
           transition={transition}
           src={glassesimoji} alt="" />
           <div style={{top:'-4%',left:'68%'}}> 
             <FloatingDiv image={crown} txt1='web' txt2='developer'/>
           </div>
           <div style={{top:'18rem' , left:'0rem'}}>
             <FloatingDiv image={thumbup} txt1='willing to' txt2='learn'/>
           </div>
           {/*blur*/}
           <div className="blur" style={{bachground:"rgb(238 210 255)"}}></div>
           <div className="blur" 
           style={{
            bachground:'#C1F5FF' ,top:'17rem',width:'21rem' , height:'11rem', left:'-9rem' }}></div>
          </div>
       </div>
    );

    
};
export default Intro;