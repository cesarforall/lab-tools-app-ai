const links = { index: [], apps: [] };
for (const route of routes) {
	const { path, type, name } = route;
	if (type === 'index') links.index.push({ title: name, url: path });
	if (type === 'app') links.apps.push({ title: name, url: path });
}
