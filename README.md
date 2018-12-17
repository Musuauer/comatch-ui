# COMATCH UI

[![CircleCI](https://circleci.com/gh/COMATCH/comatch-ui.svg?style=svg&circle-token=b2eea611c1911aa0d1f9c3ccf48631766425f5ec)](https://circleci.com/gh/COMATCH/comatch-ui)

## Description

This project contains all of our React core (UI) components to be re-used across our projects.

This project is setup with a minimalistic Webpack config to handle the build pipeline and Storybook to facilitate development.

## Documentation

**Contents**

-   [Setting up the project](#setting-up-the-project)
-   [Making a new release](#making-a-new-release)
-   [Structure of the project](#structure-of-the-project)
-   [PropTypes documentation](#proptypes-documentation)

### Setting up the project

To run this project, after cloning it, follow these steps:

1. `cd` to the directory of the project.
2. Run `yarn install && yarn start`

### Making a new release

To make a new release you need to:

1. [Run `npm version major|minor|patch`](https://docs.npmjs.com/cli/version).
2. Run `npm publish`, which will publish the new version of the package to the npm registry.

### Structure of the project

All components in our UI library can be found under `/src/core/ui/components`.

Each component folder should have the following structure (e.g. for Button):

```
├── src/
    ├── index.js                    // Exports all components of the library
    └── components/
        └── Button/
            ├── index.js            // Exports the component for the file it's defined
            ├── Button.md           // Documentation of PropTypes in markdown
            ├── Button.js           // Component definition
            ├── Button.scss         // Styling
            ├── Button.test.js      // Unit tests
            └── Button.stories.js   // Stories for Storybook
```

### PropTypes documentation

The PropTypes of all components of the library are documented in their respective folders, a list follows with links for quick access:

**Component PropTypes**

-   [Alert](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/Alert/Alert.md)
-   [Badge](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/Badge/Badge.md)
-   [Button](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/Button/Button.md)
-   [InputError](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/InputError/InputError.md)
-   [InputLabel](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/InputLabel/InputLabel.md)
-   [Popover](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/Popover/Popover.md)
