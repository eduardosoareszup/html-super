const fs = require('fs');
const path = require('path');
const basedir = path.resolve(__dirname + '/');

const removeValue = (value, rule) => {
	while(value.indexOf(rule) != -1)
		value = value.replace(rule, '');
	
	return value;
}

const customTrim = (value) => {
	value = removeValue(value, '\t');
	value = removeValue(value, '\n');
	value = removeValue(value, '\r');

	return value;
}

const bufferFile = (pathFile) =>  {
	return fs.readFileSync(basedir + '\\' + pathFile);
}

const compiler = (pathFile) => {
	const BUFFER = bufferFile(pathFile);
	return BUFFER;
}

const simpleExample = '\\examples\\html-super\\simple.shtml';

const rawFile = customTrim(compiler(simpleExample).toString().trim());
const regexpTag = /main/;
console.log(rawFile);

const myRegExp = new RegExp(regexpTag, 'gm');
console.log(myRegExp.exec(rawFile));


