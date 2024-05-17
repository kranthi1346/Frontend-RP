# README #

The recuitment-tool is an internal product of carnation infotech. All rights reserved.

## Branching strategy
- We use [Github flow strategy](https://guides.github.com/introduction/flow/).
- Everything that is merged is deployable.
- Deploying code is separate from releasing features.
- If you need your feature deployed on a particular day, your code must utilize a deploy flag.

## Setup

1. Before you start coding, your app needs some dependencies, so run the following command:
```
npm install
npm install next -g
```

## Running/Developing
- You can start your app by running command:
```
npm start
or
npm run dev
```
- Now, open your browser and head to <http://localhost:3000/> to start the Line Item create workflow. You can immediately start coding.
- See [pages](./src/pages) for all available pages within this application

## How we roll (code standards)
- High level notes:
- This repo comes with eslint and prettier and will run on commit
- Test 100% of functional changes.
- PRs should be closed wihtin a week
- Everything merged in master is deployable at any time.

## Scripts
- We have few scripts to help you out
  - `npm run lint-fix`
  - `npm run prettify`