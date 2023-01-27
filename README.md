# New Project

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.mjs` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.

go to public/index.html and copy paste the index.html we have already written (make sure to import JS we are using in our TS -> <script type="module" src="/dist/index.js"></script> )

npm i uuid

when you hover over newTask variable, id's type is any as uuid is not developed for TS; when you hover over uuid (imported) it says install:
$ npm i --save-dev @types/uuid
# todo-list-DOM-TS
