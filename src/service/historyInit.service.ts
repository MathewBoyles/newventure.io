import { createBrowserHistory, History } from "history";

export const HistroyInit = (): History => {
  const browserHistory = createBrowserHistory();

  return browserHistory;
};
