function Nav() {

    let prevScroll = window.pageYOffset

    function showHide() {
        document.getElementById('dd-content').classList.toggle('open')
    }

    function closeBtn() {
        document.getElementById('dd-content').classList.remove('oprn')
    }

    window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
            let dropdowns = document.getElementsByClassName('dropdown-content')
            let i;
            for ( i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i]
                if (openDropdown.classList.contains('open')) {
                    openDropdown.classList.remove('open')
                }
            }
        }
    }

    window.onscroll = function() {
        let currentPos = window.pageYOffset
        if (prevScroll > currentPos) {
            document.getElementById('nava').style.top = '0'
        } else {
            document.getElementById('nava').style.top = '-200px'
        }
        prevScroll = currentPos
    }


    return (
        <nav id="nava">
            <div className="navbar">
                <a href="#header" className='homeBtn'>Home</a>
                <div className='dropdown'>
                <i onClick={showHide} className="dropbtn fas fa-soild fa-bars"></i>
                    <div id='dd-content' className='dropdown-content'>
                        <ul>
                            <li className="nav-item close-button"> <a onClick={closeBtn} href="#">Close</a></li>
                            <li className="nav-item"><a href="#skills"> Skills</a></li>
                            <li className="nav-item"><a href="#projects"> Projects</a></li>
                            <li className="nav-item"><a href="#about"> About</a></li>
                            <li className="nav-item"><a href="#contact"> Contact</a></li>
                            <li className="nav-item"><a href=""> Resume</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav