/*bubble js*/
$(function(){
const bubbleGen = document.querySelector( "#bubbleGen1" );
const colorful = document.querySelector( "#colorfu" );
const bubbles = new Map();
const colors = [
	"red","blue","white","orange","green","purple","pink","yellow","lightgreen",
	"lightblue","lightpink","violet","lime","turquoise","hotpink",
];

let bubbleIdMax = 0;
let secForNextBubble = 0;
let currentTime = Date.now();
let previousTime = currentTime;
let bubbleGenX;
let bubbleGenY;
let bubbleGenW;
let dragging;

function lg( a ) { return console.log.apply( console, arguments ), a; }

window.onresize = () => {
	const bcr = bubbleGen.getBoundingClientRect();

	bubbleGenX = bcr.left + bcr.width / 2;
	bubbleGenY = bcr.top + bcr.width / 2;
	bubbleGenW = bcr.width;
};

bubbleGen.onmousedown = () => {
	dragging = true;
	bubbleGen.classList.add( "dragging" );
};

document.onmousemove = e => {
	if ( dragging ) {
		const st = bubbleGen.style;

		bubbleGenX += e.movementX;
		bubbleGenY += e.movementY;
		st.left = bubbleGenX + "px";
		st.top = bubbleGenY + "px";
	}
};
document.onmouseup = e => {
	if ( dragging ) {
		dragging = false;
		bubbleGen.classList.remove( "dragging" );
	}
};

function createBubble() {
	const bb = document.createElement( "bubble" ),
		st = bb.style,
		id = ++bubbleIdMax;

	bb.className = "bubble";
	bb.dataset.id = id;
	bb.dataset.speed = 2 + Math.random();
	bb.dataset.poptime = currentTime + ( 3 + 2 * Math.random() ) * 1000;
	bb.dataset.wave = Math.random();
	st.top = bubbleGenY + "px";
	st.left = bubbleGenX + ( bubbleGenW / -2 + Math.random() * bubbleGenW ) + "px";
	st.width =
	st.height = "0px";
	//if ( colorful.checked ) {
		st.backgroundColor = colors[ Math.floor( colors.length * Math.random() ) ];
	//}
	bubbles.set( id, bb );
	document.body.append( bb );
}

function frame() {
	currentTime = Date.now();
	if ( currentTime - previousTime > secForNextBubble * 1000 ) {
		createBubble();
		previousTime = currentTime;
		secForNextBubble = .1 * Math.random();
	}
	bubbles.forEach( ( bb, id ) => {
		const st = bb.style,
			y = parseFloat( st.top ),
			x = parseFloat( st.left ),
			w = parseFloat( st.width ),
			poptime = +bb.dataset.poptime,
			bbWave = +bb.dataset.wave,
			yInc = +bb.dataset.speed,
			wInc = .2;

		st.top = y - wInc / 2 - yInc + "px";
		st.left = x - wInc / 2 + ( w / 64 * Math.sin( bbWave ) ) + "px";
		st.width =
		st.height = w + wInc + "px";
		bb.dataset.wave = bbWave + .1;
		bb.dataset.speed = Math.max( .04, yInc - .005 );
		if ( poptime < currentTime ) {
			bb.remove();
			bubbles.delete( id );
		} else if ( poptime - 1 * 1000 < currentTime ) {
			bb.classList.add( "pop" );
		}
	} );
	requestAnimationFrame( frame );
}
// run ................................................
window.onresize();
frame();
});

