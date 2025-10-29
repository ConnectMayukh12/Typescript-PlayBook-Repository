# Typescript Playbook Repository

A curated collection of TypeScript examples, patterns, and best practices. This repository is intended as a practical reference for developers learning TypeScript or looking for idiomatic solutions to common typing problems.

Features include:

- Core type techniques and inference
- Unions, intersections, and discriminated unions
- Arrays, tuples, and readonly collections
- Function types, call signatures, and overloads
- Objects: interfaces, type aliases and index signatures
- Narrowing, control-flow typing, and guard patterns
- Generics with constraints and utility helpers
- Built-in utility types and advanced mapped types
- Classes, OOP patterns, and design considerations
- Practical React + TypeScript patterns (props, hooks, contexts)

## Table of Contents

1. Overview
2. Getting Started
3. Project Structure
4. Scripts
5. Contributing
6. License

## Getting Started

Prerequisites

- Node.js (LTS recommended)
- npm or yarn
- TypeScript (installed per-project)

Quick setup

1. Clone the repo

   git clone <repository-url>

2. Install dependencies

   npm install

3. Build (compile TypeScript)

   npm run build

Tip: Use `npm run watch` during development to recompile on changes.

## Project Structure

This repo is organized as a playbook of focused examples. Expect folders such as `core/`, `generics/`, `react/` each containing small, annotated examples and test files that demonstrate patterns and edge-cases.

Typical contents

- README.md — this file
- package.json — scripts and dev dependencies
- tsconfig.json — TypeScript compiler configuration
- src/ — example source code and modules
- tests/ — optional tests and usage examples

## Scripts

Common npm scripts you might find (add or adapt in your `package.json`):

- `npm run build` — compile TypeScript to `dist/`
- `npm run watch` — run `tsc --watch` for iterative development
- `npm run lint` — run a linter (ESLint) against the codebase
- `npm test` — run unit tests (Jest / vitest / similar)

Add these to `package.json` if not present to make development easier.

## Contributing

Contributions are welcome. A good starting workflow:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-topic`
3. Add or update examples with clear comments and tests when applicable
4. Run linting and tests locally
5. Open a pull request describing your changes and rationale

Please follow these guidelines:

- Keep examples small and focused.
- Prefer clarity over cleverness.
- Include short comments explaining why a pattern is recommended.

## License

This repository is provided under the MIT License — see the `LICENSE` file for details.

## Contact

If you have questions or suggestions, open an issue or reach out to the maintainer.

---

Happy typing! 🎯
