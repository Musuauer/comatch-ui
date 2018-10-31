# COMATCH UI

## Description

This project contains all of our React core (UI) components to be re-used across our projects.

This project is setup with a minimalistic Webpack config to handle the build pipeline and Storybook to facilitate development.

## Documentation

**Contents**

-   [Setting up the project](#setting-up-the-project)
-   [Making a new release](#making-a-new-release)
-   [Structure of the project](#structure-of-the-project)

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
            ├── Button.js           // Component definition
            ├── Button.scss         // Styling
            ├── Button.test.js      // Unit tests
            └── Button.stories.js   // Stories for Storybook
```
