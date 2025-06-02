import { getState } from "../store/store.js";
import { loadPage } from "../utils/loadPage.js";
import { renderLoginPage } from "../pages/loginPage.js";
// import { renderMainPage } from "../features/todo/pages/mainPage.js";

const pagesMap = {
  login: renderLoginPage,
  //   home: renderMainPage,
  //   profile: renderProfilePage,
  //   stats: renderStatsPage,
};

export function render() {
  const state = getState();
  const pageKey = state.token ? state.currentPage : "login";
  const pageFunc = pagesMap[pageKey];

  loadPage(pageFunc, state);
}
