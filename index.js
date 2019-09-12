const app = require('./examples/html-super/simple');

const compiler = (element) => {
	const keys = Object.keys(element);
	let html = '';

	keys.forEach((key, index) => {
		html += `<${key}>`;
		if (!!element[key].children) {
			element[key].children.forEach((child) => {
				const elementName = Object.keys(child);
				html += `<${elementName}`;
				if (!!child[elementName].props) {
					const keysProps = Object.keys(child[elementName].props);
					keysProps.forEach((prop) => {
						html += ` ${prop}='${child[elementName].props[prop]}'`;
					});
				}
				html += `></${elementName}>`;
			}); 
		}
		html += `</${key}>`;
	});
	console.log(html);
};

compiler(app.Home('Eduardo'));