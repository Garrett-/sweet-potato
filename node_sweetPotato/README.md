# Node Sweet Potato

For now we have a simple Express starter application.

## Setup

After cloning this repo.

1. Install Node v0.12.0 or higher
2. Install bower `npm install bower -g`
3. Install gulp `npm install gulp -g`
4. `cd` to `node_sweetPotato`
5. Run `npm install`
6. Run `bower install`
7. Start server with `npm start`
8. Navigate to `localhost:3000` to view

### Gulp Tasks

**'scripts'**

`gulp scripts`

This task will concat all scripts in the `public/javascripts/src/*.js` path into 1 `public/javascripts/dist/app.js` file.

To add additional vendor files update the task in the gulp file. (temporary solution).


**'watch'**

`gulp watch`

Watchs for file changes in the `public/javascripts/src/*.js` path and reruns the `scripts` task.
