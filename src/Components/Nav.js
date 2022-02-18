function Nav({logo}) {

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
            document.getElementById('nava').style.top = '-1000px'
        }
        prevScroll = currentPos
    }


    return (
        <nav id="nava">
            <div className="navbar">
                <a href="" className='homeBtn'>
                    <img id='logo' src={logo} />
                </a>
                <div className='dropdown'>
                <i onClick={showHide} className="dropbtn fas fa-soild fa-bars"></i>
                    <div id='dd-content' className='dropdown-content'>
                        <ul>
                            <li className="nav-item close-button"> <a onClick={closeBtn} >Close</a></li>
                            <li className="nav-item"><a href="#skills"><i class="fas fa-tasks"></i> Skills</a></li>
                            <li className="nav-item"><a href="#projects"><i class="fas fa-code"></i> Projects</a></li>
                            <li className="nav-item"><a href="#about"><i className="fas fa-user"></i>  About</a></li>
                            <li className="nav-item"><a href="#contact"><i class="fa-solid fa-address-card"></i> Contact</a></li>
                            <li className="nav-item resume-nav"><a href={require("../Resume/resume-file.pdf")} target="_blank"><i class="fa-solid fa-file"></i> Resume</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav