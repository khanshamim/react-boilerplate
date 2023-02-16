# ReactJS Quick Start UI Template

ReactJS Quick Start template with SSO enabled.

## Technology Stack

| Component | Technology                                                                           |
| --------- | ------------------------------------------------------------------------------------ |
| Frontend  | React, Redux, React-router, React-grid-layout, Material UI, ag-grid, axios, recharts |

## Local build

### One-time local env setup

```bash
# Make sure you have Node v14 installed
node --version
npm --version


# Install yarn globally
npm install -g yarn@1.22.10
yarn --version

### Local Build

```bash
# Download dependencies. Add `--verbose` flag at the end of the `yarn` command to debug any failure.
yarn run install:io

# Build
yarn run build

# Test
yarn run test
```

## React Config

This is a template for a ReactJS app that will be served using Nginx server.

To access any variable within react that is in the properties file: `window._env_.ENV_NAME`.

Furthermore, the app is already SSO-enabled.

## Changes made in quick-start template

- Go to index.html file and update the title.
- packaje.json - Update name, version, description and author.
- Update the app name from globalNavbar.jsx if navbar is needed else delete the component.
- The Sample.jsx is having example of local state, redux toolkit and typographies.
- Delete the Sample folder and its references.
- Also, delete Sample folder from **tests** folder.
