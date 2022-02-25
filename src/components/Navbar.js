import '../css/Navbar.css';

const Navbar = () => {
	return (
		<div id="navbarWrapper">
			<a className="navlinks" href="/">HOME</a>
			<a className="navlinks" href="/about">ABOUT</a>
			<a className="navlinks" href="/projects">PROJECTS</a>
			<a className="navlinks" href="/contact">CONTACT</a>
		</div>
	)
}

export default Navbar;