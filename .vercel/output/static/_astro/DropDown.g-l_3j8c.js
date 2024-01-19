import{j as o}from"./jsx-runtime.9YwcPWTT.js";import{r as d}from"./index.LFf77hJu.js";function p({title:t,subLinks:s}){const[n,r]=d.useState(!1);return console.log(n),o.jsxs("div",{onMouseEnter:()=>r(!0),children:[" ",o.jsx("style",{children:`
      a {
        text-decoration: none;
      }
.buttons-nav {
  display: flex;
  gap: 1rem;
  flex-direction: row;
}

.buttonNav {
  background-color: transparent;
  border: none;
  color: #fff;
  font-family: "Manrope", sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transition: all 0.3s ease 0s;
  padding: 1rem 2rem;
  border-radius: 0.25rem;
}

.dropdown {
  position: relative;
  display: inline-block;
  z-index: 2;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: row;
  height: fit-content;
  padding: 2rem;
  width: 40vw;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 3;
  border-radius: 0.3125rem;
  background: #1b1f27;
  color: #fff;
  font-family: "Manrope" sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}


.dropdown:hover .dropdown-content {
  display: flex;
}

.dropdown-column {
  flex: 1;
  padding: 1rem;
}

.subtitle {s
  color: #fff;
  font-family: "Manrope";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 5rem;
}

.backdrop {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 1;
}
.options {
  color: #c7c7c7;
  font-family: "Manrope" sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  text-decoration: none;
  line-height: normal;
}      `}),o.jsxs("div",{className:"dropdown",children:[o.jsxs("button",{className:"buttonNav",children:[" ",t," "]}),n&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"backdrop"}),o.jsx("div",{className:`dropdown-content ${n?"open":""}`,onMouseLeave:()=>r(!1),children:s.map((e,i)=>o.jsxs("div",{className:"dropdown-column",children:[o.jsx("a",{href:e.href,className:"subtitle",children:o.jsx("span",{className:"subtitle",children:e.Subtitle})}),o.jsx("br",{}),o.jsx("br",{}),o.jsx("br",{}),o.jsx("div",{children:e.options.map((a,l)=>o.jsxs("div",{children:[o.jsx("a",{href:e.href,children:o.jsx("span",{className:"options",children:a})}),o.jsx("br",{}),o.jsx("br",{})]},l))})]},i))})]})]})]})}export{p as default};
