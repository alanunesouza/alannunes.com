import ReactGA from 'react-ga';

export const onServiceWorkerUpdateReady = () => window.location.reload();

ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID);

export const onRouteUpdate = (state) => {
  ReactGA.pageview(state.location.pathname);
};
