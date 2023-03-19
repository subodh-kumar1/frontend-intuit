# REACT APP

TS Config Details
- lib: The standard typing to be included in the type checking process. In our case, we have chosen to use the types for the browser’s DOM and the latest version of ECMAScript.
- allowJs: Whether to allow JavaScript files to be compiled.
- allowSyntheticDefaultImports: This allows default imports from modules with no default export in the type checking process.
- skipLibCheck: Whether to skip type checking of all the type declaration files (*.d.ts).
- esModuleInterop: This enables compatibility with Babel.
- strict: This sets the level of type checking to very high. When this is true, the project is said to be running in strict mode.
- forceConsistentCasingInFileNames: Ensures that the casing of referenced file names is consistent during the type checking process.
- moduleResolution: How module dependencies get resolved, which is node for our project.
- resolveJsonModule: This allows modules to be in .json files which are useful for configuration files.
- noEmit: Whether to suppress TypeScript generating code during the compilation process. This is true in our project because Babel will be generating the JavaScript code.
- jsx: Whether to support JSX in .tsx files.
- include: These are the files and folders for TypeScript to check. In our project, we have specified all the files in the src folder.

Babel Packages
- @babel/core: As the name suggests, this is the core Babel library.
- @babel/preset-env: This is a collection of plugins that allow us to use the latest JavaScript features but still target browsers that don’t support them.
- @babel/preset-react: This is a collection of plugins that enable Babel to transform React code into JavaScript.
- @babel/preset-typescript: This is a plugin that enables Babel to transform TypeScript code into JavaScript.
- @babel/plugin-transform-runtime and @babel/runtime: These are plugins that allow us to use the async and await JavaScript features.

ESLint Dependencies
- eslint: This is the core ESLint library.
- eslint-plugin-react: This contains some standard linting rules for React code.
- eslint-plugin-react-hooks: This includes some linting rules for React hooks code.
- @typescript-eslint/parser: This allows TypeScript code to be linted.
- @typescript-eslint/eslint-plugin: This contains some standard linting rules for TypeScript code.

Here are the critical bits in this webpack.dev.config.ts file:

The mode field tells Webpack whether the app needs to be bundled for production or development. We are configuring Webpack for development, so we have set this to "development". Webpack will automatically set process.env.NODE_ENV to "development" which means we get the React development tools included in the bundle.
The output.public field tells Webpack what the root path is in the app. This is important for deep linking in the dev server to work properly.
The entry field tells Webpack where to start looking for modules to bundle. In our project, this is index.tsx.
The module field tells Webpack how different modules will be treated. Our project is telling Webpack to use the babel-loader plugin to process files with .js, .ts, and .tsx extensions.
The resolve.extensions field tells Webpack what file types to look for in which order during module resolution. We need to tell it to look for TypeScript files as well as JavaScript files.
The HtmlWebpackPlugin creates the HTML file. We have told this to use our index.html in the src folder as the template.
The HotModuleReplacementPlugin and devServer.hot allow modules to be updated while an application is running, without a full reload.
The devtool field tells Webpack to use full inline source maps. This allows us to debug the original code before transpilation.
The devServer field configures the Webpack development server. We tell Webpack that the root of the webserver is the build folder, and to serve files on port 4000. historyApiFallback is necessary for deep links to work in multi-page apps. We are also telling Webpack to open the browser after the server has been started.

webpack.prod.config.ts is similar to the webpack.dev.config.ts with the following differences:
We’ve specified the mode to be production. Webpack will automatically set process.env.NODE_ENV to "production" which means we won’t get the React development tools included in the bundle.
The output field tells Webpack where to bundle our code. In our project, this is the build folder. We have used the [name] token to allow Webpack to name the files if our app is code split. We have used the [contenthash] token so that the bundle file name changes when its content changes, which will bust the browser cache.
The CleanWebpackPlugin plugin will clear out the build folder at the start of the bundling process.
