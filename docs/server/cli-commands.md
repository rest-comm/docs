---
sidebar_position: 3
---

# CLI Commands

This project contains the CLI commands that we be useful in your development of this project.

## Installing Dependencies

```bash
yarn
```

## Running Application

#### Local Development

```bash
yarn start # start nest.js app in dev env
yarn start:dev # start nest.js app in dev env
yarn start:debug # start nest.js app in dev env and in debug mode
yarn start:test # start nest.js app in test env
```

#### Production
```bash
yarn build # builds the nest.js app
yarn start:prod # runs the nest.js app build
```

## Formatting/Linting

```bash
yarn format # format all files using prettier (RECOMMENDED)
yarn lint # lint all files and fix lint errors
```

## Tests

#### Unit Tests
```bash
yarn test # unit test
yarn test:watch # watch mode
yarn test:cov # with test coverage
yarn test:debug # debug mode
```

#### End-To-End (E2E) Tests

```bash
yarn test:e2e # runs all e2e tests
yarn test:e2e test1.e2e-spec.ts # runs this particular test
yarn test:e2e test1.e2e-spec.ts test2.e2e-spec.ts # runs all tests listed in the CLI
```

