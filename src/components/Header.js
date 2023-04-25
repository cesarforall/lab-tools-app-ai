// Función para crear el header
// const createHeader = links => {
// 	console.log(links)
// 	Crear un elemento header
// 	const header = document.createElement('header');
// 	header.classNameList.add('header');

// 	Crear un título
// 	const title = document.createElement('h1');
// 	title.innerText = `${links.index[0].title}`;
// 	title.classNameList.add('header__title');
// 	header.appendChild(title);

// 	Crear un elemento nav
// 	const nav = document.createElement('nav');
// 	nav.id = 'navLinks';
// 	nav.classNameList.add('header__nav');

// 	Crear una lista con los enlaces
// 	const list = document.createElement('ul');
// 	list.classNameList.add('header__nav-list');
// 	links.apps.forEach(link => {
// 		const item = document.createElement('li');
// 		item.classNameList.add('header__nav-item');
// 		const anchor = document.createElement('a');
// 		anchor.innerText = link.title;
// 		anchor.href = link.url;
// 		anchor.classNameList.add('header__nav-link');
// 		item.appendChild(anchor);
// 		list.appendChild(item);
// 	});

// 	Agregar la lista al elemento nav
// 	nav.appendChild(list);
// 	header.appendChild(nav);

// 	return header;
// };

// Agregar el header a la página
// const header = createHeader(links);
// document.body.appendChild(header);

// Agregar el contenido principal a la página
// const main = document.createElement('main');
// main.classNameList.add('main');
// const content = document.createElement('p');
// content.innerText = 'Contenido principal de la página';
// content.classNameList.add('main__content');
// main.appendChild(content);
// document.body.appendChild(main);

const Header = () => {
	return (
		<>
			<header className='header'>
				<nav className='navbar is-transparent has-shadow' role='navigation' aria-label='main navigation'>
					<div className='container is-max-widescreen'>
						<div className='navbar-brand'>
							<a className='navbar-item' href='../../index.html'>
								<strong>Herramientas LAB</strong>
							</a>
							<a className='navbar-item' href='index.html'>
								|
							</a>
							<a className='navbar-item' href='../../index.html'>
								Comentarios
							</a>
							<a className='navbar-item' href='../../pages/versions.html'>
								Versiones
							</a>
							<a id='zlab-logo' className='navbar-item  is-tab is-active' href='../../apps/spare-parts-app/index.html'>
								<span>Z</span>LAB Repuestos
							</a>
						</div>
					</div>
				</nav>
				<div className='separator'></div>
			</header>
		</>
	);
};

export default Header;
