![](https://badgen.net/npm/v/__PACKAGE_NAME__)
![](https://badgen.net/bundlephobia/minzip/__PACKAGE_NAME__)
![](https://badgen.net/npm/dm/__PACKAGE_NAME__)
![](https://badgen.net/npm/dt/__PACKAGE_NAME__)
![](https://img.shields.io/badge/license-MIT-blue.svg)

# ts-library-template

Typescript library boilerplate to make and publish your library using typescript

## step to start

1. Install npm packages

```zsh
npm install
```

2. Execute script file to config basic enviornment for your package

```zsh
node scrtips/initConfig.js
```

## npm scripts

- lint (It only checks, not fix)

```
npm run lint
```

- test

```
npm run test
```

- build

```
npm run build
```

## github action automations

- Update outdated npm packages

  At 00:00 on every day-of-month from 1 through 7 if it's on every 7th day-of-week in March, June, September, and December,
  outdated packages is updated and action bot will create a PR for you.

- Check pull request could be merged

  Check 'lint', 'test', 'prettier' and 'build'

- Publish the package to npm registry

  If the version is changed, build the pacakge and publish it to npm registry.

## todo

- [ ] Even if pull request is merged without changing version, github action is execute.

## License

[MIT](https://choosealicense.com/licenses/mit/)
