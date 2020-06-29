/** @format */

const topBorder = document.querySelector('.top');
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const bottom = document.querySelector('.bottom');
const topLeft = document.querySelector('.top-left');
const topRight = document.querySelector('.top-right');
const bottomLeft = document.querySelector('.bottom-left');
const bottomRight = document.querySelector('.bottom-right');
const container = document.querySelector('.container');
const box = document.querySelector('.box');
let isResize = false;

box.addEventListener('mousedown', (e) => {
	let shiftX = e.clientX - box.getBoundingClientRect().left;
	let shiftY = e.clientY - box.getBoundingClientRect().top;
	if (isResize) return;
	container.addEventListener('mousemove', mousemove);
	container.addEventListener('mouseup', mouseup);
	function mousemove(e) {
		box.style.left = e.clientX - shiftX + 'px';
		box.style.top = e.clientY - shiftY + 'px';
	}
	function mouseup(e) {
		container.removeEventListener('mousemove', mousemove);
	}
});

right.addEventListener('mousedown', (e) => {
	let startPosition = box.getBoundingClientRect().left;
	isResize = true;
	container.addEventListener(
		'mousemove',
		(moveright = (e) => {
			if (e.clientX - startPosition < 10) return;
			box.style.width = e.clientX - box.getBoundingClientRect().left + 'px';
		})
	);
	container.addEventListener('mouseup', (e) => {
		container.removeEventListener('mousemove', moveright);
		isResize = false;
	});
});

left.addEventListener('mousedown', (e) => {
	isResize = true;
	let initWidth = box.clientWidth;
	console.log(initWidth);
	let initPosition = box.getBoundingClientRect().left;
	let endPosition = box.getBoundingClientRect().right;
	container.addEventListener(
		'mousemove',
		(moveleft = (e) => {
			if (endPosition - e.clientX < 10) return;
			box.style.width = initWidth + (initPosition - e.clientX) + 'px';
			box.style.left = e.clientX + 'px';
		})
	);
	container.addEventListener('mouseup', (e) => {
		container.removeEventListener('mousemove', moveleft);
		isResize = false;
	});
});

bottom.addEventListener('mousedown', (e) => {
	isResize = true;
	let startPosition = box.getBoundingClientRect().top;
	container.addEventListener(
		'mousemove',
		(movedown = (e) => {
			if (e.clientY - startPosition < 10) return;
			box.style.height = e.clientY - box.getBoundingClientRect().top + 'px';
		})
	);
	container.addEventListener('mouseup', (e) => {
		container.removeEventListener('mousemove', movedown);
		isResize = false;
	});
});

topBorder.addEventListener('mousedown', (e) => {
	isResize = true;

	let initHeight = box.clientHeight;
	initPosition = box.getBoundingClientRect().top;
	endPosition = box.getBoundingClientRect().bottom;
	container.addEventListener(
		'mousemove',
		(movetop = (e) => {
			if (endPosition - e.clientY < 10) return;
			box.style.height = initHeight + (initPosition - e.clientY) + 'px';
			box.style.top = e.clientY + 'px';
		})
	);
	container.addEventListener('mouseup', (e) => {
		container.removeEventListener('mousemove', movetop);
		isResize = false;
	});
});

bottomRight.addEventListener('mousedown', (e) => {
	isResize = true;
	let startX = box.getBoundingClientRect().left,
		startY = box.getBoundingClientRect().top;
	container.addEventListener(
		'mousemove',
		(moveBottomRight = (e) => {
			if (e.clientX - startX < 9) return;
			if (e.clientY - startY < 9) return;
			box.style.width = e.clientX - box.getBoundingClientRect().left + 'px';
			box.style.height = e.clientY - box.getBoundingClientRect().top + 'px';
		})
	);
	container.addEventListener('mouseup', (e) => {
		container.removeEventListener('mousemove', moveBottomRight);
		isResize = false;
	});
});

bottomLeft.addEventListener('mousedown', (e) => {
	isResize = true;
	let endX = box.getBoundingClientRect().right,
		startY = box.getBoundingClientRect().top,
		initWidth = box.clientWidth,
		initPosition = box.getBoundingClientRect().left;
	container.addEventListener(
		'mousemove',
		(moveBottomLeft = (e) => {
			if (endX - e.clientX < 9) return;
			if (e.clientY - startY < 9) return;
			box.style.width = initWidth + (initPosition - e.clientX) + 'px';
			box.style.left = e.clientX + 'px';
			box.style.height = e.clientY - box.getBoundingClientRect().top + 'px';
		})
	);
	container.addEventListener('mouseup', (e) => {
		container.removeEventListener('mousemove', moveBottomLeft);
		isResize = false;
	});
});

topRight.addEventListener('mousedown', (e) => {
	isResize = true;
	let endY = box.getBoundingClientRect().bottom,
		startX = box.getBoundingClientRect().left,
		initHeight = box.clientHeight,
		initPosition = box.getBoundingClientRect().top;
	container.addEventListener(
		'mousemove',
		(moveTopRight = (e) => {
			if (endY - e.clientY < 9) return;
			if (e.clientX - startX < 9) return;
			box.style.height = initHeight + (initPosition - e.clientY) + 'px';
			box.style.top = e.clientY + 'px';
			box.style.width = e.clientX - box.getBoundingClientRect().left + 'px';
		})
	);
	container.addEventListener('mouseup', (e) => {
		container.removeEventListener('mousemove', moveTopRight);
		isResize = false;
	});
});

topLeft.addEventListener('mousedown', (e) => {
	isResize = true;
	let endY = box.getBoundingClientRect().bottom,
		endX = box.getBoundingClientRect().right,
		startX = box.getBoundingClientRect().left,
		initHeight = box.clientHeight,
		initWidth = box.clientWidth,
		initPositionY = box.getBoundingClientRect().top,
		initPositionX = box.getBoundingClientRect().left;
	container.addEventListener(
		'mousemove',
		(moveTopLeft = (e) => {
			if (endY - e.clientY < 9) return;
			if (endX - e.clientX < 9) return;
			box.style.height = initHeight + (initPositionY - e.clientY) + 'px';
			box.style.top = e.clientY + 'px';
			box.style.width = initWidth + (initPositionX - e.clientX) + 'px';
			box.style.left = e.clientX + 'px';
		})
	);
	container.addEventListener('mouseup', (e) => {
		container.removeEventListener('mousemove', moveTopLeft);
		isResize = false;
	});
});
