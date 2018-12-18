#!/usr/bin/env node
/* eslint-disable no-console */
const { lstatSync, readdirSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const reactDocgen = require('react-docgen');
const ReactDocGenMarkdownRenderer = require('react-docgen-markdown-renderer');

const COMPONENTS_BASE_PATH = `${__dirname}/src/core/ui/components`;
const CONTAINERS_BASE_PATH = `${__dirname}/src/core/ui/containers`;

/**
 * Determines if what's at the path is a directory or a file
 * @param {string} source path
 * @returns {boolean} is directory
 */
const isDirectory = (source) => lstatSync(source).isDirectory();

/**
 * Returns the directories contained within a directory
 *
 * @param {string} source path
 * @returns {string[]} paths to directories
 */
const getDirectories = (source) =>
    readdirSync(source)
        .map((name) => join(source, name))
        .filter(isDirectory);

/**
 * Given the path to a React component will generate documentation in markdown format
 *
 * @param {string} componentPath path to the component definition
 * @returns {undefined}
 */
function generateComponentDocs(componentPath) {
    const componentName = componentPath.slice(componentPath.lastIndexOf('/') + 1, componentPath.length);
    const componentsBasePath = componentPath.includes('container')
        ? `${componentPath}/ui/containers/${componentName}`
        : componentPath;
    const jsPath = `${componentsBasePath}/${componentName}.js`;

    const renderer = new ReactDocGenMarkdownRenderer({
        componentsBasePath,
    });

    const content = readFileSync(jsPath);

    const doc = reactDocgen.parse(content);
    const docOutputPath = `${componentsBasePath}/${componentName}.md`;

    writeFileSync(docOutputPath, renderer.render(jsPath, doc, []));
}

/**
 * Given the path to a directory containing React components or containers,
 * will generate documentation in markdown format
 *
 * @param {string} basePath path to the base directory where the components or the containers are contained
 * @returns {undefined}
 */
function generateDocs(basePath) {
    const componentsPaths = getDirectories(basePath);

    componentsPaths.forEach((componentPath) => generateComponentDocs(componentPath));
}

generateDocs(COMPONENTS_BASE_PATH);
generateDocs(CONTAINERS_BASE_PATH);
