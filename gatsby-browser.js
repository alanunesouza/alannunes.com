import ReactGA from 'react-ga';

export const onServiceWorkerUpdateReady = () => window.location.reload();

ReactGA.initialize(process.env.GATSBY_GOOGLE_ANALYTICS_ID || 'none');

export const onRouteUpdate = (state) => {
  ReactGA.pageview(state.location.pathname);
};
