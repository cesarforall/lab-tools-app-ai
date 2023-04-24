// Función para crear el header
const createHeader = links => {
	console.log(links)
	// Crear un elemento header
	const header = document.createElement('header');
	header.classList.add('header');

	// Crear un título
	const title = document.createElement('h1');
	title.innerText = `${links.index[0].title}`;
	title.classList.add('header__title');
	header.appendChild(title);

	// Crear un elemento nav
	const nav = document.createElement('nav');
	nav.id = 'navLinks';
	nav.classList.add('header__nav');

	// Crear una lista con los enlaces
	const list = document.createElement('ul');
	list.classList.add('header__nav-list');
	links.apps.forEach(link => {
		const item = document.createElement('li');
		item.classList.add('header__nav-item');
		const anchor = document.createElement('a');
		anchor.innerText = link.title;
		anchor.href = link.url;
		anchor.classList.add('header__nav-link');
		item.appendChild(anchor);
		list.appendChild(item);
	});

	// Agregar la lista al elemento nav
	nav.appendChild(list);
	header.appendChild(nav);

	return header;
};

// Agregar el header a la página
const header = createHeader(links);
document.body.appendChild(header);

// Agregar el contenido principal a la página
const main = document.createElement('main');
main.classList.add('main');
const content = document.createElement('p');
content.innerText = 'Contenido principal de la página';
content.classList.add('main__content');
main.appendChild(content);
document.body.appendChild(main);
