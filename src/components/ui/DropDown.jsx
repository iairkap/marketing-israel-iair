import React, { useState } from "react";
function DropDown({ title, subLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <div onMouseEnter={() => setIsOpen(true)}>
      {" "}
      <style>
        {`
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
}      `}
      </style>
      <div className="dropdown">
        <button className="buttonNav"> {title} </button>
        {isOpen && (
          <>
            <div className="backdrop"></div>
            <div
              className={`dropdown-content ${isOpen ? "open" : ""}`}
              onMouseLeave={() => setIsOpen(false)}
            >
              {subLinks.map((subLink, index) => (
                <div className="dropdown-column" key={index}>
                  <a href={subLink.href} className="subtitle">
                    <span className="subtitle">{subLink.Subtitle}</span>
                  </a>
                  <br />
                  <br />
                  <br />
                  <div>
                    {subLink.options.map((option, optionIndex) => (
                      <div key={optionIndex}>
                        <a href={subLink.href}>
                          <span className="options">{option}</span>
                        </a>
                        <br />
                        <br />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DropDown;
