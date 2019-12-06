(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),o=(n(0),n(288)),i={title:"Installation & Usage"},s=[{value:"Entity Discovery in TypeScript",id:"entity-discovery-in-typescript",children:[]},{value:"Setting up the Commandline Tool",id:"setting-up-the-commandline-tool",children:[]},{value:"Request Context",id:"request-context",children:[]}],l={rightToc:s},c="wrapper";function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(c,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"First install the module via ",Object(o.b)("inlineCode",{parentName:"p"},"yarn")," or ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," and do not forget to install the database driver as well:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ yarn add mikro-orm mongodb # for mongo\n$ yarn add mikro-orm mysql2  # for mysql/mariadb\n$ yarn add mikro-orm mariadb # for mysql/mariadb\n$ yarn add mikro-orm pg      # for postgresql\n$ yarn add mikro-orm sqlite3 # for sqlite\n")),Object(o.b)("p",null,"or"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ npm i -s mikro-orm mongodb # for mongo\n$ npm i -s mikro-orm mysql2  # for mysql/mariadb\n$ npm i -s mikro-orm mariadb # for mysql/mariadb\n$ npm i -s mikro-orm pg      # for postgresql\n$ npm i -s mikro-orm sqlite3 # for sqlite\n")),Object(o.b)("p",null,"Next you will need to enable support for ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/decorators.html"}),"decorators"),"\nin ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json")," via:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"experimentalDecorators": true\n')),Object(o.b)("p",null,"Then call ",Object(o.b)("inlineCode",{parentName:"p"},"MikroORM.init")," as part of bootstrapping your app:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const orm = await MikroORM.init({\n  entities: [Author, Book, BookTag],\n  dbName: 'my-db-name',\n  clientUrl: '...', // defaults to 'mongodb://localhost:27017' for mongodb driver\n  baseDir: __dirname, // defaults to `process.cwd()`\n});\nconsole.log(orm.em); // access EntityManager via `em` property\n")),Object(o.b)("p",null,"You can also provide paths where you store your entities via ",Object(o.b)("inlineCode",{parentName:"p"},"entitiesDirs")," array. Internally\nit uses ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/sindresorhus/globby"}),Object(o.b)("inlineCode",{parentName:"a"},"globby"))," so you can use\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/sindresorhus/globby#globbing-patterns"}),"globbing patterns"),". "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const orm = await MikroORM.init({\n  entitiesDirs: ['./dist/app/**/entities'],\n  // ...\n});\n")),Object(o.b)("p",null,"You should provide list of directories, not paths to entities directly. If you want to do that\ninstead, you should use ",Object(o.b)("inlineCode",{parentName:"p"},"entities")," array and use ",Object(o.b)("inlineCode",{parentName:"p"},"globby")," manually:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import globby from 'globby';\n\nconst orm = await MikroORM.init({\n  entities: await globby('./dist/app/**/entities/*.js').map(require),\n  // ...\n});\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can pass additional options to the underlying driver (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"mysql2"),") via ",Object(o.b)("inlineCode",{parentName:"p"},"driverOptions"),".\nThe object will be deeply merged, overriding all internally used options.")),Object(o.b)("h2",{id:"entity-discovery-in-typescript"},"Entity Discovery in TypeScript"),Object(o.b)("p",null,"Internally, ",Object(o.b)("inlineCode",{parentName:"p"},"MikroORM")," uses ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/metadata-providers"}),Object(o.b)("inlineCode",{parentName:"a"},"ts-morph")," to perform analysis")," of source files\nof entities to sniff types of all properties. This process can be slow if your project contains lots\nof files. To speed up the discovery process a bit, you can provide more accurate paths where your\nentity source files are: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const orm = await MikroORM.init({\n  entitiesDirs: ['./dist/entities'], // path to your JS entities (dist), relative to `baseDir`\n  entitiesDirsTs: ['./src/entities'], // path to your TS entities (source), relative to `baseDir`\n  // ...\n});\n")),Object(o.b)("p",null,"You can also use different ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/metadata-providers"}),"metadata provider")," or even write custom one:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ReflectMetadataProvider")," that uses ",Object(o.b)("inlineCode",{parentName:"li"},"reflect-metadata")," instead of ",Object(o.b)("inlineCode",{parentName:"li"},"ts-morph")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"JavaScriptMetadataProvider")," that allows you to manually provide the entity schema (mainly for Vanilla JS)")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const orm = await MikroORM.init({\n  metadataProvider: ReflectMetadataProvider,\n  // ...\n});\n")),Object(o.b)("h2",{id:"setting-up-the-commandline-tool"},"Setting up the Commandline Tool"),Object(o.b)("p",null,"MikroORM ships with a number of command line tools that are very helpful during development,\nlike Schema Generator and Entity Generator. You can call this command from the NPM binary\ndirectory or use ",Object(o.b)("inlineCode",{parentName:"p"},"npx"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ node node_modules/.bin/mikro-orm\n$ npx mikro-orm\n\n# or when installed globally\n$ mikro-orm\n")),Object(o.b)("p",null,"For CLI to be able to access your database, you will need to create ",Object(o.b)("inlineCode",{parentName:"p"},"mikro-orm.config.js")," file that\nexports your ORM configuration. TypeScript is also supported, just enable ",Object(o.b)("inlineCode",{parentName:"p"},"useTsNode")," flag in your\n",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file. There you can also set up array of possible paths to ",Object(o.b)("inlineCode",{parentName:"p"},"mikro-orm.config")," file,\nas well as use different file name:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"./package.json"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "your-app",\n  "dependencies": { ... },\n  "mikro-orm": {\n    "useTsNode": true,\n    "configPaths": [\n      "./src/mikro-orm.config.ts",\n      "./dist/mikro-orm.config.js"\n    ]\n  }\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"./src/mikro-orm.config.ts"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// usually you will reexport existing configuration from somewhere else\nimport { CONFIG } from './config';\nexport = CONFIG.orm;\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can also use different names for this file, simply rename it in the ",Object(o.b)("inlineCode",{parentName:"p"},"configPaths")," array\nyour in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),". You can also use ",Object(o.b)("inlineCode",{parentName:"p"},"MIKRO_ORM_CLI")," environment variable with the path\nto override ",Object(o.b)("inlineCode",{parentName:"p"},"configPaths")," value.")),Object(o.b)("p",null,"Now you should be able to start using the CLI. All available commands are listed in the CLI help:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"Usage: mikro-orm <command> [options]\n\nCommands:\n  mikro-orm cache:clear        Clear metadata cache\n  mikro-orm generate-entities  Generate entities based on current database schema\n  mikro-orm schema:create      Create database schema based on current metadata\n  mikro-orm schema:drop        Drop database schema based on current metadata\n  mikro-orm schema:update      Update database schema based on current metadata\n\nOptions:\n  -v, --version  Show version number                                   [boolean]\n  -h, --help     Show help                                             [boolean]\n\nExamples:\n  mikro-orm schema:update --run  Runs schema synchronization\n")),Object(o.b)("h2",{id:"request-context"},"Request Context"),Object(o.b)("p",null,"Then you will need to fork Entity Manager for each request so their identity maps will not\ncollide. To do so, use the ",Object(o.b)("inlineCode",{parentName:"p"},"RequestContext")," helper:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const app = express();\n\napp.use((req, res, next) => {\n  RequestContext.create(orm.em, next);\n});\n")),Object(o.b)("p",null,"More info about ",Object(o.b)("inlineCode",{parentName:"p"},"RequestContext")," is described ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/identity-map#request-context"}),"here"),"."),Object(o.b)("p",null,"Now you can start ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/defining-entities"}),"defining your entities")," (in one of the ",Object(o.b)("inlineCode",{parentName:"p"},"entitiesDirs")," folders)."))}p.isMDXComponent=!0},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a),o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),b=a,m=p[s+"."+b]||p[b]||c[b]||o;return n?r.a.createElement(m,Object.assign({},{ref:t},l,{components:n})):r.a.createElement(m,Object.assign({},{ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);