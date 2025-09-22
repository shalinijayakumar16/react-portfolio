import image1 from "../../assets/prp1.jpg";
import image2 from "../../assets/oli.jpg";
import image3 from "../../assets/ulog3.jpg";
export default function WorkLayout(){
    return(
        < div className="container">
            <section className="work " id="work">
                    <div className="wrapper">
                        <div className="top">
                            <div className="title" data-aos="zoom-in" data-aos-duration="1000">
                                <h3>Work</h3>
                            </div>
                            <div className="portfolio">
                                <div className="row">
                                    <div className="col-left " data-aos="flip-left"  data-aos-duration="1000">
                                        <div className="imgbox">
                                            <img src={image1} alt="web design - arjun chhetri" />
                                        </div>
                                    </div>
                                    <div className="col-right" data-aos="zoom-in" data-aos-duration="1000">
                                        <p className="featured">Featured Project</p>
                                        <h4 className="project-title">model-PRP 1</h4>
                                        <div className="box">
                                            <p>
                                         Achieved the first major milestone in prototype development by creating and testing seven AI models. 
                                         Selected the most effective model and are now implementing it as a<span> Spiking Neural Network (SNN) </span>for low-power, real-time processing.     
                                             </p>                    
                                      </div>
                                        <div className="bottom">
                                            <ul className="text-list">
                                                <li>Quick</li>
                                                <li>Responsive</li>
                                                <li>UI/UX</li>
                                            </ul>
                                            <div className="icons">
                                                
                                                <a href="https://www.ulog3.in/">
                                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link" style={{width: `20px`, height: `20px`}}><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row rowsecond">
                                    <div className="col-left second" data-aos="flip-right" data-aos-duration="1000">
                                        <div className="imgbox">
                                            <img src={image2} alt="photoshop - arjun chhetri" />
                                        </div>
                                    </div>
                                    <div className="col-right second" data-aos="zoom-in" data-aos-duration="1000">
                                        <p className="featured">Featured Project</p>
                                        <h4 className="project-title">OLI v1</h4>
                                        <div className="box">
                                            <p>
                                            Introduced <span>OLI v1</span> (On-chip Learning Intelligence), India’s first digital neuromorphic processor, set for global availability in 2027. OLI symbolizes a new beginning for the Indian semiconductor market—bringing low-power, real-time intelligence inspired by the spark of light that marks life itself.
                                            </p>
                                        </div>
                                        <div className="bottom">
                                            <ul className="text-list">
                                                <li>Quick</li>
                                                <li>Responsive</li>
                                                <li>UI/UX</li>
                                            </ul>
                                            <div className="icons">
                                                
                                                <a href="https://www.ulog3.in/">
                                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link" style={{width: `20px`, height: `20px`}}><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-left" data-aos="flip-left" data-aos-duration="1000">
                                        <div className="imgbox">
                                            <img src={image3} alt="web development - arjun chhetri" />
                                        </div>
                                    </div>
                                    <div className="col-right" data-aos="zoom-in" data-aos-duration="1000">
                                        <p className="featured">Featured Project</p>
                                        <h4 className="project-title">Loading...</h4>
                                        <div className="box">
                                            <p>
                                           <span> ULOG3</span> is developing India’s first neuromorphic chip for onboard AI processing in satellites, addressing challenges of memory bottlenecks and high power consumption in conventional AI accelerators. As part of this roadmap, we have built a 104-neuron SNN model, soon to be implemented on FPGA, with plans to tape out the first chip before 2026 and test it in the stratosphere by year-end.
                                            </p>
                                        </div>
                                        <div className="bottom">
                                            <ul className="text-list">
                                                <li>Quick</li>
                                                <li>Responsive</li>
                                                <li>UI/UX</li>
                                            </ul>
                                            <div className="icons">
                                               
                                                <a href="https://www.ulog3.in/">
                                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link" style={{width: `20px`, height: `20px`}}><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    );
}