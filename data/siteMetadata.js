/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'My Blog',
  author: 'Matias Leidemer',
  description: 'I write code that writes code',
  headerTitle: 'Matias Leidemer',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://matiasleidemer.dev',
  siteRepo: 'https://github.com/matiasleidemer/blog',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'matiasleidemer@gmail.com',
  github: 'https://github.com/matiasleidemer',
  linkedin: 'https://www.linkedin.com',
  locale: 'en-US',
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
}

module.exports = siteMetadata
