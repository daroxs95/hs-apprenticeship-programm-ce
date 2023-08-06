## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## NOTES

- ⚠️ The `faqSchema` of scholarships module is less restrictive as it should be to make the tests pass using the current API, as in it exists invalid(or al least not common) data, for example: are faqs answers that contains no `data` field
- `Burger` component has hardcoded dimensions, but can be easily extended
- Next images are unoptimized because the app is exporting to static site.
- For the applications end date all the years are fixed to 2024 to be able to correctly visualize the design
