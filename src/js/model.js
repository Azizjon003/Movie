import { getJson } from "./helper";
const { async } = require("regenerator-runtime");
export const state = {
  chiqar: [],
  pages: 1,
  currentPage: 1,
  data: "",
};
export const getModul = async function (data, num = state.currentPage) {
  try {
    if (!data) return;
    state.data = data;
    state.currentPage = num;
    const malumot = await getJson(data, state.currentPage);
    state.pages = +malumot.totalResults;
    saqla(malumot);
  } catch (err) {
    throw err;
  }
};
function saqla(data) {
  try {
    state.chiqar = data.Search.map((val) => {
      return {
        img: val.Poster,
        name: val.Title,
        year: val.Year,
      };
    });
  } catch (err) {
    throw err;
  }
}
