BrowserQuest server documentation
=================================

The game server requires nodejs 6.x or greater.

- lodash
- log
- express
- socket.io
- sanitizer
- memcache (only if you want metrics)

All of them can be installed via `npm install -d` (this will install a local copy of all the dependencies in the node_modules directory)


Configuration
-------------

The server settings (number of worlds, number of players per world, etc.) can be configured.
Modify `config.json` or create a new file and specify the path when running the server with the second argument, e.g: `npm run watch:server ./config-prod.json`

Development
-----------

To launch the application for development, simply run `npm run watch:server`


Deployment
----------

In order to deploy the server, run `npm run build:server` and copy the `dist/server` and `dist/shared` directories to the staging/production server.

Next, you'll need to set up a few packages in npm. Run `npm init` and accept all the defaults. Now run `npm install --save` for each of the following packages: express, log, sanitizer, socket.io, and lodash@3.10.1.

You will also need to copy over server/config.json to dist/server/config.json.

The maps/ directory does not get copied by default. Copy server/maps to dist/server/maps.

Now, run `node server/ts/main.js` in order to start the server.

Note: the `shared` directory is the only one in the project which is a server dependency.


Monitoring
----------

The server has a status URL which can be used as a health check or simply as a way to monitor player population.

Send a GET request to: `http://[host]:[port]/status`

It will return a JSON array containing the number of players in all instanced worlds on this game server.
