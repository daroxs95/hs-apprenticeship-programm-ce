export const endpoints = {
  api: {
    apprenticeship: "https://pre-prod.harbour.space/api/v1/scholarship_pages",
  },
  resolvers: {
    getScholarshipDetail: (slug: string) => `/${slug}`,
  },
};
