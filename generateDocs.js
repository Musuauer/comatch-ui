#!/usr/bin/env node
/* eslint-disable no-console */
const { lstatSync, readdirSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const reactDocgen = require('react-docgen');
const ReactDocGenMarkdownRenderer = require('react-docgen-markdown-renderer');

const isDirectory = (source) => lstatSync(source).isDirectory();

const getDirectories = (source) =>
    readdirSync(source)
        .map((name) => join(source, name))
        .filter(isDirectory);

const componentsBasePath = `${__dirname}/src/core/ui/components`;
const componentsPaths = getDirectories(componentsBasePath);

componentsPaths.forEach((componentPath) => {
    const componentName = componentPath.slice(componentPath.lastIndexOf('/') + 1, componentPath.length);
    const componentJsPath = `${componentPath}/${componentName}.js`;

    const renderer = new ReactDocGenMarkdownRenderer({
        componentsBasePath: componentPath,
    });

    const content = readFileSync(componentJsPath);

    const doc = reactDocgen.parse(content);
    const docOutputPath = `${componentPath}/${componentName}.md`;

    writeFileSync(docOutputPath, renderer.render(componentJsPath, doc, []));
});
