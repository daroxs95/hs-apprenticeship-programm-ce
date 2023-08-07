## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Web App
The app results in a static site, all pages are generated on build time and most of the components are pure server components, so the app can be deployed on any static site hosting service, changing this to use ISR or any other approach for server rendered pages should be straightforward.
## Tests
Unit tests can be run by using `yarn test`:
- Exist a test suite to check API endpoints responses correctness.

## NOTES

- ⚠️ The `faqSchema` of scholarships module is less restrictive as it should be to make the tests pass using the current API, as in it exists invalid(or al least not common) data, for example: are faqs answers that contains no `data` field
- `Burger` component has hardcoded dimensions, but can be easily extended
- Next images are unoptimized because the app is exporting to static site.
- For the applications end date all the years are fixed to 2024 to be able to correctly visualize the design
- The testimonials section doesn't render on every scholarship, the data from API is incomplete
- Some data ishardcoded due to missing data from API
