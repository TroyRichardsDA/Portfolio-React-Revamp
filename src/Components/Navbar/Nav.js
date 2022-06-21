import { useCallback, useState, useEffect } from "react";
import { HiMoon, HiOutlineMoon } from "react-icons/hi";
import {
  CloseBtn,
  Container,
  DropdownBtn,
  DropdownContent,
  HomeBtn,
  Link,
  Navigation,
  NavItem,
  NavList,
  NavListDesktop,
  Wrapper,
} from "./NavStyles";
import { motion } from "framer-motion";

function Nav(props) {
  const { setDisplayModal, light, dark, setTheme, isDark, setIsDark } = props;
  const navItems = ["about", "skills", "projects", "contact"];
  const displayNavItems = navItems.map((item, id) => {
    const firstLetter = item.split("").slice(0, 1);
    const capitalize = firstLetter.join("").toUpperCase() + item.slice(1);
    const isContact = item === "contact";

    return (
      <NavItem key={id}>
        {!isContact ? (
          <Link href={`#${item}`} onClick={() => closeMenu()}>
            <i className="fas fa-user"></i> {capitalize}
          </Link>
        ) : (
          <Link
            href="#"
            onClick={() => {
              closeMenu();
              setDisplayModal(true);
            }}
          >
            <i className="fas fa-user"></i> {capitalize}
          </Link>
        )}
      </NavItem>
    );
  });

  function showMenu() {
    document.getElementById("dd-content").style.cssText = `

    width: 100%;
    `;
  }

  function closeMenu() {
    document.getElementById("dd-content").style.cssText = `
    width: -100px;
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

  return (
    <Container id="nava">
      <Wrapper>
        <HomeBtn href="">
          <motion.svg
            viewBox="0 0 174 174"
            width="50px"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M84.2033 114.032C92.4761 97.9913 102.902 84.0531 115.481 72.217C111.953 70.0615 109.796 68.8028 109.012 68.4409C105.525 66.8326 102.296 66.1883 99.3253 66.508C96.4859 66.7826 93.4708 67.2931 90.2802 68.0394C85.5595 69.2418 81.412 69.0187 77.8379 67.3702C76.356 66.6866 75.3767 65.8653 74.9002 64.9062C74.4676 63.8617 74.3402 62.958 74.5179 62.195C74.6956 61.432 75.0929 60.3479 75.7098 58.9425C76.3266 57.5372 76.7459 56.4104 76.9676 55.5621C77.1893 54.7138 77.4982 53.9057 77.8942 53.1378C78.2903 52.3699 79.4281 51.7329 81.3078 51.2269C92.149 48.2004 105.023 50.1249 119.93 57.0005C122.807 58.3274 125.617 59.7822 128.362 61.3651L130.596 59.5439C130.724 60.3422 130.873 61.4141 131.042 62.7596L133.526 63.9055C141.721 67.6851 151.536 70.2054 162.971 71.4665C163.757 71.6175 164.28 71.7534 164.542 71.874C165.937 72.5173 166.26 73.5642 165.512 75.0147C164.764 76.4651 163.209 77.5964 160.848 78.4084C148.777 83.1913 136.335 82.5221 123.521 76.4006C117.073 83.6716 110.377 93.0985 103.432 104.682C96.4866 116.265 92.5088 122.826 91.4984 124.367C90.488 125.908 89.6747 127.275 89.0587 128.47C88.4426 129.664 87.6248 132.192 86.6052 136.052C85.5856 139.912 84.9438 142.098 84.6797 142.61C83.4036 145.084 81.458 145.718 78.8427 144.512C74.8327 142.662 72.8926 136.381 73.0223 125.668C72.9426 123.73 73.2548 122.078 73.9589 120.713C74.707 119.263 75.4297 118.698 76.1271 119.02C76.8245 119.342 77.3006 120.406 77.5555 122.214C77.8975 124.061 78.1992 125.045 78.4608 125.166C78.7223 125.287 79.0291 125.006 79.3811 124.323L84.2033 114.032Z"
              fill="#00CEC2"
              stroke="#00CEC2"
            />
            <motion.path
              d="M65.8553 86.744C70.5593 65.528 72.9113 49.592 72.9113 38.936V35.192C72.9113 33.56 73.2953 32.36 74.0633 31.592C74.9273 30.728 75.7913 30.248 76.6553 30.152C77.6153 29.96 79.4393 29.864 82.1273 29.864C84.9113 29.864 87.7913 30.872 90.7673 32.888C93.8393 34.904 95.3753 37.64 95.3753 41.096C95.3753 41.768 94.9433 45.944 94.0793 53.624C93.2153 61.304 92.6393 71.144 92.3513 83.144C95.6153 81.8 98.2073 80.408 100.127 78.968C102.143 77.432 103.487 76.664 104.159 76.664C105.215 76.664 105.743 77.672 105.743 79.688C105.743 81.608 104.255 84.104 101.279 87.176C98.3033 90.152 95.3273 92.6 92.3513 94.52C92.3513 96.632 92.4473 99.992 92.6393 104.6C92.9273 104.408 93.3113 104.312 93.7913 104.312C94.3673 104.312 94.8953 104.456 95.3753 104.744C95.9513 105.032 96.4313 105.368 96.8153 105.752C97.2953 106.136 97.8233 106.712 98.3993 107.48C98.9753 108.152 99.4073 108.68 99.6953 109.064C99.9833 109.448 100.367 110.024 100.847 110.792C101.327 111.464 101.615 111.848 101.711 111.944C103.439 114.536 104.303 116.6 104.303 118.136C104.303 119.576 104.015 121.256 103.439 123.176C101.231 128.84 99.7433 133.784 98.9753 138.008C98.5913 140.024 97.4393 141.032 95.5193 141.032C93.4073 141.032 91.9193 140.456 91.0553 139.304C90.2873 138.248 89.6633 137.384 89.1833 136.712C88.7993 136.04 88.4153 135.08 88.0313 133.832C87.7433 132.584 87.5033 131.624 87.3113 130.952C87.1193 130.184 86.9273 129.032 86.7353 127.496C86.4473 125.48 86.2553 123.464 86.1593 121.448L86.0153 119.144C85.6313 114.536 85.1513 107.528 84.5753 98.12C82.0793 98.984 78.2393 99.512 73.0553 99.704C71.5193 106.616 69.9353 113 68.3033 118.856C66.7673 124.616 64.1753 129.224 60.5273 132.68C56.9753 136.136 52.6073 137.864 47.4233 137.864C45.8873 137.864 44.0633 137.624 41.9513 137.144C29.5673 133.784 21.1193 125.96 16.6073 113.672C15.4553 110.504 14.8793 107.72 14.8793 105.32C14.8793 99.56 17.2793 95.624 22.0793 93.512C32.4473 88.808 42.5753 86.456 52.4633 86.456L65.8553 86.744ZM83.9993 85.304C83.6153 76.856 83.2313 63.992 82.8473 46.712C82.0793 51.128 80.8793 57.752 79.2473 66.584C77.7113 75.416 76.5593 82.04 75.7913 86.456C79.4393 86.072 82.1753 85.688 83.9993 85.304ZM53.3273 99.848C41.6153 99.848 32.2553 100.664 25.2473 102.296C21.3113 103.064 19.3433 104.504 19.3433 106.616C19.3433 108.248 20.6393 110.36 23.2313 112.952C25.8233 115.544 29.1833 117.56 33.3113 119C37.4393 120.344 40.8953 121.016 43.6793 121.016C46.4633 121.016 48.7673 120.536 50.5913 119.576C52.5113 118.616 53.9993 117.608 55.0553 116.552C56.2073 115.496 57.3113 113.768 58.3673 111.368C59.7113 108.392 61.1033 104.552 62.5433 99.848H53.3273Z"
              fill="#00FFDD"
              stroke="#00FFDD"
            />
          </motion.svg>
        </HomeBtn>
        <Navigation>
          <DropdownBtn
            onClick={() => showMenu()}
            className="fas fa-soild fa-bars"
          ></DropdownBtn>
          <DropdownContent id="dd-content">
            <NavList>
              <CloseBtn onClick={() => closeMenu()}>Close</CloseBtn>
              {displayNavItems}
            </NavList>
          </DropdownContent>
          <NavListDesktop>{displayNavItems}</NavListDesktop>
          {isDark ? (
            <HiMoon className="moon" onClick={() => toggleTheme()} />
          ) : (
            <HiOutlineMoon className="moon" onClick={() => toggleTheme()} />
          )}
        </Navigation>
      </Wrapper>
    </Container>
  );
}

export default Nav;
