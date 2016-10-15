# ionic-openweathermap-demo
OpenWeatherMap demo with Ionic_Angularjs, Gulp_Npm_Bower, JS_Data, MVC, Karma_Protractor

## Installation and Prerequisites

#### Node and dependencies
-  **[Nodejs & npm](https://nodejs.org/)** - install via their website
- **[Yo](http://yeoman.io/)**, **[Gulp](http://gulpjs.com/)** and **[Bower](http://bower.io/)** - install via npm

```
npm install --global yo
npm install --global gulp
npm install --global bower
```

#### Platform SDKs
In order to run your app on a device, you'll need **Platform SDKs** for the platforms and the versions you are developing for. If you just want to develop in the browser for now, no SDKs are needed.
For mac - Install xcode
For Windows - Install Android SDK

#### Installation
- clone `git clone https://github.com/pradeepkumarnd/ionic-openweathermap-demo`
- Install dependencies - `npm install  &&  bower install`

## Development

#### Running in the Browser

```sh
gulp --no-open
```
Prepares everything for development and opens your default browser:

When you run `gulp watch` it does this to your `index.html`:
- inject all bower javascript and css files (Angular, Ionic, ...)
- inject all of your app files (compiled css, angular files, ...)

`gulp watch` also livereloads your application when changing/adding/deleting files to immediately show the changes you make in your browser. For your convenience any occurring **ESLint or jsonlint errors** will be presented to you on every livereload.

```sh
gulp watch --no-open
```
If you don't want this task to open your browser every time, just add the `--no-open` option and navigate to `http://localhost:9000` yourself.

proxyPath & proxyMapTo helps to solve CORS issue while debugging in browser

#### Using the Cordova CLI
The Cordova CLI gets installed locally with the generation of your app (you don't have to install it yourself!). Among many other tasks, the Cordova CLI enables you to **add plugins and platforms** and **run and build** your app on devices or emulators.

For a full list of Cordova CLI commands and their capabilities check out their documentation over at the [Cordova Documentation](https://cordova.apache.org/docs/en/latest/cordova-cli/index.html) or the [CLI GitHub page](https://github.com/apache/cordova-cli/).

Here's a brief overview of the most important capabilities:

##### Cordova CLI wrapper
```sh
gulp --cordova "<run any cordova command>"
```
A wrapper for **local installation** of Cordova CLI that comes with the generator. As opposed to a global installation the local installation allows you to have different projects with different CLI versions, which happens a lot if you have several projects with different schedules. Additionally this gulp wrapper can trigger additional gulp commands, significantly reducing the number of commands it takes to build your app. You'll learn about this in a minute.

##### Build on a device/emulator
In order to test a fully built version of your app on a device or emulator, without having to rely your development machine to run the livereload command, run the following commands:
```sh
gulp --cordova "run ios" # runs gulp build, then cordova run ios
gulp --cordova "run android" # same for android

```
or
```sh
gulp --cordova "emulate ios" # also runs gulp build first
gulp --cordova "emulate android"
```

To emulate a specific device and iOS version (iOS version needs to be installed via Xcode before) run:
```sh
gulp --cordova "run ios --emulate --target='iPad-Air, 8.4'"
gulp --cordova "run ios --emulate --target='iPad-Air, 9.0'"
```

## File Structure

#### Cordova related files and folders
```sh
config.xml  # configuration of your Cordova project
platforms/  # platforms you installed
plugins/    # plugins you installed
www/        # will contain the build of your web app, before Cordova is added
```

#### Gulp tasks and dependencies
```sh
bower.json    # dependencies like Angular & Ionic installed to app/bower_components/
gulpfile.js   # configuration of all the Gulp tasks
gulp/         # more Gulp tasks
package.json  # dependencies like Gulp plugins installed to node_modules/
```

#### Application files
```sh
app/
  └── index.html # single most important file, everything is wired together here
  └── app.js     # include modules YOU create
  └── assets/      # assets: fonts, images, translation, etc... go here
  └── scripts/     # Application javascript and html files grouped as function
  └── styles/      # scss styles
```

#### Files related to quality and testing
```sh
.eslintrc          # ESLint base configuration
.eslintignore      # ESLint ignore configuration
test/
  └── karma           # karma unit test
  └── protractor      # protractor e2e tests
karma.conf.js      # karma configuration
protractor.conf.js # protractor configuration
```
