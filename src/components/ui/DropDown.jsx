import React from "react";

function DropDown({ title, subLinks }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="buttonNav"> {title} </button>
      {isOpen && (
        <div className="dropdown-content">
          {subLinks.map((subLink) => (
            <div className="dropdown-column">
              <a href={subLink.href} className="subtitle">
                <span className="subtitle">{subLink.Subtitle}</span>
              </a>
              <br />
              <br />
              <br />
              <div>
                {subLink.options.map((option) => (
                  <div>
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
      )}
    </div>
  );
}

export default DropDown;

/* const Dropdown = ({ title, subLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="buttonNav"> {title} </button>
      {isOpen && (
        <div className="dropdown-content">
          {subLinks.map((subLink) => (
            <div className="dropdown-column">
              <a href={subLink.href} className="subtitle">
                <span className="subtitle">{subLink.Subtitle}</span>
              </a>
              <br />
              <br />
              <br />
              <div>
                {subLink.options.map((option) => (
                  <div>
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
      )}
    </div>
  );
};

export default Dropdown;
 */
