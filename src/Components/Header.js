export function Header() {
    
    return (
        <header>
            <div id='header' className="header-content">
                <p className="greeting">
                    <span>Hello, my name is </span>
                </p>
                <h2 className="name">
                    <span>T</span>roy <span>R</span>ichards
                </h2>
                <h1 className='hero-header'> I type on keyboards and make web things look good.</h1>
                <p className='hero-desc'>
                    I am a Frontend Developer with experience building and designing responsive websites.
                    I am currently looking for a position as a Frontend Developer.
                </p>
                <a href="#" className='header-resume'>Resume</a>
            </div>
        </header>
    )
}