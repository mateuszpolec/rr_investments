import React, { Component } from "react";

import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBIcon } from "mdbreact";

class NavBot extends Component {
    state = {
        scrollTop: 0
    }

    listenToScrollEvent() {
        document.addEventListener("scroll", () => {
            requestAnimationFrame(() => {
                this.calculateScrollDistance();
                console.log(this.state);
            });
        });
    }

    calculateScrollDistance() {
        const scrollTop = window.pageYOffset; // how much the user has scrolled by


        const homeHeight = 0;
        const aboutHeight = document.getElementById("home").offsetHeight;
        const projectsHeight = document.getElementById("about").offsetHeight + aboutHeight;
        const contactHeight = document.getElementById("projects-section").offsetHeight + projectsHeight;

        console.log(homeHeight, aboutHeight, projectsHeight, contactHeight)

        if(scrollTop < aboutHeight) {
            console.log("Im on home");
        } else if (scrollTop > aboutHeight && scrollTop < projectsHeight) {
            console.log("Im on about");
        } else if(scrollTop > projectsHeight && scrollTop < contactHeight) {
            console.log("Im on projects");
        } else {
            console.log("Im on contact");
        }

        this.setState({
          scrollTop,
        });
      }


    componentDidMount() {
        this.listenToScrollEvent()
    }
    
    render() {
        return (
            <MDBNavbar expand className="d-md-none d-flex fixed-bottom white">
            <MDBNavbarNav className="text-uppercase justify-content-center text-center py-1">
                <MDBNavItem className="mr-2 mt-1">
                    <a href="#home" className="d-flex flex-column">
                        <MDBIcon icon="home" size="lg"/>
                        <span>start</span>
                    </a>
                </MDBNavItem>
                <MDBNavItem active className="mr-2 mt-1">
                    <a href="#about" className="d-flex flex-column">
                        <MDBIcon icon="users" size="lg"/>
                        <span>About Us</span>
                    </a>
                </MDBNavItem>
                <MDBNavItem className="mr-2 d-flex flex-column mt-1">
                    <a href="#projects-section" className="d-flex flex-column">
                        <MDBIcon icon="suitcase" size="lg"/>
                        <span>Projects</span>
                    </a>
                </MDBNavItem>
                <MDBNavItem className="mr-2 d-flex flex-column mt-1">
                    <a href="#contact" className="d-flex flex-column">
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