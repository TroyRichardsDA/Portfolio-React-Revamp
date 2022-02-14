


function Nav() {


    return (
        <nav>
            <div className="navbar">
                <a href="#header">Home</a>
                <div className='dropdown'>
                <i id="ddbtn" className="dropbtn fas fa-chevron-circle-down"></i>
                    <div className='dropdown-content'>
                        <ul>
                            <li className="nav-item"><a href=""><i className="fas fa-home"></i> Skills</a></li>
                            <li className="nav-item"><a href=""><i class="fas fa-code"></i> Projects</a></li>
                            <li className="nav-item"><a href=""><i class="fas fa-user"></i> About</a></li>
                            <li className="nav-item"><a href=""><i class="fas fa-address-card"></i> Contact</a></li>
                            <li className="nav-item"><a href="">Resume</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav