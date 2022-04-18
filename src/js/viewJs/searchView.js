class Search {
  #parentEl = document.querySelector(".btn_search");
  data;
  addHanndle(handle) {
    this.#parentEl.addEventListener("click", (e) => {
      e.preventDefault();
      const data = document.querySelector(".search_input").value;
      handle(data);
    });
  }
}

export default new Search();
