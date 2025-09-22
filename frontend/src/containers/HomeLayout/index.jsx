import Ityped from "../../hooks/ityped";
import ItypedSubtitle from "../../hooks/itypedSubtitle";

export default function HomeLayout() {
  return (
    <>
      <div className="container" id="home">
        <section className="banner">
          <div className="wrapper">
            <div className="top">
              <div className="title">
                <p>Hi, my name is</p>
                <h2 className="text">
                  <Ityped />
                </h2>
              </div>

              {/* Moved ItypedSubtitle ABOVE middleTitle */}
              <h3 className="typed-subtitle">
                <ItypedSubtitle />
              </h3>

              <div className="middleTitle" data-aos="fade-up">
                <h2>
                  Building India’s first digital Neuromorphic Processor for
                  satellites and edge AI.
                </h2>
              </div>
            </div>

            <div
              className="bottom"
              data-aos="zoom-out-right"
              data-aos-duration="1000"
            >
              <div className="paragraph">
                <p>
                  I invest <strong>$43,200 daily</strong> to achieve my goal of
                  building the world’s first fully functional neuromorphic
                  CubeSat. Wondering how I can spend $43,200 daily? Really, I
                  mean <strong>time</strong>. I always believe that time is
                  money. Just think of it that way.
                </p>
                <p>Have a successful day 🏆!</p>
              </div>

            
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
