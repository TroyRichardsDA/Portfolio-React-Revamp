import { ReactComponent as Logo } from "../svgs/logo.svg";

function Nav(props) {
  const { setDisplayModal, light, dark, setTheme, isDark, setIsDark } = props;
  const navItems = ["about", "projects", "contact"];

  function showMenu() {
    document.getElementById("dd-content").style.cssText = `
    width: 100%;
    `;
  }

  function closeMenu() {
    document.getElementById("dd-content").style.cssText = `
    width:  0;
    `;
  }

  function toggleTheme() {
    if (!isDark) {
      setTheme(dark);
      setIsDark(true);
      document.body.classList += " dark";
    } else {
      setTheme(light);
      setIsDark(false);
      document.body.classList.remove("dark");
    }
  }

  const displayNavItems = navItems.map((item, id) => {
    const firstLetter = item.split("").slice(0, 1);
    const capitalize = firstLetter.join("").toUpperCase() + item.slice(1);
    const isContact = item === "contact";

    return (
      <li className="navbar__link" key={id}>
        {!isContact ? (
          <a
            className="navbar__link--text"
            href={`#${item}`}
            onClick={() => closeMenu()}
          >
            <i className="fas fa-user"></i> {capitalize}
          </a>
        ) : (
          <a
            className="navbar__link--text"
            href="#modal"
            onClick={() => {
              closeMenu();
              setDisplayModal(true);
            }}
          >
            <i className="fas fa-user"></i> {capitalize}
          </a>
        )}
      </li>
    );
  });

  return (
    <nav className="navbar" id="nava">
      <div className="navbar__container container">
        <a className="navbar__logo" href="/">
          <Logo />
        </a>
        <div className="navbar__right">
          <i
            onClick={() => showMenu()}
            className="navbar__icon--dropdown fas fa-soild fa-bars"
          ></i>
          <div className="navbar__dropdown" id="dd-content">
            <ul className="navbar__links">
              <li className="navbar__closebtn" onClick={() => closeMenu()}>
                Close
              </li>
              {displayNavItems}
            </ul>
          </div>
          <ul className="navbar__links--desktop">{displayNavItems}</ul>
          {isDark ? (
            <i
              className="navbar__moon fa-solid fa-moon"
              onClick={toggleTheme}
            ></i>
          ) : (
            <i
              className="navbar__moon fa-solid fa-cloud-sun"
              onClick={toggleTheme}
            ></i>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
