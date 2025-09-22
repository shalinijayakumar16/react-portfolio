import React from 'react';
import image from '../../assets/mithun.jpg';

export default function AboutLayout(){
    return(
        <div className='container'>
          <section className="about" id="about">
            <div className="wrapper">
              <div className="title" data-aos="zoom-in" data-aos-duration="1000">
                <h3>About Me</h3>
              </div>
              <div className="info">
                <div className="box" data-aos="fade-right" data-aos-duration="1000">
                  <div className="text">
                    <p>
                      I’m <strong>Mithun Vimalan</strong>, founder of <strong>ULOG3</strong>, where we are pioneering the development of the world’s first fully functional neuromorphic CubeSat. 🚀
                    </p>
                    <p>
                      With a strong foundation in electronics engineering and as a budding VLSI designer, I bring both technical expertise and a visionary mindset to every project I pursue. My journey has given me valuable experience in leadership, people management, and entrepreneurship, allowing me to bridge the gap between innovation and impact.
                    </p>
                    <p>
                      I’m deeply committed to transforming my professional education into entrepreneurial ventures that drive value and push the boundaries of technology. My mission is to create a lasting technological impact on a global scale, with Silicon Valley as a key stage for innovation and growth. 💡🔧
                    </p>
                  </div>
                </div>
                <div className="box">
                  <div className="img">
                    <div className="imgborder"></div>
                    <div className="imgbox" data-aos="flip-right" data-aos-duration="1000">
                      <img src={image} alt="Mithun Vimalan" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
}
