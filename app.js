const map = L.map('map').setView([5.8702, 8.5988], 9);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

coords = [[ 4.9527248, 8.3420241], [4.9314754, 8.3163863], [4.9397006, 8.4508901], [5.9625044, 8.7209934], [5.2547135, 8.3578267], [6.6661464, 9.1685048]];
	
images = ["img/1(1).jpeg", "img/2(2).jpeg", "img/3(3).jpg", "img/4(4).jpeg", "img/5(5).jpeg", "img/6.jpg"]

let l = coords.length;

infrast1 = document.querySelector('#infrast1');
infrast2 = document.querySelector('#infrast2');
infrast3 = document.querySelector('#infrast3');
infrast4 = document.querySelector('#infrast4');
infrast5 = document.querySelector('#infrast5');
infrast6 = document.querySelector('#infrast6');

infrasts = [ infrast1, infrast2, infrast3, infrast4, infrast5, infrast6]

for (let i = 0; i < l; i++) {
		//popups
		pop = L.popup({
			closeOnClick: true
		}).setContent('<img src=' + images[i] + ' style="height: 100px">');
	
	// markers
	marker = L.marker(coords[i]).addTo(map).bindPopup(pop);
	// labels
	tooltip = L.tooltip({
		permanent: true
	}).setContent();
	marker.bindTooltip(tooltip);

	// zoom in / fly to
	infrasts[i].addEventListener("mouseover", ()=> {
		map.flyTo(coords[i], 16);
	})


}