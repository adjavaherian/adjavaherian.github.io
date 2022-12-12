# CS601 Term Project :raised_hands:

This project is a hybrid of vanilla HTML, CS, JS with a healthy chunk of Vue.js mixed in.  I'm using Vite.js for the bundling and developer tools.  This allows quick iteration with its dev server.

# Development

If you want to checkout the project yourself, simply clone it down from GitHub. If you already have a Node.js runtime on your computer, then you should be able to simply run the following:

- yarn
- yarn run dev

And you'll get something like this in your terminal

![yarn dev](images/yarndev.png?raw=true "Yarndev")

Follow that link and you'll see something like this in your browser.

![browser prev](images/browserprev.png?raw=true "preview")

# Site structure

Because this is a hybrid application, you'll see html files in both the index and the public folder.  The public folder is where Vite.js will copy files from to bundle for the server, so our html pages are there. 

Our Vue.js pages and vanilla JavaScript are then sourced in from the `src` directory.  These usually include a single JavaScript file for the HTML page in question and then that file will import the Vue page and subsequent components and will mount them using Vue's `createApp`.

# Deployment

In order to bundle everything up for a remote web server, you can just run `yarn build` which will use Vite.js to build all the assets into proper module chunks.  All of the artifacts should end up in the `/dist` directory.  This directory is usually not checked in to the source control because it changes often and sometimes will be automatically built if you have GitHub actions enabled, etc.  I have however allowed it to be checked in, because we'll be using GitHub pages to serve the site.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
