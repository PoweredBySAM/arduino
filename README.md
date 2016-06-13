# Arduino playground

## Development

* Install nvm, then run `nvm use`
* Run with

    npm run sensor

### Set up arduino

* Install dependencies

        npm install

* Wire up arduino based on http://johnny-five.io/api/proximity/#hcsr04parallax-ping-
* Flash arduino with `arduino/PingFirmata` (from [rwaldron](https://gist.githubusercontent.com/rwaldron/0519fcd5c48bfe43b827/raw/f17fb09b92ed04722953823d9416649ff380c35b/PingFirmata.ino))
  * Or alternatively flash using `nodebots-interchange`:

          node_modules/.bin/interchange install hc-sr04 -a uno --firmata -p [port]

          # eg,
          node_modules/.bin/interchange install hc-sr04 -a uno --firmata -p /dev/cu.usbmodem1411
