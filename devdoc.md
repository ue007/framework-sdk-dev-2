

# Tech Stack

开发语言： Typescript 

语法检测： eslint 

打包工具： Webpack 

第三方库： Three.js 

代码管理： Git 

数据模拟: Mock 部署



# 环境配置

## EditorConfig

EditorConfig is awesome: http://EditorConfig.org

## .vscode
创建目录.vscode，settings.json中输入如下配置：
```
{
  "editor.formatOnSave": true,
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
  "typescript.tsdk": "node_modules/typescript/lib",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}

```
## yarn/npm
https://yarnpkg.com/
https://www.npmjs.com/

# TypeScript
安装typescript
``` javascript
npm install typescript --save-dev // 局部安装
OR
npm install -g typescript // 全局安装
```
typescript 编译器，用来将ts文件编译为js文件。

初始化tsconfig
```
tsc --init
```
生成tsconfig.json，配置可以参考：https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

# Webpack
安装webpack4 和webpack-cli
```
npm install webpack webpack-cli --save-dev
```
webpack 是一个用于现代 JavaScript 应用程序的 静态模块打包工具。

webpack-cli 提供了许多命令来使 webpack 的工作变得简单。
webpack官网地址：https://webpack.js.org/

安装webpack相关插件：

ts-loader：TypeScript loader for webpack,解析ts文件转换成浏览器可以识别的文件.
```
npm i ts-loader --save-dev
```

配置webpack.config.js
webpack配置参考链接：https://webpack.docschina.org/configuration/



# Eslint

ESLint 是一个代码检查工具，主要用来发现代码错误、统一代码风格，目前已被广泛的应用于各种 JavaScript 项目中。

TypeScript 除了是一个编译 ts 文件的工具以外，还可以作为一个静态代码检查工具使用。TypeScript 会对文件进行语法解析，如果遇到一些语法错误，或使用了未定义的变量，则会报错。

ESLint 也会对文件进行语法解析，它可以对一些代码风格进行约束，发现未定义的变量，但是对于错误的属性或方法引用，却无能为力。

### 安装eslint

cnpm 安装eslint脚本：

```javascript
cnpm install eslint --save-dev
```

### 初始化

```javascript
npx eslint --init
```

eslint相关插件

```javascript
"@typescript-eslint/eslint-plugin": "^5.7.0",
    "@typescript-eslint/parser": "^5.7.0",
    "eslint": "^7.32.0",
    "eslint-config-standard": "^16.0.3",
    "eslint-plugin-import": "^2.25.3",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^5.2.0",
```

**@typescript-eslint/eslint-plugin**: An ESLint plugin which provides lint rules for TypeScript codebases. https://www.npmjs.com/package/@typescript-eslint/eslint-plugin

**@typescript-eslint/parser**: An ESLint parser which leverages [TypeScript ESTree (opens new window)](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/typescript-estree)to allow for ESLint to lint TypeScript source code. https://www.npmjs.com/package/@typescript-eslint/parser

**eslint-plugin-import**: This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names. All the goodness that the ES2015+ static module syntax intends to provide, marked up in your editor.https://www.npmjs.com/package/eslint-plugin-import

### 代码规范（airbnb）

选择使用airbnb的规范：

```javascript
cnpm install eslint-config-airbnb-typescript@latest --save-dev
```

