import { async } from "regenerator-runtime";
import * as model from "./model";
import resultView from "./viewJs/resultView";
import Search from "./viewJs/searchView";
import pagination from "./viewJs/pagination";

const getModule = async function (data) {
  resultView.load();
  await model.getModul(data);

  resultView.render(model.state.chiqar);
  pagination.render(model.state);
};
const paginationView = async function (num) {
  resultView.load();

  await model.getModul(model.state.data, num);
  pagination.render(model.state);
  resultView.render(model.state.chiqar);
  console.log(model.state.currentPage);
};

pagination.addHandlePage(paginationView);
Search.addHanndle(getModule);
