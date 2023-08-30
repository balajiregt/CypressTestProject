# Cypress E2E Testing

This repository contains end-to-end tests using the Cypress testing framework.

## Table of Contents
- [Cypress E2E Testing](#cypress-e2e-testing)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Running Tests](#running-tests)
    - [Open Cypress Test Runner](#open-cypress-test-runner)
    - [Run Cypress Tests Headlessly](#run-cypress-tests-headlessly)
  - [Directory Structure](#directory-structure)
  - [Continuous Integration](#continuous-integration)

## Getting Started

### Prerequisites

- Node.js: Ensure you have Node.js installed. If not, download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
```
git clone https://github.com/balajiregt/CypressTestProject.git
```

2. Navigate to the project directory:
```
cd Cypress Test Project
```

3. Install the dependencies:
```
npm install cypress --save-dev
```

## Running Tests

### Open Cypress Test Runner

To see the tests running in a real browser:

```
npx cypress open
```

### Run Cypress Tests Headlessly

To run the tests headlessly:

```
npx cypress run
```

## Directory Structure

```
cypress/
├── fixtures     // Test fixtures like data or configurations
├── integration  // Test files go here
├── plugins      // Cypress plugins
└── support      // Custom commands and global overrides
```

## Continuous Integration

