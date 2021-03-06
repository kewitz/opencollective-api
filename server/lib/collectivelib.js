/**
 * Check if given `slug` could conflict with existing routes or
 * if it's a reserved keyword.
 *
 * The list is mostly based on frontend `src/server/pages.js` file and
 * `src/pages/static` content.
 *
 * @param {String} slug
 */
export function isBlacklistedCollectiveSlug(slug) {
  return [
    'about',
    'admin',
    'applications',
    'become-a-sponsor',
    'chapters',
    'collective',
    'contact',
    'contribute',
    'create',
    'create-account',
    'discover',
    'donate',
    'edit',
    'expenses',
    'faq',
    'gift-card',
    'gift-cards',
    'gift-cards-next',
    'gift-of-giving',
    'help',
    'home',
    'host',
    'hosts',
    'how-it-works',
    'join',
    'join-free',
    'learn-more',
    'opensource',
    'order',
    'orders',
    'pledge',
    'pledges',
    'privacypolicy',
    'redeem',
    'redeemed',
    'register',
    'search',
    'signin',
    'signup',
    'subscriptions',
    'tos',
    'transactions',
    'widgets',
  ].includes(slug);
}
