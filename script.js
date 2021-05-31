let a;
let time;
let date;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    time = (a.getHours() < 10 ? '0' : '') + a.getHours() + ":" + (a.getMinutes() < 10 ? '0' : '') + a.getMinutes() + ":" + (a.getSeconds() < 10 ? '0' : '') + a.getSeconds()
    document.getElementById('time').innerHTML = time + " on " + date;
}, 1000);
setInterval(() => {
	d = new Date(); 
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	hr_rotation = 30 * hr + min / 2; 
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;

	hour.style.transform = `rotate(${hr_rotation}deg)`;
	minute.style.transform = `rotate(${min_rotation}deg)`;
	second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