参考：[eslint的规则 (opens new window)](https://eslint.org/docs/rules/)、[typescript-eslint的规则 (opens new window)](https://github.com/typescript-eslint/typescript-eslint/tree/v1.7.0/packages/eslint-plugin/docs/rules)、[airbnb的规则](https://github.com/airbnb/javascript)



# prettierrc

安装prettier

```
npm install --save-dev --save-exact prettier
```

配置.prettierrc文件



# Git hooks

https://prettier.io/docs/en/install.html#git-hooks

In addition to running Prettier from the command line (`prettier --write`), checking formatting in CI, and running Prettier from your editor, many people like to run Prettier as a pre-commit hook as well. This makes sure all your commits are formatted, without having to wait for your CI build to finish.

1. Install [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged):

```
npm install --save-dev husky lint-stagednpx husky installnpm set-script prepare "husky install"npx husky add .husky/pre-commit "npx lint-staged"
```

> Note: npm **set-script** command requires at least **npm v7.x**. See https://docs.npmjs.com/cli/v7/commands/npm-set-script.

2. Add the following to your `package.json`:

```json
{
  "lint-staged": {
    "**/*": "prettier --write --ignore-unknown"
  }
}
```

> Note: If you use ESLint, make sure lint-staged runs it before Prettier, not after.

See [Pre-commit Hook](https://prettier.io/docs/en/precommit.html) for more information.

# father

Library toolkit based on rollup, docz, storybook, jest, prettier and eslint.

## Features

- ✔︎ 基于 [docz](https://www.docz.site/) 的文档功能
- ✔︎ 基于 [rollup](http://rollupjs.org/) 和 babel 的组件打包功能
- ✔︎ 支持 TypeScript
- ✔︎ 支持 cjs、esm 和 umd 三种格式的打包
- ✔︎ esm 支持生成 mjs，直接为浏览器使用
- ✔︎ 支持用 babel 或 rollup 打包 cjs 和 esm
- ✔︎ 支持多 entry
- ✔︎ 支持 lerna
- ✔︎ 支持 css 和 less，支持开启 css modules
- ✔︎ 支持 test
- ✔︎ 支持用 prettier 和 eslint 做 pre-commit 检查

```javascript
cnpm install father --save-dev
```

## Config

新建 `.fatherrc.js` 文件进行配置。

比如：

```
export default {
  entry: 'src/foo.js',
  doc: {
    themeConfig: { mode: 'dark' },
    base: '/your-repo'
  },
}
```

注意：

1. lerna 项目可以为每个 package 单独配，并且可以继承根目录的 `.fatherrc.js` 配置
2. 配置文件支持 es6 和 TypeScript


# madge
Madge is a developer tool for generating a visual graph of your module dependencies, finding circular dependencies, and give you other useful info. Joel Kemp's awesome dependency-tree is used for extracting the dependency tree.

Works for JavaScript (AMD, CommonJS, and ES6 modules)
Also works for CSS preprocessors (Sass, Stylus, and Less)
NPM installed dependencies are excluded by default (can be enabled)
All core Node.js modules (assert, path, fs, etc) are excluded
Will traverse child dependencies automatically

![madge](http://pahen.github.io/madge/madge.svg)

# jest
🃏 Delightful JavaScript Testing

👩🏻‍💻 Developer Ready: Complete and ready to set-up JavaScript testing solution. Works out of the box for any React project.

🏃🏽 Instant Feedback: Failed tests run first. Fast interactive mode can switch between running all tests or only test files related to changed files.

📸 Snapshot Testing: Jest can capture snapshots of React trees or other serializable values to simplify UI testing.

Read More: https://jestjs.io/

# lerna
A tool for managing JavaScript projects with multiple packages.
Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.

https://lerna.js.org/


# TDD
## chai
BDD / TDD assertion framework for node.js and the browser that can be paired with any testing framework.
## @types/mocha

# scripts
```javascript
"scripts": {
    "build": "father build",
    "umd": "lerna run umd",
    "limit-size": "limit-size",
    "wasm": "wasm-pack build ./rust --target web",
    "watch": "father build -w",
    "test": "jest packages/g/",
    "test-watch": "DEBUG=1 jest packages/g/ -w",
    "cov": "jest --coverage",
    "contributor": "git-contributor",
    "lint": "npm run eslint",
    "eslint": "eslint --ext .html,.ts,.js ./packages/g/src",
    "eslint-fix": "eslint --fix --ext .html,.ts,.js ./packages/g/src",
    "lint-staged": "lint-staged",
    "prettier": "prettier --write './packages/**/*.{js,ts,md}'",
    "pre-publish": "yarn build",
    "publish": "lerna publish",
    "publish:next": "lerna publish prerelease --dist-tag next",
    "start": "cd ./packages/site && npm run start",
    "check-circular-deps": "madge --circular --extensions ts ./packages/"
  },
```


# Reference

1. [前端工程化 UE007](https://webgpu.info/views/Blog/web/01-FrontEnd-Engineering.html#tech-stack)
2. [webpack官网](https://webpack.js.org/)
2. https://prettier.io/
2. https://npm.io/package/father
3. https://lerna.js.org/