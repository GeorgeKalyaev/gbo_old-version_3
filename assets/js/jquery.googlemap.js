ymaps.ready(init);
	var myMap,
	myPlacemark1;
	function init(){     
		myMap = new ymaps.Map("map", {
			center: [55.66346998, 38.00428024],
			zoom: 17
		});
		myMap.behaviors.disable([
        // 'drag',
        'scrollZoom'
        ]);
		myPin = new ymaps.GeoObjectCollection({}, {
			iconLayout: 'default#image',
			iconImageHref: 'C:/Users/Admin/Desktop/auto-servicing/assets/img/map.png',
			iconImageSize: [60, 64],
			iconImageOffset: [-22, -70]
		});
		myPlacemark1 = new ymaps.Placemark([55.66346998, 38.00428024], {
			balloonContentHeader: '<img src="C:/Users/Admin/Desktop/auto-servicing/assets/img/map.png" class="map__pic" alt=""><span class="map__red">ГАЗ-Сервис</span>',
			balloonContentBody: 'Установка и ремон газового оборудования',
			balloonContentFooter: '8 (926) 543-55-54<br>  8 (916) 055-55-83',
			hintContent: 'Установка ГБО ГАЗ-Сервис' 
		});
		myPin.add(myPlacemark1);
		myMap.geoObjects.add(myPin);
	}