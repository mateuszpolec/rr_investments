import React, { Component } from "react";

import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBIcon } from "mdbreact";

class NavBot extends Component {
    state = {
        scrollTop: 0
    }


    windowOnLoadOverride() {
        window.onload = function() {
            document.getElementById("home-icon").style.color = "coral";
        }
    }

    listenToScrollEvent() {
        document.addEventListener("scroll", () => {
            requestAnimationFrame(() => {
                this.calculateScrollDistance();
            });
        });
    }

    calculateScrollDistance() {
        const scrollTop = window.pageYOffset; // how much the user has scrolled by


        const aboutHeight = document.getElementById("home").offsetHeight;
        const projectsHeight = document.getElementById("about").offsetHeight + aboutHeight;
        const contactHeight = document.getElementById("projects-section").offsetHeight + projectsHeight;

        if(scrollTop < aboutHeight) {
            document.getElementById("home-icon").style.color = "coral";
            document.getElementById("about-icon").style.color = "";
            document.getElementById("projects-icon").style.color = "";
            document.getElementById("contact-icon").style.color = "";
        } else if (scrollTop > aboutHeight && scrollTop < projectsHeight) {
            document.getElementById("home-icon").style.color = "";
            document.getElementById("about-icon").style.color = "coral";
            document.getElementById("projects-icon").style.color = "";
            document.getElementById("contact-icon").style.color = "";
        } else if(scrollTop > projectsHeight && scrollTop < contactHeight) {
            document.getElementById("home-icon").style.color = "";
            document.getElementById("about-icon").style.color = "";
            document.getElementById("projects-icon").style.color = "coral";
            document.getElementById("contact-icon").style.color = "";
        } else {
            document.getElementById("home-icon").style.color = "";
            document.getElementById("about-icon").style.color = "";
            document.getElementById("projects-icon").style.color = "";
            document.getElementById("contact-icon").style.color = "coral";
        }

        this.setState({
          scrollTop,
        });
      }


    componentDidMount() {
        this.windowOnLoadOverride()
        this.listenToScrollEvent()
    }
    
    render() {
        return (
            <MDBNavbar expand className="d-md-none d-flex fixed-bottom white">
            <MDBNavbarNav className="text-uppercase justify-content-center text-center py-1">
                <MDBNavItem className="mr-2 mt-1">
                    <a href="#home" id="home-icon" className="d-flex flex-column">
                        <MDBIcon icon="home" size="lg"/>
                        <span>start</span>
                    </a>
                </MDBNavItem>
                <MDBNavItem active className="mr-2 mt-1">
                    <a href="#about" id="about-icon" className="d-flex flex-column">
                        <MDBIcon icon="users" size="lg"/>
                        <span>About Us</span>
                    </a>
                </MDBNavItem>
                <MDBNavItem className="mr-2 d-flex flex-column mt-1">
                    <a href="#projects-section" id="projects-icon" className="d-flex flex-column">
                        <MDBIcon icon="suitcase" size="lg"/>
                        <span>Projects</span>
                    </a>
                </MDBNavItem>
                <MDBNavItem className="mr-2 d-flex flex-column mt-1">
                    <a href="#contact" id="contact-icon" className="d-flex flex-column">
                        <MDBIcon icon="envelope" size="lg"/>
                        <span>Contact</span>
                    </a>
                </MDBNavItem>
            </MDBNavbarNav>
        </MDBNavbar>
        )
    }
}

export default NavBot;