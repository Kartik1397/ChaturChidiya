import React from 'react';
import { gsap, ScrollTrigger, CSSRulePlugin, ScrollToPlugin } from "gsap/all";
import { Link } from 'react-router-dom';

import './frontpage.css';

import cclogo from '../img/cclogo.png';
import inoutlogo from '../img/inoutlogo.png';
import stlogo from '../img/stlogo.png';
import stationaryLogo from '../img/stationary.png';
import homeDecorLogo from '../img/home-decor.png';
import gardenDecorLogo from '../img/garden-decor.png';
import lightSolLogo from '../img/light-sol.png';
import sitinLogo from '../img/sitin.png';
import workonLogo from '../img/workon.png';
import structureLogo from '../img/structure.png';
import logoDesignLogo from '../img/logo-design.png';
import PkgDesingLogo from '../img/pkg-design.png';
import photoshootLogo from '../img/photoshoot.png';
import customProductLogo from '../img/custom-product.png';
import intExtLogo from '../img/int-ext.png';
import aeLogo from '../img/AE.png';
import aboutImg from '../img/about.JPG';
import designImg from '../img/designphilo.JPG';

class FrontPage extends React.Component {
  componentDidMount() {    
    gsap.registerPlugin(ScrollTrigger, CSSRulePlugin, ScrollToPlugin);

    var vh = visualViewport.height/100;
    
    window.onresize = () => { 
      vh = visualViewport.height/100;
      ScrollTrigger.refresh();
    }

    var tl = gsap.timeline();

    tl.from(".logo", {
      opacity: 0,
      y: 50,
      duration: .5
    })

    tl.from(".slogan", {
      opacity: 0,
      duration: 1
    }, "-=0.8")

    var rule = CSSRulePlugin.getRule(".slogan::after");
    if (rule === undefined) {
      rule = CSSRulePlugin.getRule(".slogan::before");
    }

    tl.from(rule, {
      cssRule: {
        width: 0,
      },
      duration: 2.5,
      ease: "power4.out"
    }, "-=0.4")

    var tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".logo-space",
        start: "top top",
        toggleActions: "play none none none",
        end: "bottom top",
      }
    })

    tl1.to(".logo", {
      top: 0,
      y: 0,
      yPercent: 0,
      height: "30vh"
    })

    tl1.to(rule, {
      cssRule: {
        width: "25vh"
      }
    }, "<")

    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".logo-space",
        start: "+=2 top",
        pin: ".main",
        toggleActions: "play reverse restart none",
        onEnter: () => {
          console.log('here');
          gsap.to(".navGrid", {
            opacity: 1,
            duration: 1.5,
            delay: .5
          });
          gsap.to(".main-section", {
            opacity: 1,
            duration: 1.5,
            delay: .5
          });
        }
      }
    })

    tl2.from(".card-grid", {
      opacity: 0,
      duration: 1.5,
      delay: .5
    })

    var tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-grid",
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    })

    tl3.to(".logo", {
      height: "20vh"
    })

    tl3.to(".slogan", {
      marginTop: 0,
      fontSize: 24
    }, "<")



    function popUp(buttons, circle) {
      var cx = circle.offsetTop + circle.offsetHeight/2;
      var cy = circle.offsetLeft + circle.offsetWidth/2;

      var bx = buttons.offsetHeight/2;
      var by = buttons.offsetWidth/2;

      buttons.style.top = "" + (cx+bx) + "px";
      buttons.style.left = "" + (cy+by) + "px";

      var theta = 0;

      var button_list = buttons.childNodes;
      var nbutton = button_list.length;

      var r = (visualViewport.height+visualViewport.width)/200 * 20;
      for (let i = 0; i < button_list.length; i++) {
          button_list[i].style.top = "" + (r*Math.sin(theta) - 3*button_list[i].offsetHeight/2) + "px";
          button_list[i].style.left = "" + (r*Math.cos(theta) - 3*button_list[i].offsetWidth/2) + "px";
          theta += Math.PI/(nbutton-1);
      }
    }

    var buttons1 = document.querySelector(".buttons1");
    var circle1 = document.querySelector(".card1");
    popUp(buttons1, circle1);
    var buttons2 = document.querySelector(".buttons2");
    var circle2 = document.querySelector(".card2");
    popUp(buttons2, circle2);
    var buttons3 = document.querySelector(".buttons3");
    var circle3 = document.querySelector(".card3");
    popUp(buttons3, circle3);

    if (visualViewport.width <= 900) {
      return;
    }

    var tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-section",
        start: () => `${30*vh} ${30*vh}`,
        end: () => `+=${310*vh} ${100*vh}`,
        pin: ".main",
        scrub: true,
      }
    })

    tl4.addLabel('first');

    tl4.to(".pages", {
      yPercent: -25,
      ease: "none"
    });

    tl4.addLabel('second');

    tl4.to(".pages", {
      yPercent: -50,
      ease: "none"
    });

    tl4.addLabel('third');

    tl4.to(".pages", {
      yPercent: -75,
      ease: "none"
    });

    this.initScrollSection('about', vh);
    this.initScrollSection('design', vh);
    this.initScrollSection('testimony', vh);
    this.initScrollSection('contact', vh);
  }

  initScrollSection(id, vh) {
    var actions = "play none none reverse";

    var tlcp2 = gsap.timeline({
      scrollTrigger: {
        trigger: "."+id,
        start: () => `${50*vh} ${30*vh}`,
        end: () => `${100*vh} ${30*vh}`,
        scrub: true
      }
    })

    tlcp2.to("."+id, {
      yPercent: -20/0.7,
      ease: "none"
    })

    var tlcp = gsap.timeline({
      scrollTrigger: {
        trigger: "."+id,
        start: () => `${30*vh} ${30*vh}`,
        end: () => `${50*vh} ${30*vh}`,
        scrub: true
      }
    })

    tlcp.to("."+id, {
      yPercent: 20/0.7,
      ease: "none"
    })

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "."+id,
        start: () => `${30*vh-10} ${30*vh}`,
        end: () => `${100*vh} ${30*vh}`,
        onEnter: () => {
          this.setBold('nav-' + id);
        },
        onEnterBack: () => {
          this.setBold('nav-' + id);
        },
        toggleActions: actions,
      }
    })

    tl.from("."+ id + " .founder-img", {
      opacity: 0,
      y: 50,
      duration: 1
    })
    tl.from("."+id+" .text", {
      opacity: 0,
      y: 100,
      duration: 1
    }, "-=0.5")

    if (document.querySelector("." + id + " .col")) {
      tl.from("." + id + " .col", {
        stagger: {
          each: 0.3,
          ease: "power2.inOut",
          from: 'start'
        },
        opacity: 0,
        y: 30
      }, "-=0.5")
    }
  }

  setBold(id) {
    document.querySelector('.navGrid').childNodes.forEach(child => {
      gsap.to(".nav-bold", {
        fontSize: "1.3em",
      });
      if(child.classList.length === 2)
        child.classList.remove('nav-bold');
    })
    document.querySelector('.'+id).classList.add("nav-bold");
    gsap.to(".nav-bold", {
      fontSize: "1.5em",
    });
  }

  GSAPscroll(pos ,id) {
    gsap.to(window, {duration: 1, scrollTo: pos+2});
  }

  render() {
    return (
      <>
        <div className="logo">
          <div className="logo-wrapper">
            <img src={aeLogo} height="80%" className="logo-svg" alt="logo"></img>
            {/* <svg height="100%" width="100%" className="logo-svg" viewBox="0 0 350 258" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="141.5" cy="68.5" r="56" stroke="black" stroke-opacity="0.25" stroke-width="5"/>
  <path d="M266.5 34C266.5 51.3627 252.208 65.5 234.5 65.5C216.792 65.5 202.5 51.3627 202.5 34C202.5 16.6373 216.792 2.5 234.5 2.5C252.208 2.5 266.5 16.6373 266.5 34Z" stroke="black" stroke-opacity="0.72" stroke-width="5"/>
  <path d="M100 186H98.4531L95.9688 182.555C95.3594 183.102 94.7109 183.617 94.0234 184.102C93.3516 184.57 92.6406 184.984 91.8906 185.344C91.1406 185.688 90.3672 185.961 89.5703 186.164C88.7891 186.367 87.9922 186.469 87.1797 186.469C85.4141 186.469 83.75 186.172 82.1875 185.578C80.6406 184.984 79.2812 184.125 78.1094 183C76.9531 181.859 76.0391 180.469 75.3672 178.828C74.6953 177.188 74.3594 175.32 74.3594 173.227C74.3594 171.273 74.6953 169.484 75.3672 167.859C76.0391 166.219 76.9531 164.812 78.1094 163.641C79.2812 162.469 80.6406 161.562 82.1875 160.922C83.75 160.266 85.4141 159.938 87.1797 159.938C87.9922 159.938 88.7969 160.039 89.5938 160.242C90.3906 160.445 91.1641 160.727 91.9141 161.086C92.6641 161.445 93.375 161.867 94.0469 162.352C94.7344 162.836 95.375 163.359 95.9688 163.922L98.4531 160.945H100V186ZM93.5547 173.227C93.5547 172.352 93.3828 171.508 93.0391 170.695C92.7109 169.867 92.2578 169.141 91.6797 168.516C91.1016 167.875 90.4219 167.367 89.6406 166.992C88.875 166.602 88.0547 166.406 87.1797 166.406C86.3047 166.406 85.4766 166.555 84.6953 166.852C83.9297 167.148 83.2578 167.586 82.6797 168.164C82.1172 168.742 81.6719 169.461 81.3438 170.32C81.0156 171.164 80.8516 172.133 80.8516 173.227C80.8516 174.32 81.0156 175.297 81.3438 176.156C81.6719 177 82.1172 177.711 82.6797 178.289C83.2578 178.867 83.9297 179.305 84.6953 179.602C85.4766 179.898 86.3047 180.047 87.1797 180.047C88.0547 180.047 88.875 179.859 89.6406 179.484C90.4219 179.094 91.1016 178.586 91.6797 177.961C92.2578 177.32 92.7109 176.594 93.0391 175.781C93.3828 174.953 93.5547 174.102 93.5547 173.227ZM129.156 186H127.609L125.125 182.555C124.516 183.102 123.867 183.617 123.18 184.102C122.508 184.57 121.797 184.984 121.047 185.344C120.297 185.688 119.523 185.961 118.727 186.164C117.945 186.367 117.148 186.469 116.336 186.469C114.57 186.469 112.906 186.141 111.344 185.484C109.797 184.812 108.438 183.891 107.266 182.719C106.109 181.531 105.195 180.133 104.523 178.523C103.852 176.898 103.516 175.133 103.516 173.227C103.516 171.336 103.852 169.578 104.523 167.953C105.195 166.328 106.109 164.922 107.266 163.734C108.438 162.547 109.797 161.617 111.344 160.945C112.906 160.273 114.57 159.938 116.336 159.938C116.898 159.938 117.477 159.984 118.07 160.078C118.68 160.172 119.266 160.328 119.828 160.547C120.406 160.75 120.945 161.023 121.445 161.367C121.945 161.711 122.367 162.133 122.711 162.633V150.914H129.156V186ZM122.711 173.227C122.711 172.352 122.539 171.508 122.195 170.695C121.867 169.867 121.414 169.141 120.836 168.516C120.258 167.875 119.578 167.367 118.797 166.992C118.031 166.602 117.211 166.406 116.336 166.406C115.461 166.406 114.633 166.562 113.852 166.875C113.086 167.188 112.414 167.641 111.836 168.234C111.273 168.812 110.828 169.523 110.5 170.367C110.172 171.211 110.008 172.164 110.008 173.227C110.008 174.148 110.172 175.023 110.5 175.852C110.828 176.68 111.273 177.406 111.836 178.031C112.414 178.656 113.086 179.148 113.852 179.508C114.633 179.867 115.461 180.047 116.336 180.047C117.211 180.047 118.031 179.859 118.797 179.484C119.578 179.094 120.258 178.586 120.836 177.961C121.414 177.32 121.867 176.594 122.195 175.781C122.539 174.953 122.711 174.102 122.711 173.227ZM141.695 154.078C141.695 154.672 141.578 155.227 141.344 155.742C141.125 156.258 140.82 156.711 140.43 157.102C140.055 157.477 139.602 157.781 139.07 158.016C138.555 158.234 138.008 158.344 137.43 158.344C136.82 158.344 136.25 158.234 135.719 158.016C135.203 157.781 134.75 157.477 134.359 157.102C133.969 156.711 133.656 156.258 133.422 155.742C133.203 155.227 133.094 154.672 133.094 154.078C133.094 153.5 133.203 152.953 133.422 152.438C133.656 151.906 133.969 151.453 134.359 151.078C134.75 150.688 135.203 150.383 135.719 150.164C136.25 149.93 136.82 149.812 137.43 149.812C138.008 149.812 138.555 149.93 139.07 150.164C139.602 150.383 140.055 150.688 140.43 151.078C140.82 151.453 141.125 151.906 141.344 152.438C141.578 152.953 141.695 153.5 141.695 154.078ZM124.516 195.562V189.117L128.055 189.164C128.914 189.164 129.711 188.984 130.445 188.625C131.18 188.281 131.812 187.812 132.344 187.219C132.891 186.641 133.32 185.969 133.633 185.203C133.945 184.438 134.102 183.633 134.102 182.789V160.898H140.641V182.789H140.594C140.578 183.961 140.414 185.094 140.102 186.188C139.805 187.281 139.375 188.297 138.812 189.234C138.25 190.188 137.578 191.047 136.797 191.812C136.016 192.594 135.148 193.258 134.195 193.805C133.258 194.367 132.25 194.797 131.172 195.094C130.078 195.406 128.945 195.562 127.773 195.562H124.516ZM169.75 173.227C169.75 175.102 169.414 176.852 168.742 178.477C168.07 180.086 167.156 181.484 166 182.672C164.844 183.844 163.484 184.773 161.922 185.461C160.375 186.133 158.711 186.469 156.93 186.469C155.164 186.469 153.5 186.133 151.938 185.461C150.391 184.773 149.031 183.844 147.859 182.672C146.703 181.484 145.789 180.086 145.117 178.477C144.445 176.852 144.109 175.102 144.109 173.227C144.109 171.32 144.445 169.555 145.117 167.93C145.789 166.305 146.703 164.906 147.859 163.734C149.031 162.547 150.391 161.617 151.938 160.945C153.5 160.273 155.164 159.938 156.93 159.938C158.711 159.938 160.375 160.258 161.922 160.898C163.484 161.523 164.844 162.422 166 163.594C167.156 164.75 168.07 166.148 168.742 167.789C169.414 169.414 169.75 171.227 169.75 173.227ZM163.305 173.227C163.305 172.195 163.133 171.266 162.789 170.438C162.461 169.594 162.008 168.875 161.43 168.281C160.852 167.672 160.172 167.211 159.391 166.898C158.625 166.57 157.805 166.406 156.93 166.406C156.055 166.406 155.227 166.57 154.445 166.898C153.68 167.211 153.008 167.672 152.43 168.281C151.867 168.875 151.422 169.594 151.094 170.438C150.766 171.266 150.602 172.195 150.602 173.227C150.602 174.195 150.766 175.094 151.094 175.922C151.422 176.75 151.867 177.469 152.43 178.078C153.008 178.688 153.68 179.172 154.445 179.531C155.227 179.875 156.055 180.047 156.93 180.047C157.805 180.047 158.625 179.883 159.391 179.555C160.172 179.227 160.852 178.766 161.43 178.172C162.008 177.578 162.461 176.859 162.789 176.016C163.133 175.172 163.305 174.242 163.305 173.227ZM180.836 154.078C180.836 154.672 180.719 155.227 180.484 155.742C180.266 156.258 179.961 156.711 179.57 157.102C179.18 157.477 178.719 157.781 178.188 158.016C177.672 158.234 177.117 158.344 176.523 158.344C175.93 158.344 175.367 158.234 174.836 158.016C174.32 157.781 173.867 157.477 173.477 157.102C173.102 156.711 172.797 156.258 172.562 155.742C172.344 155.227 172.234 154.672 172.234 154.078C172.234 153.5 172.344 152.953 172.562 152.438C172.797 151.906 173.102 151.453 173.477 151.078C173.867 150.688 174.32 150.383 174.836 150.164C175.367 149.93 175.93 149.812 176.523 149.812C177.117 149.812 177.672 149.93 178.188 150.164C178.719 150.383 179.18 150.688 179.57 151.078C179.961 151.453 180.266 151.906 180.484 152.438C180.719 152.953 180.836 153.5 180.836 154.078ZM179.734 186H173.289V160.898H179.734V186ZM191.031 186H184.633V160.898H186.18L188.289 163.336C189.32 162.398 190.484 161.68 191.781 161.18C193.094 160.664 194.461 160.406 195.883 160.406C197.414 160.406 198.859 160.703 200.219 161.297C201.578 161.875 202.766 162.68 203.781 163.711C204.797 164.727 205.594 165.922 206.172 167.297C206.766 168.656 207.062 170.109 207.062 171.656V186H200.664V171.656C200.664 171 200.539 170.383 200.289 169.805C200.039 169.211 199.695 168.695 199.258 168.258C198.82 167.82 198.312 167.477 197.734 167.227C197.156 166.977 196.539 166.852 195.883 166.852C195.211 166.852 194.578 166.977 193.984 167.227C193.391 167.477 192.875 167.82 192.438 168.258C192 168.695 191.656 169.211 191.406 169.805C191.156 170.383 191.031 171 191.031 171.656V186ZM219.18 154.078C219.18 154.672 219.062 155.227 218.828 155.742C218.609 156.258 218.305 156.711 217.914 157.102C217.523 157.477 217.062 157.781 216.531 158.016C216.016 158.234 215.461 158.344 214.867 158.344C214.273 158.344 213.711 158.234 213.18 158.016C212.664 157.781 212.211 157.477 211.82 157.102C211.445 156.711 211.141 156.258 210.906 155.742C210.688 155.227 210.578 154.672 210.578 154.078C210.578 153.5 210.688 152.953 210.906 152.438C211.141 151.906 211.445 151.453 211.82 151.078C212.211 150.688 212.664 150.383 213.18 150.164C213.711 149.93 214.273 149.812 214.867 149.812C215.461 149.812 216.016 149.93 216.531 150.164C217.062 150.383 217.523 150.688 217.914 151.078C218.305 151.453 218.609 151.906 218.828 152.438C219.062 152.953 219.18 153.5 219.18 154.078ZM218.078 186H211.633V160.898H218.078V186ZM229.375 186H222.977V160.898H224.523L226.633 163.336C227.664 162.398 228.828 161.68 230.125 161.18C231.438 160.664 232.805 160.406 234.227 160.406C235.758 160.406 237.203 160.703 238.562 161.297C239.922 161.875 241.109 162.68 242.125 163.711C243.141 164.727 243.938 165.922 244.516 167.297C245.109 168.656 245.406 170.109 245.406 171.656V186H239.008V171.656C239.008 171 238.883 170.383 238.633 169.805C238.383 169.211 238.039 168.695 237.602 168.258C237.164 167.82 236.656 167.477 236.078 167.227C235.5 166.977 234.883 166.852 234.227 166.852C233.555 166.852 232.922 166.977 232.328 167.227C231.734 167.477 231.219 167.82 230.781 168.258C230.344 168.695 230 169.211 229.75 169.805C229.5 170.383 229.375 171 229.375 171.656V186ZM267.836 173.227C267.836 172.352 267.664 171.508 267.32 170.695C266.992 169.867 266.539 169.141 265.961 168.516C265.383 167.875 264.703 167.367 263.922 166.992C263.156 166.602 262.336 166.406 261.461 166.406C260.586 166.406 259.758 166.555 258.977 166.852C258.211 167.148 257.539 167.586 256.961 168.164C256.398 168.742 255.953 169.461 255.625 170.32C255.297 171.164 255.133 172.133 255.133 173.227C255.133 174.273 255.297 175.219 255.625 176.062C255.953 176.891 256.398 177.602 256.961 178.195C257.539 178.789 258.211 179.25 258.977 179.578C259.758 179.891 260.586 180.047 261.461 180.047C262.336 180.047 263.156 179.859 263.922 179.484C264.703 179.094 265.383 178.586 265.961 177.961C266.539 177.32 266.992 176.594 267.32 175.781C267.664 174.953 267.836 174.102 267.836 173.227ZM274.281 182.836C274.281 184.602 273.945 186.258 273.273 187.805C272.602 189.352 271.68 190.703 270.508 191.859C269.352 193.016 267.992 193.93 266.43 194.602C264.883 195.273 263.227 195.609 261.461 195.609L258.25 195.562V189.164L261.414 189.211C262.414 189.211 263.266 189.078 263.969 188.812C264.672 188.562 265.266 188.211 265.75 187.758C266.234 187.32 266.617 186.812 266.898 186.234C267.195 185.656 267.43 185.047 267.602 184.406C267.352 184.812 266.992 185.148 266.523 185.414C266.055 185.664 265.531 185.867 264.953 186.023C264.391 186.195 263.797 186.312 263.172 186.375C262.562 186.438 261.992 186.469 261.461 186.469C259.695 186.469 258.031 186.164 256.469 185.555C254.922 184.945 253.562 184.078 252.391 182.953C251.234 181.812 250.32 180.422 249.648 178.781C248.977 177.141 248.641 175.289 248.641 173.227C248.641 171.336 248.977 169.578 249.648 167.953C250.32 166.328 251.234 164.922 252.391 163.734C253.562 162.547 254.922 161.617 256.469 160.945C258.031 160.273 259.695 159.938 261.461 159.938C262.273 159.938 263.078 160.039 263.875 160.242C264.672 160.445 265.445 160.727 266.195 161.086C266.945 161.445 267.656 161.867 268.328 162.352C269.016 162.836 269.656 163.359 270.25 163.922L272.734 160.945H274.281V182.836Z" fill="black" fill-opacity="0.85"/>
  <path d="M44.1634 246.848C46.7554 246.848 49.1554 246.368 51.3634 245.408C53.6194 244.4 55.4674 242.96 56.9074 241.088L57.9154 242.096C56.2834 244.064 54.2674 245.576 51.8674 246.632C49.4674 247.688 46.8994 248.216 44.1634 248.216C40.6114 248.216 37.4194 247.424 34.5874 245.84C31.7554 244.208 29.5234 241.952 27.8914 239.072C26.3074 236.192 25.5153 232.952 25.5153 229.352C25.5153 225.704 26.2593 222.464 27.7473 219.632C29.2834 216.8 31.3954 214.592 34.0834 213.008C36.7714 211.376 39.8194 210.56 43.2274 210.56C46.3474 210.56 49.1314 211.304 51.5794 212.792C54.0754 214.28 56.0434 216.296 57.4834 218.84C58.9714 221.384 59.8354 224.168 60.0754 227.192L27.3874 233.6C28.2514 237.632 30.1954 240.848 33.2194 243.248C36.2434 245.648 39.8914 246.848 44.1634 246.848ZM43.2274 211.928C40.1074 211.928 37.2994 212.672 34.8034 214.16C32.3074 215.648 30.3634 217.712 28.9714 220.352C27.5794 222.944 26.8834 225.872 26.8834 229.136C26.8834 230.24 26.9554 231.296 27.0994 232.304L58.5634 226.112C58.2754 223.616 57.4594 221.288 56.1154 219.128C54.7714 216.92 52.9714 215.168 50.7154 213.872C48.5074 212.576 46.0114 211.928 43.2274 211.928ZM77.3475 248.216C74.5155 248.216 72.3555 247.4 70.8675 245.768C69.3795 244.088 68.6355 241.856 68.6355 239.072V194.576H70.0755V238.712C70.0755 244.136 72.4755 246.848 77.2755 246.848C78.6675 246.848 79.8915 246.632 80.9475 246.2L81.1635 247.496C79.9635 247.976 78.6915 248.216 77.3475 248.216ZM98.979 246.848C101.571 246.848 103.971 246.368 106.179 245.408C108.435 244.4 110.283 242.96 111.723 241.088L112.731 242.096C111.099 244.064 109.083 245.576 106.683 246.632C104.283 247.688 101.715 248.216 98.979 248.216C95.427 248.216 92.235 247.424 89.403 245.84C86.571 244.208 84.339 241.952 82.707 239.072C81.123 236.192 80.331 232.952 80.331 229.352C80.331 225.704 81.075 222.464 82.563 219.632C84.099 216.8 86.211 214.592 88.899 213.008C91.587 211.376 94.635 210.56 98.043 210.56C101.163 210.56 103.947 211.304 106.395 212.792C108.891 214.28 110.859 216.296 112.299 218.84C113.787 221.384 114.651 224.168 114.891 227.192L82.203 233.6C83.067 237.632 85.011 240.848 88.035 243.248C91.059 245.648 94.707 246.848 98.979 246.848ZM98.043 211.928C94.923 211.928 92.115 212.672 89.619 214.16C87.123 215.648 85.179 217.712 83.787 220.352C82.395 222.944 81.699 225.872 81.699 229.136C81.699 230.24 81.771 231.296 81.915 232.304L113.379 226.112C113.091 223.616 112.275 221.288 110.931 219.128C109.587 216.92 107.787 215.168 105.531 213.872C103.323 212.576 100.827 211.928 98.043 211.928ZM169.747 210.56C174.259 210.56 177.787 211.904 180.331 214.592C182.923 217.232 184.219 221.048 184.219 226.04V248H182.779V226.04C182.779 221.48 181.651 218 179.395 215.6C177.139 213.152 173.947 211.928 169.819 211.928C165.115 211.928 161.395 213.392 158.659 216.32C155.923 219.2 154.555 223.016 154.555 227.768V248H153.115V226.04C153.115 221.48 151.987 218 149.731 215.6C147.475 213.152 144.283 211.928 140.155 211.928C135.451 211.928 131.731 213.392 128.995 216.32C126.259 219.2 124.891 223.016 124.891 227.768V248H123.451V210.776H124.891V220.64C125.995 217.472 127.867 215 130.507 213.224C133.147 211.448 136.339 210.56 140.083 210.56C143.875 210.56 146.995 211.52 149.443 213.44C151.891 215.312 153.475 218.048 154.195 221.648C155.155 218.24 156.979 215.552 159.667 213.584C162.403 211.568 165.763 210.56 169.747 210.56ZM211.029 246.848C213.621 246.848 216.021 246.368 218.229 245.408C220.485 244.4 222.333 242.96 223.773 241.088L224.781 242.096C223.149 244.064 221.133 245.576 218.733 246.632C216.333 247.688 213.765 248.216 211.029 248.216C207.477 248.216 204.285 247.424 201.453 245.84C198.621 244.208 196.389 241.952 194.757 239.072C193.173 236.192 192.381 232.952 192.381 229.352C192.381 225.704 193.125 222.464 194.613 219.632C196.149 216.8 198.261 214.592 200.949 213.008C203.637 211.376 206.685 210.56 210.093 210.56C213.213 210.56 215.997 211.304 218.445 212.792C220.941 214.28 222.909 216.296 224.349 218.84C225.837 221.384 226.701 224.168 226.941 227.192L194.253 233.6C195.117 237.632 197.061 240.848 200.085 243.248C203.109 245.648 206.757 246.848 211.029 246.848ZM210.093 211.928C206.973 211.928 204.165 212.672 201.669 214.16C199.173 215.648 197.229 217.712 195.837 220.352C194.445 222.944 193.749 225.872 193.749 229.136C193.749 230.24 193.821 231.296 193.965 232.304L225.429 226.112C225.141 223.616 224.325 221.288 222.981 219.128C221.637 216.92 219.837 215.168 217.581 213.872C215.373 212.576 212.877 211.928 210.093 211.928ZM252.565 210.56C257.221 210.56 260.869 211.904 263.509 214.592C266.149 217.232 267.469 221.048 267.469 226.04V248H266.029V226.04C266.029 221.48 264.853 218 262.501 215.6C260.197 213.152 256.909 211.928 252.637 211.928C247.789 211.928 243.949 213.392 241.117 216.32C238.333 219.2 236.941 223.016 236.941 227.768V248H235.501V210.776H236.941V220.712C238.093 217.544 240.013 215.072 242.701 213.296C245.389 211.472 248.677 210.56 252.565 210.56ZM295.835 245.552C295.019 246.416 293.939 247.088 292.595 247.568C291.299 248 289.955 248.216 288.563 248.216C285.683 248.216 283.451 247.4 281.867 245.768C280.331 244.088 279.563 241.856 279.563 239.072V202.64H281.003V210.776H293.603V212.144H281.003V238.712C281.003 241.352 281.651 243.368 282.947 244.76C284.243 246.152 286.139 246.848 288.635 246.848C291.131 246.848 293.195 246.08 294.827 244.544L295.835 245.552ZM311.893 248.216C308.917 248.216 306.109 247.736 303.469 246.776C300.829 245.816 298.789 244.592 297.349 243.104L298.213 241.952C299.653 243.344 301.573 244.52 303.973 245.48C306.421 246.392 309.061 246.848 311.893 246.848C316.117 246.848 319.237 246.128 321.253 244.688C323.269 243.2 324.277 241.16 324.277 238.568C324.277 236.696 323.725 235.232 322.621 234.176C321.565 233.072 320.245 232.28 318.661 231.8C317.125 231.272 314.989 230.744 312.253 230.216C309.325 229.688 306.949 229.136 305.125 228.56C303.349 227.936 301.837 226.976 300.589 225.68C299.389 224.336 298.789 222.488 298.789 220.136C298.789 217.448 299.893 215.192 302.101 213.368C304.357 211.496 307.645 210.56 311.965 210.56C314.269 210.56 316.549 210.92 318.805 211.64C321.061 212.312 322.885 213.224 324.277 214.376L323.413 215.528C321.973 214.376 320.245 213.488 318.229 212.864C316.213 212.24 314.125 211.928 311.965 211.928C308.077 211.928 305.149 212.696 303.181 214.232C301.261 215.72 300.301 217.688 300.301 220.136C300.301 222.104 300.853 223.664 301.957 224.816C303.061 225.92 304.429 226.736 306.061 227.264C307.693 227.792 309.853 228.296 312.541 228.776C315.469 229.352 317.797 229.928 319.525 230.504C321.253 231.08 322.717 232.016 323.917 233.312C325.117 234.56 325.717 236.312 325.717 238.568C325.717 241.496 324.541 243.848 322.189 245.624C319.837 247.352 316.405 248.216 311.893 248.216Z" fill="black"/>
  </svg>          */}
          </div>
          <p className="slogan">a learn cycle approach</p>
        </div>
        <div className="main">
          {/* <div className="scroll-space"></div> */}
          <div className="logo-space">
          </div>
          <div className="card-grid">
            <Link to={{pathname:'/product' }} onClick={() => { window.location.href = '/product'; }} style={{ textDecoration: 'none', color: 'black' }}>
              <div className="card-wrapper">
                <div className="card-title title1">decor</div>
                <div className="card card1">
                  <img src={cclogo} class="card-logo" alt="logo"></img>
                </div>
                  <div class="buttons buttons1">
                    <div class="button">
                      <img src={lightSolLogo} class="button-logo" alt="logo"></img>
                      <p><center>lightning solution</center></p>
                    </div>
                    <div class="button">
                      <img src={gardenDecorLogo} class="button-logo" alt="logo"></img>
                      <p><center>garden decor</center></p>
                    </div>
                    <div class="button">
                      <img src={homeDecorLogo} class="button-logo" alt="logo"></img>
                      <p><center>home decor</center></p>
                    </div>
                    <div class="button">
                      <img src={stationaryLogo} class="button-logo" alt="logo"></img>
                      <p><center>stationary</center></p>
                    </div>
                  </div>
              </div>
            </Link>
            <Link to={{pathname:'/product' }} onClick={() => { window.location.href = '/product'; }} style={{ textDecoration: 'none', color: 'black' }}>
              <div className="card-wrapper">
              <div className="card-title title2">furniture</div>
                <div className="card card2">
                  <img src={stlogo} class="card-logo" alt="logo"></img>
                </div>
                <div class="buttons buttons2">
                  <div class="button">
                    <img src={structureLogo} class="button-logo" alt="logo"></img>
                    <p><center>structure</center></p>
                  </div>
                  <div class="button">
                    <img src={PkgDesingLogo} class="button-logo" alt="logo"></img>
                    <p><center>store in</center></p>
                  </div>
                  <div class="button">
                    <img src={workonLogo} class="button-logo" alt="logo"></img>
                    <p><center>work on</center></p>
                  </div>
                  <div class="button">
                    <img src={sitinLogo} class="button-logo" alt="logo"></img>
                    <p><center>sit in</center></p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={{ pathname:'/product', state:{} }} onClick={() => { window.location.href = '/product'; }} style={{ textDecoration: 'none', color: 'black' }}>            
              <div className="card-wrapper">
                <div className="card-title title3">projects</div>
                <div className="card card3">
                  <img src={inoutlogo} class="card-logo" alt="logo"></img>
                </div>
                <div class="buttons buttons3">
                  <div class="button">
                    <img src={intExtLogo} class="button-logo" alt="logo"></img>
                    <p><center>interial/exterior decor</center></p>
                  </div>
                  <div class="button">
                    <img src={customProductLogo} class="button-logo" alt="logo"></img>
                    <p><center>customised products</center></p>
                  </div>
                  <div class="button">
                    <img src={photoshootLogo} class="button-logo" alt="logo"></img>
                    <p><center>photoshoot</center></p>
                  </div>
                  <div class="button">
                    <img src={PkgDesingLogo} class="button-logo" alt="logo"></img>
                    <p><center>packaging design</center></p>
                  </div>
                  <div class="button">
                    <img src={logoDesignLogo} class="button-logo" alt="logo"></img>
                    <p><center>logo design</center></p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          { visualViewport.width > 900 &&
            <div className="nav-container">
            <div className = "navGrid">
              <div onClick={() => {this.GSAPscroll(visualViewport.height/100*110 , "nav-about")}} className = "nav-about"> About</div>
              <div onClick={() => {this.GSAPscroll(visualViewport.height/100*170 , "nav-design")}} className = "nav-design">Design</div>
              <div onClick={() => {this.GSAPscroll(visualViewport.height/100*240 , "nav-testimony")}} className = "nav-testimony">Testimony</div>
              <div onClick={() => {this.GSAPscroll(visualViewport.height/100*350,"nav-contact")}} className = "nav-contact">Contact Us</div>
            </div>
          </div>}
          <div className="main-section">
            <div className="pages">
              <div className="page about">
                {
                  visualViewport.width <= 900 && <div class="title nav-about">About</div>
                }
                <div className="founder-img" style={{
                  background: `url(${aboutImg})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "40vh",
                  margin: "0 auto",
                  marginBottom: "3vh"
                }}>
                </div>
                <div className="text">
                  More than just a start-up, Chatur Chidiyaa is a voyage that started from a leisure trip to Nal-sarovar (a wet land bird sanctuary in Gujarat) as a classroom project to a series of serious exhibitions that tested the model’s genuineness. The team collaborates on sustainability and design thinking to generate ideas that use old materials to make new concepts with an icing of handmade touch. We are a synchronization of curious Creatives who love to work with materials and passionate Marketers who believe that good design is about good idea presented intact.
                </div>
                <div className="text">
                  We have a vision of imbibing sustainability in business as it optimizes the resources in an ingenious way satisfying our present need and saving sufficiently for the future.                </div>
                </div>
              <div className="page design">
              {
                visualViewport.width <= 900 && <div class="title nav-design">Design philosophy</div>
              }
              <div className="founder-img" style={{
                  background: `url(${designImg})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "30vh",
                  margin: "0 auto",
                  marginBottom: "3vh"
                }}>
                </div>
                <div className="text">
                 Considering four pillars of a green business philosophy – product, process, place and people, it focuses on a design conscious handmade products made out of innocent (recycled, reused, up cycled) materials such as bamboo, fabric, clay, paper that appeals for a balance between Ecology and Human activities by providing an opportunity to prosper the financially under privileged and communities with mentally different people as Chatur Chidiyaa product makers.
                </div>
                <div className="text">
                  It redefines the bridge between the effective ways of manufacturing and the human demand to live better with great products around. The users receive plenty of functional products with a tantalization to care about nature..
                </div>
                <div className="design-row">
                  <div className="col" style={{marginRight: "20px"}}>
                    <div className="small-title">Vision</div>
                    <div className="text">
                      To perceive a green business ideology that connects people with nature through ingenious ways.
                    </div>
                  </div>
                  <div className="col" style={{marginRight: "20px"}}>
                    <div className="small-title">Mission</div>
                    <div className="text">
                    To establish a business model that focuses on design-conscious products made out of innocent materials that create a minimal carbon footprint.
                    </div>
                  </div>
                  <div className="col">
                    <div className="small-title">Goal</div>
                    <div className="text">
                      An endeavour that balances the ecology and human activities by providing an opportunity to prosper the local community through employment.
                    </div>
                  </div>
                </div>
              </div>
              <div className="page testimony">
              {
                visualViewport.width <= 900 && <div class="title nav-testimony">Testimony</div>
              }

                <div className="founder-img"></div>
                <div className="text">
                about the founders and the rest of the team few liners for how it os generally used for
  how it os generally used few liners for how it os generally used for how it os generally used.
                </div>
              </div>
              <div className="page contact">
              {
                visualViewport.width <= 900 && <div class="title nav-contact">Contact</div>
              }

              <div className="founder-img">
                <iframe title="iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14760.604274038265!2d73.2114527!3d22.347924!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xce7c5760b8b90cec!2sChatur%20Chidiyaa!5e0!3m2!1sen!2sin!4v1608361227933!5m2!1sen!2sin" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "1px solid #b2c2e0",
                    boxShadow: "2px 2px 10px 0 rgba(0, 0, 0, 0.1)",
                    borderRadius: "7px",
                  }}
                ></iframe>
              </div>
                <div className="row"
                  style={{
                    alignItems: "start"
                  }}
                >
                  <div className="col" style={{
                    minWidth: "20vw",
                  }}>
                    <div className="small-title" style={{textAlign: "left"}}>address</div>
                    <div className="text">
                      Chatur Chidiyaa Studio,<br></br>
                      402-B/ Temple view apt.<br></br>
                      B\h Cygnus School, Motnath Mahadev Road,<br></br>
                      Harni, Vadodara - 390 022<br></br>
                      Gujarat, India<br></br>
                    </div>
                  </div>
                  <div className="col" style={{
                    minWidth: "20vw",
                  }}>
                    <div className="small-title" style={{textAlign: "left"}}>contact person</div>
                    <div className="text">
                      Ronak Shah<br></br>
                      business communication<br></br> 
                      09638598579<br></br>
                      hello@chaturchidiyaa.com
                    </div>
                  </div>
                  <div className="col" style={{
                    minWidth: "20vw",
                  }}>
                    <div className="small-title" style={{textAlign: "left"}}>timings</div>
                    <div className="text">
                      honestly, drop by anytime between 9AM-6PM:<br></br>
                      for best hospitality: book an appointment 2 days prior for workshop tour and personal assistance to design process
                    </div>
                  </div>
                  <div className="col" style={{
                    minWidth: "20vw",
                  }}>
                    <div className="small-title" style={{textAlign: "left"}}>inquiry form</div>
                    <div className="text">
                      {/* TODO: ... */}
                      attachment (standard form)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default FrontPage;
