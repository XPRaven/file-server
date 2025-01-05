## A NodeJS fileserver
#### And nothing else.

This is just a basic NodeJS server for hosting video, books, and audio.

The entire project is split into backend and frontend with raspi-web-f being the frontend and raspi-web-b being the backend (the names comes from this project originally being made for a Raspberry Pi).

The files are displayed directly in the browser, meaning if the browser can read it, it can be displayed.

Videos belong into `raspi-web-b/4d`, books into `raspi-web-b/3d`, and audio into `raspi-web-b/2d`, but it's not necessary.

<sub> If you get a permissions error, try changing port 80 at `raspi-web-b/index.js:7:14` to something above 1023, like 8008 or 8080. </sub>
