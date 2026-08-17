# Enterprise Playwright QA Architecture

An enterprise-grade, highly scalable Playwright automation framework designed for advanced UI interaction and strict WCAG accessibility compliance auditing.

## Architecture Highlights
- **Page Object Model (POM)**: Encapsulated UI interactions using strict TypeScript classes.
- **Custom Test Fixtures**: Extended Playwright runner for seamless dependency injection of page objects.
- **Automated A11y Auditing**: Integrated `@axe-core/playwright` for strict WCAG 2.2 AA enforcement.
- **Continuous Integration**: Natively configured with GitHub Actions and Dependabot.

## Installation
```bash
npm install
npx playwright install
```

## Execution
```bash
# Run full E2E suite
npm run test

# Run accessibility audits only
npm run test:a11y

# Open UI mode for debugging
npm run test:ui
```

## License
MIT
