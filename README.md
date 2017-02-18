Welcome to the technical documentation. This documentation is a simple collation of all functions used in the mobile application.
To get things started, it is recommended that you first read the setup
section below.

# Setup (frontend)

1. Install Node Package Manager
2. `npm install -g ionic cordova`
3. `npm install -g gulp gulp-sass`
4. `npm update`
5. `ionic state reset`
6. Linux: `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

### Generating Icons/Splashscreens

1. You may change icon.png or splash.png
2. Install Image Magick: `sudo apt install imagemagick` (Linux only. For other OS, look it up)
3. `npm install -g cordova-icon cordova-splash`
5. `cordova-icon`
6. `cordova-splash`

# Local Development

### Run in Chrome Browser (with live update)

1. `ionic serve` or `ionic serve --lab`.

Note: JavaScript and CSS will be autocompiled into bundle files
Note: Use Chrome because Firefox has deprecated WebSQL

### Android

1. Install [Java JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
2. Install [Android SDK](https://developer.android.com/studio/index.html)
3. Allow Developer mode in Android
4. `ionic run android --device`
5. `chrome://inspect` for remote debugging
6. `ionic emulate android` for emulator

### iOS (Mac only)

1. `ionic prepare ios`
2. `ionic build ios`
3. Signup at https://developer.apple.com
4. Open XCode > Preferences > Accounts
5. Input Apple ID
6. Clean project
7. Pick your iOS device in dropdown near Play/Stop
8. Go to "General"
9. Fix provisioning profile if needed
10. `ionic run ios --device`
11. `ionic emulate ios --target="iPhone-5"` for emulator

# Conventions

Do follow these conventions for consistency and readability. You don't need to follow them
to the bone, just use them as guidelines for coding. Well, if you're experienced enough,
you can derive the conventions just by looking at the current source code.

If you're not sure if you're doing the right thing or not, it's enough to match the conventions
of the file you're editing. Just make sure everything is concise and readable.

1. File structure
  - All third-party library files should be in `www/lib`. Only put the needed files to save space for packaging.
  - All images in `www/img`.
  - All fonts in `www/fonts`.
  - All other files should be in a folder with their respective extension (.js in `www/js`, .html in `www/html`, etc.).
  - Exception for SCSS files, these should be outside `www`.
  - Keep index.html, minified JS and CSS app bundles in `www/` root folder.

2. File naming conventions
  - This is common sense: all file extensions should match their content (.js for JavaScript).
  - The main AngularJS module declaration should be in `www/js/module.js`.
  - All AngularJS module types should be in their respective folders (e.g. `www/js/controllers/SampleCtrl.js` for controllers).
  - An exception to this is for `run`, keep all runs with the configs in `www/js/config`.
  - By default, use UpperCamelCase for **all** filenames (even in HTML and CSS).
  - Use lowerCamelCase for directives and filters.
  - Use UPPER_SNAKE_CASE for constants.
  - Suffix all controllers with `Ctrl` (because gulp compiler will look at the suffix).
  - Suffix all services with `Service`.
  - Suffix all config with `Config`.
  - Prefix all directives with 'intel' (for branding).
  - All views (html templates with controllers) should be in the html root folder `www/html` and should not have a subfolder. This is recommended to distinguish between non-views and views when gulp compiles the javascript bundle.
  - All non-views (e.g. templates for directives, popups, modals) should have their own folder in `www/html`.
  - Each html filename should match their JS controller/directive/etc.

2. HTML conventions
  - Use 2 spaces to indent. Never use tabs.
  - Always use double quotes for attribute values.
  - Use lower-kebab-case.
  - No extraneous spaces for attribute values. Prefer: `<... attr="value" ...>`
  - Always indent child elements. An exception is singleton outside wrappers (like `<html>` and `<ion-view>`).
  - If there are many attributes, indent them with two spaces.
  - If you're confused, follow the naming conv

3. CSS/SCSS Conventions
  - Use 2 spaces to indent. Never use tabs.
  - Use lower-kebab-case.
  - Always indent SCSS descendant selectors.
  - All CSS selectors should be in their own line.
  - Semi-colon always.
  - No restrictions with quotes.
  - Always put a single space after the colon.
  - No spaces before the colon.

4. JS/AngularJS Conventions
  - Use 2 spaces (not 4) to indent. Never use tabs.
  - Semi-colon **always**, even for hoisted functions.
  - lowerCamelCase for variables and functions, UpperCamelCase for class functions.
  - But for database properties (e.g. user_id), you can keep them in lower_snake_case.
  - Only one angular module type per file.
  - Always start with `angular.module(...)`.
  - Globals are not recommended because bundler will wrap all files in an IIFE.
  - All filenames should be the same as the name of the module declaration (see 2).
  - For config, name the anonymous function inline with.
  - For services, hoist the functions.
  - For the others, use anonymous functions in the module type declaration.
  - Delegate abstract functionalities (e.g. logout) to services.
  - Delegate reusable HTML code blocks to directives.
  - Delegate text filters to actual filters.
  - All database schema in `DatabaseSetup.js`.
  - Object classes as factories.
  - All method chains should start in a separate line:


  ```js
  myPromise.then(function() {
    /* stuff */
  })
  .then(function() {
    /* stuff */
  });
  ```
