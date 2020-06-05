import React from 'react';
import './about.css';
import Header from '../components/header/header.js'
import Home from './homePage.js'
import game from '../components/img/footballscene.png'
import Sidebar_left from '../components/sidebarl.js'
import Sidebar_right from '../components/sidebarr.js'

const About = () => {
    return (
        <div className=" ">
            <Header/>
            <section className=''>
            <div className="row">
            <Sidebar_left/>
                <div className='col-6 textarea m-4 p-4 '>  
                    <h2>About Us</h2>              
                    <img src = {game} className="img-responsive"></img>
                    <p className="text-left About_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                    etiam sed elementum tortor pharetra, pellentesque. Montes, 
                    senectus habitasse mi sed ullamcorper ultrices quam. Fermentum 
                    purus diam rhoncus ut. Orci in massa diam convallis id erat. 
                    Faucibus convallis tortor, risus, diam sit eget sit nullam sit. 
                    Imperdiet vehicula ac massa nisl. Tincidunt amet hac a, elementum 
                    sit. Rhoncus, sed lectus vitae elit etiam vel nibh mattis. Amet 
                    et sit in amet vestibulum amet. Ac sed mauris varius eget enim 
                    porttitor donec.

                    Dignissim vitae et tincidunt dictum. Vel, integer in consequat 
                    ultrices ullamcorper volutpat diam. Risus, ut cras nulla quam nunc 
                    aliquet fringilla. Quis auctor fames cras rutrum lectus curabitur. 
                    Aliquam tortor laoreet at non. Hendrerit convallis enim, at arcu et 
                    at. Platea cursus amet ipsum, et sed eu dignissim ullamcorper turpis. 
                    Aliquam, egestas sit magna pharetra nisi, dictum sit. Maecenas proin 
                    tortor, dolor vulputate malesuada sagittis. Sem lorem nulla est purus, 
                    sem scelerisque. Condimentum turpis sem dolor aliquet sapien vel felis 
                    ante dui. Odio condimentum egestas potenti diam non facilisis suspendisse 
                    venenatis nibh.

                    Scelerisque ac gravida massa eget lobortis duis. Libero amet volutpat 
                    rhoncus tellus platea. Quam quis scelerisque tristique ullamcorper in 
                    bibendum mauris. Neque facilisis dui, rhoncus a lobortis imperdiet 
                    ullamcorper. Egestas mattis sed porttitor aenean a in cras. Non pretium 
                    mi a.liquet vitae mattis proin tellus. Euismod metus aenean vitae a nisl 
                    et libero venenatis dolor. Cursus diam ut habitant quam. Lorem ac lorem 
                    cursus blandit fermentum mi. Velit diam turpis.
                    </p>
                </div>
                <Sidebar_right/>
            </div>
            </section>
        </div>
    )
}

export default About;