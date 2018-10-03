BrowserQuest client documentation
=================================

The client side for BrowserQuest has been converted to a more modern development toolset.

Current technologies used are:

- Typescript 2.5
- Webpack 3.6
- jQuery 2.2.4(Will eventually get rid of this dependency)
- Lodash 3.10.1 (Will eventually get rid of this dependency)


### Configuration

Copy the current working environment from `client/config/config.{env}.json` to `client/config/config.json`.

### Development

Running the local development environment is easy. Just run `npm run watch:client` and a browser window will open. 

To configure the port your local dev server runs on, just change the environment variable `PORT` to your desired port.


### Serving for production

Just run `npm run build:client` and copy your `dist/client` directory to your webservers root.

Please note that you'll need to alter client/config/config.json to your production environment server host and port prior to running this last npm build step.