/*bubble2*/
$(function(){
const bubbleGen = document.querySelector( "#bubbleGen2" );
const colorful = document.querySelector( "#colorfu" );
const bubbles = new Map();
const colors = [
	"red","blue","white","orange","green","purple","pink","yellow","lightgreen",
	"lightblue","lightpink","violet","lime","turquoise","hotpink",
];

let bubbleIdMax = 0;
let secForNextBubble = 0;
let currentTime = Date.now();
let previousTime = currentTime;
let bubbleGenX;
let bubbleGenY;
let bubbleGenW;
let dragging;

function lg( a ) { return console.log.apply( console, arguments ), a; }

window.onresize = () => {
	const bcr = bubbleGen.getBoundingClientRect();

	bubbleGenX = bcr.left + bcr.width / 2;
	bubbleGenY = bcr.top + bcr.width / 2;
	bubbleGenW = bcr.width;
};

bubbleGen.onmousedown = () => {
	dragging = true;
	bubbleGen.classList.add( "dragging" );
};

document.onmousemove = e => {
	if ( dragging ) {
		const st = bubbleGen.style;

		bubbleGenX += e.movementX;
		bubbleGenY += e.movementY;
		st.left = bubbleGenX + "px";
		st.top = bubbleGenY + "px";
	}
};
document.onmouseup = e => {
	if ( dragging ) {
		dragging = false;
		bubbleGen.classList.remove( "dragging" );
	}
};

function createBubble() {
	const bb = document.createElement( "bubble" ),
		st = bb.style,
		id = ++bubbleIdMax;

	bb.className = "bubble";
	bb.dataset.id = id;
	bb.dataset.speed = 2 + Math.random();
	bb.dataset.poptime = currentTime + ( 3 + 2 * Math.random() ) * 1000;
	bb.dataset.wave = Math.random();
	st.top = bubbleGenY + "px";
	st.left = bubbleGenX + ( bubbleGenW / -2 + Math.random() * bubbleGenW ) + "px";
	st.width =
	st.height = "0px";
	//if ( colorful.checked ) {
		st.backgroundColor = colors[ Math.floor( colors.length * Math.random() ) ];
	//}
	bubbles.set( id, bb );
	document.body.append( bb );
}

function frame() {
	currentTime = Date.now();
	if ( currentTime - previousTime > secForNextBubble * 1000 ) {
		createBubble();
		previousTime = currentTime;
		secForNextBubble = .1 * Math.random();
	}
	bubbles.forEach( ( bb, id ) => {
		const st = bb.style,
			y = parseFloat( st.top ),
			x = parseFloat( st.left ),
			w = parseFloat( st.width ),
			poptime = +bb.dataset.poptime,
			bbWave = +bb.dataset.wave,
			yInc = +bb.dataset.speed,
			wInc = .2;

		st.top = y - wInc / 2 - yInc + "px";
		st.left = x - wInc / 2 + ( w / 64 * Math.sin( bbWave ) ) + "px";
		st.width =
		st.height = w + wInc + "px";
		bb.dataset.wave = bbWave + .1;
		bb.dataset.speed = Math.max( .04, yInc - .005 );
		if ( poptime < currentTime ) {
			bb.remove();
			bubbles.delete( id );
		} else if ( poptime - 1 * 1000 < currentTime ) {
			bb.classList.add( "pop" );
		}
	} );
	requestAnimationFrame( frame );
}

// run ................................................
window.onresize();
frame();
});


