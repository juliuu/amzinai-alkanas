import { v4 as uuidv4 } from 'uuid';

export const toDate = (timestamp) => {
  return new Date(timestamp).toLocaleString('lt-LT', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
};

const __parseCookieString = (cookieString) => {
  if (typeof cookieString !== 'string') return;
  return cookieString.split(/;\s+/).reduce((acc, cookie) => {
    const index = cookie.indexOf('=');
    acc[cookie.substring(0, index)] = cookie.substring(index + 1);
    return acc;
  }, {});
};

export const __getAnonymousUserId = (key = 'ANON_USER_ID') => {
  let anonymousUserId = __parseCookieString(document.cookie)[key];
  anonymousUserId = anonymousUserId || uuidv4();
  document.cookie = `ANON_USER_ID=${anonymousUserId};`;
  return anonymousUserId;
};
