export default function Navbar() {
	return (
		<header className="header">
			<nav className="navBar">
				<div className="container">
					<div className="navBar-collapse">
						<ul className="navBar-nav">
							<li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
							<li className="nav-item"><a className="nav-link" href="#">Productos</a></li>
							<li className="nav-item"><a className="nav-link" href="#">Quienes somos</a></li>
						</ul>
					</div>
					<a className="navBar-Brand" href="index.js">Mulana</a>
					<div className="navBar-collapse">
						<ul className="navBar-nav">
							<li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
						</ul>
						<form role="search">
							<input className="search" type="text" placeholder="Search.." aria-label="Search" />
						</form>
					</div>
				</div>

			</nav>
		</header>
	);
}