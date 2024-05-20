self.addEventListener('install', function (event) {
  console.log('SW Installed');
  event.waitUntil(
    caches.open('static')
      .then(function (cache) {
        cache.add('index.html');
        cache.add('style.css');
        cache.add('index.js');
        cache.add('manifest.json');
        cache.add('sw.js');
        cache.add('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Sedan+SC&display=swap');
        cache.add('duwa.html');
        cache.add('SolaimanLipi.ttf');
        cache.add('AmiriQuran-Regular.ttf');
        cache.add('icon.png');
        cache.add('quality.png')
        cache.add('loading.gif');
        cache.add('pwaicon.png');
        cache.add('IslamicBackground.jpg')
        cache.add('popupBoxsound.mp3');
        cache.add("antenna.png");
        cache.add("no-signal.png");
        cache.add("morning1.png");
        cache.add("noon.png");
        cache.add("afternoon.png");
        cache.add("night1.png");
        cache.add("clicksound.mp3");
        cache.add('appicon.png');
        cache.add('appiconicon.png');
        cache.add('sun.png');
        cache.add('Ui Description1.jpg');
        cache.add('Ui description2.jpg');
        cache.add('Ui Description3.jpg');
        cache.add('Ui Description4.jpg');
        cache.add('coinimage.png');
        cache.add('asking-name.jpeg');
        //cache.add('app.js'); */
        cache.addAll([
        // '/',
         // '/index.html',
        //'/app.js',
          //'/app.css',
       /*   '/pwa.jpg',
          '/manifest.json',
          '/sun.jpg',
          '/One.jpg',
          '/Two.jpg',
          '/3.jpg',
          '/4.jpg',
          '/5.jpg',
          '/6.jpg',
          '/7.jpg',
          '/cloudy.png',
          'https://fonts.googleapis.com/css?family=Raleway:400,700'
          */
        ]);
      })
  );
});

self.addEventListener('activate', function () {
  console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});