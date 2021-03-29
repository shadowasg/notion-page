module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'Homepage-1ddf3afe8d7b47e68bb71d2246f4f545',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Anton Spiridonov',
  domain: 'anspiridonov.ru',
  author: 'Anton Spiridonov',

  // open graph metadata (optional)
  //description: 'Welcome to my homepage!',
  //socialImageTitle: '',
  //socialImageSubtitle: '',

  // social usernames (optional)
  //twitter: '',
  //github: '',
  //linkedin: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: null //{
  //   '/cv': 'CV-d39b4f6519fc480c98f3ea2f537e7680',
  //   '/rfid': 'RFID-546ec2736baa499e9d43168c49367bcc',
  //   '/conveyor': 'Low-code-05975e97efb14dfcafe013fd2037610e'
  // }
}
