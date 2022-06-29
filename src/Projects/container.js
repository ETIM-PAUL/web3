import React from "react";
import Footer from "../Footer";
import GetInTouch from "../FrontPage/inTouch";
import ProjectImage from "./projectGallery";
import construction from "../img/construction.jpeg";
import freight from "../img/freight.jpeg";

const About = () => {
  function showInfo() {
    let info = document.getElementById("object-info");
    info.classList.toggle("show-info");
  }

  return (
    <>
      <main
        class=" main-projects bg-projects vc_custom_1535019192283 "
        data-stellar-background-ratio="0.6"
        style={{backgroundPosition: "50% 0px"}}
      >
        <div class="container">
          <header class="main-header">
            <h1>Projects</h1>
            <div class="project-title-info"></div>
          </header>
        </div>

        {/* <!-- Lines --> */}

        <div class="page-lines">
          <div class="container">
            <div class="col-line col-xs-4">
              <div class="line"></div>
            </div>
            <div class="col-line col-xs-4">
              <div class="line"></div>
            </div>
            <div class="col-line col-xs-4">
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </div>
        </div>
      </main>

      <div class="layout">
        <div class="content">
          <div class="vc_row wpb_row vc_row-fluid">
            <div class="wpb_column vc_column_container vc_col-sm-12">
              <div class="vc_column-inner ">
                <div class="wpb_wrapper">
                  {/* <!-- About  --> */}
                  <section class="projects">
                    <div class="js-projects-gallery">
                      <div class=" projects_block row">
                        <ProjectImage
                          projectName="Interior Design and Re-Modelling"
                          img="https://www.carrillionng.com.ng/wp-content/uploads/2019/04/featured-1.jpg"
                        />
                        <ProjectImage projectName="Freight Delivery" img={freight} />
                        <ProjectImage
                          projectName="Architecture and Construction"
                          img={construction}
                        />
                        <ProjectImage
                          projectName="Real Estate Management"
                          img="https://www.carrillionng.com.ng/wp-content/uploads/2021/11/featuredagnes5.jpg"
                        />
                      </div>
                    </div>
                  </section>

                  {/* <!-- Contacts --> */}
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Lines --> */}

          <div class="page-lines">
            <div class="container">
              <div class="col-line col-xs-4">
                <div class="line"></div>
              </div>
              <div class="col-line col-xs-4">
                <div class="line"></div>
              </div>
              <div class="col-line col-xs-4">
                <div class="line"></div>
                <div class="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
      <Footer />
    </>
  );
};

export default About;