/*screen js*/
$(function(){
const audio = document.getElementById("audio");
const go = document.getElementById("go");
const canvas = document.getElementById("canvas");

const start = document.querySelector("#start");
//const play = document.querySelector(".play");
const soundpage = document.querySelector("#soundpage");

/*let safari = false;
if (navigator.vendor.toLowerCase().includes("apple")) {
	audio.hidden = false;
	document.body.classList.add("safari");
	start.innerText = "";
	safari = true;
}
*/
audio.addEventListener("click", () => {
	if (safari) {
		TweenLite.to(soundpage, 0.25, {
			ease: Power4.easeIn,
			opacity: 0,
			onComplete() {
				//spoundpage.style.display = "none";
			}
		});
		// setTimeout(() => {
		firstPlay = false;
		// audio.load();
		// let promise = audio.play();
		audio.volume = 0.5;
		// context = new AudioContext();
		context = new (window.AudioContext || window.webkitAudioContext)();

		src = context.createMediaElementSource(audio);
		analyser = context.createAnalyser();
		src.connect(analyser);
		analyser.connect(context.destination);
		analyser.fftSize = fftSize;
		analyser.smoothingTimeConstant = 0.5;
		analyser.maxDecibels = -10;
		bufferLength = analyser.frequencyBinCount;
		dataArray = new Uint8Array(bufferLength);
		isPause = false;
		update();
		// }, 2000);
		timeOverlay.classList.remove("pause");
		timeOverlay.classList.add("play");
	}
});

start.addEventListener("click", function() {
	TweenLite.to(soundpage, 0.25, {
		ease: Power4.easeIn,
		opacity: 0,
		onComplete() {
			soundpage.style.display = "none";
		}
	});
	// setTimeout(() => {
	firstPlay = false;
	audio.load();
	audio.play();
	audio.volume = 0.5;
	context = new AudioContext();

	src = context.createMediaElementSource(audio);
	analyser = context.createAnalyser();
	src.connect(analyser);
	analyser.connect(context.destination);
	analyser.fftSize = fftSize;
	analyser.smoothingTimeConstant = 0.5;
	analyser.maxDecibels = -10;
	bufferLength = analyser.frequencyBinCount;
	dataArray = new Uint8Array(bufferLength);
	isPause = false;
	update();
	// }, 2000);
	timeOverlay.classList.remove("pause");
	timeOverlay.classList.add("play");
});

const timeOverlay = document.querySelector("#overlay .time");
const colorOverlay = document.querySelector("#overlay .color");
const playBtn = document.querySelector("#overlay .time .btn.play");
const pauseBtn = document.querySelector("#overlay .time .btn.pause");

const alphaRange = document.querySelector("#range input");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let WIDTH = canvas.width;
let HEIGHT = canvas.height;
const ctx = canvas.getContext("2d");

let simplex = new SimplexNoise();

let context;
let src;
let analyser;
let bufferLength;
let dataArray;

let order = [1, 2, 0]; /*カラー*/

let nbParticles = 600;
let fftSize = 2048;

let radius;
let dPI = Math.PI * 2;

class Circle {
	constructor(index) {
		this.index = index;

		this.xR = Math.random();
		this.yR = Math.random();

		this.i = 0;
		this.value = 0;
	}

	update() {
		if (3 === this.index) {
			TweenMax.to(this, 2, {
				ease: Power4.easeOut,
				value: dataArray[this.index]
			});
		} else {
			this.cachedValue = this.value;
			this.value = dataArray[this.index];
		}

		if (this.value !== this.cachedValue) {
			this.xC = radius * (2 * this.xR) * Math.cos(this.index + this.i) + WIDTH / 2;
			this.yC =
				radius * (2 * this.yR) * Math.sin(this.index + this.i) + HEIGHT / 2;

			this.p = (210 - this.value) * 0.5;

			this.y = simplex.noise2D(this.xR, this.i) * this.p + this.yC;
			this.x = simplex.noise2D(this.yR, this.i) * this.p + this.xC;

			this.i += 0.01;
		}
	}

	draw() {
		if (this.value !== this.cachedValue) {
			this.rgbArray = [
				this.value + 25 * (this.index / bufferLength),
				500 * (this.index / bufferLength),
				50
			];
			this.rgb = `rgb(${Math.round(this.rgbArray[order[0]])},${Math.round(
				this.rgbArray[order[1]]
			)},${Math.round(this.rgbArray[order[2]])})`;
		}

		drawCircle(
			Math.round(this.x),
			Math.round(this.y),
			this.value * 0.17,/*球体のサイズ*/
      //this.value * 0.1,
			this.rgb
		);
	}
}

background("#000");

let circles = [];
createCircles();

function createCircles() {
	for (let i = 0; i < nbParticles; ++i) {
		circles.push(new Circle(i));
	}
}

function showCircles() {
	for (let i = 0; i < circles.length; ++i) {
		circles[i].update();
		circles[i].draw();
	}
}

let isPause = false;

pauseBtn.addEventListener("click", function() {
	audio.pause();
	isPause = true;
	timeOverlay.classList.remove("play");
	timeOverlay.classList.add("pause");
});

let firstPlay = true;

playBtn.addEventListener("click", function() {
	audio.play();
	isPause = false;
	update();
	timeOverlay.classList.remove("pause");
	timeOverlay.classList.add("play");
});

let alpha = 0.5;

function update() {
	if (isPause === false) {
		analyser.getByteFrequencyData(dataArray);
		background(`rgba(0,0,0,${alpha})`);
		radius = circles[3].value;
		showCircles();
		requestAnimationFrame(update);
	}
}

function background(color) {
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

function drawCircle(x, y, size, fill) {
	ctx.save();
	ctx.beginPath();
	ctx.fillStyle = fill;
	ctx.translate(x, y);
	ctx.arc(0, 0, size, 0, dPI);
	ctx.fill();
	ctx.closePath();
	ctx.restore();
}

alphaRange.addEventListener("input", function() {
	alpha = alphaRange.value / 100;
	alpha = alphaRange.value / 100;
});

window.addEventListener("resize", function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	WIDTH = canvas.width;
	HEIGHT = canvas.height;
	background("#000");
});

function openFullscreen() {
	if (document.body.requestFullscreen) {
		document.body.requestFullscreen();
	} else if (document.body.mozRequestFullScreen) {
		/* Firefox */
		document.body.mozRequestFullScreen();
	} else if (document.body.webkitRequestFullscreen) {
		/* Chrome, Safari and Opera */
		document.body.webkitRequestFullscreen();
	} else if (document.body.msRequestFullscreen) {
		/* IE/Edge */
		document.body.msRequestFullscreen();
	}
}

colorOverlay.addEventListener("click", function() {
	order = _.shuffle(order);
});
});

/**/
/*mirror ball js*/
function myFunction() {
	var myButton = document.getElementById(".disco-ball");
	myButton.textContent = "This Button Works!";
}
