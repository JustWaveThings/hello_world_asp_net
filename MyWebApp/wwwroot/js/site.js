// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const root = document.getElementsByClassName('container')[1];
console.log(root);
const hello = () => {
	const h1 = document.createElement('h2');
	h1.textContent = 'JavaScript has entered the chat.';
	root.append(h1);
};

hello();
