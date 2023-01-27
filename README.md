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

$ npm i --save-dev typescript
nstall it as a dev dependency as it is not required for production

We need to have a config file for TS and to create a boilerplate config file:
$ npx tsc --init

in package.json delete the below from script:
"test": "echo \"Error: no test specified\" && exit 1"
and add (to automatically recompile our files for us):
"start": "tsc --watch"

to save js file in dest directory:
tsconfig.json
comment out "outDir": "./",
and update it as
"outDir": "./dest", 

update index.html:
<script src="dest/script.js" defer></script>


to prevent errors once you start to install libraries:
update "module": "commonjs", in tsconfig.json to:
"module": "es6",

but browser still doesn't know how to access the node module folder, so we need to use a bundler to bundle up your code and node modules: use webpack or snowpack 
$ npx create-snowpack-app . --template @snowpack/app-template-blank-typescript --forcee-blank-typescript --force

npm i uuid
npm i --save-dev @types/uuid -> to update id type from any to string

when you hover over newTask variable, id's type is any as uuid is not developed for TS; when you hover over uuid (imported) it says install:
$ npm i --save-dev @types/uuid
# todo-list-DOM-TS
e-blank-typescript --forcee-blank-typescript --force