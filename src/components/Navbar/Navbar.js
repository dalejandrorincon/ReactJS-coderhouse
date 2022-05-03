import CartIcon from "../CartIcon/CartIcon";
export default function Navbar() {
	return (
		<header className="header">
			<nav className="navBar">
				<div className="container">
					<div className="navBar-collapse">
						<ul className="navBar-nav">
							<li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
							<li className="nav-item"><a className="nav-link" href="#">Productos</a></li>
							<li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
						</ul>
					</div>
					<a className="navBar-Brand" href="index.js">Mulana</a>
					<div className="navBar-collapse">
						<form role="search">
							<input className="search" type="text" placeholder="Search.." aria-label="Search" />
						</form>
						<ul className="navBar-nav">
							<li className="nav-item"><CartIcon count={13}/></li>
						</ul>
					</div>
				</div>

			</nav>
		</header>
	);
}