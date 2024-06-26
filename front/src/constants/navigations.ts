const mainNavigiations = {
  HOME: 'Home',
  FEED: 'Feed',
  CALENDAR: 'Calendar',
};

const authNavigations = {
  AUTH_HOME: 'AuthHome',
  LOGIN: 'Login',
  SIGN_UP: 'SignUp',
} as const;

const mapNavigations = {
  MAP_HOME: 'MapHome',
} as const;

export {mainNavigiations, authNavigations, mapNavigations};
