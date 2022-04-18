class Pagination {
  #parentEl = document.querySelector(".pagination");
  #data;
  render(data) {
    this.#data = data;
    this.#parentEl.innerHTML = "";
    this.generatehtml();
  }
  generatehtml() {
    const page1 = Math.ceil(this.#data.pages / 10);
    const currentPage = this.#data.currentPage;
    const prewbtn = `<button class="prew_btn btn_inline" id = "${
      currentPage - 1
    }">Page ${currentPage - 1}</button>`;
    const nextbtn = `<button class="next_btn btn_inline" id="${
      currentPage + 1
    }">Next ${currentPage + 1}</button>`;

    if (currentPage < page1) {
      this.#parentEl.insertAdjacentHTML("afterbegin", nextbtn);
    }
    if (currentPage > 1) {
      this.#parentEl.insertAdjacentHTML("afterbegin", prewbtn);
    }
  }
  addHandlePage(handle) {
    this.#parentEl.addEventListener("click", (evt) => {
      const btn = evt.target.closest(".btn_inline");
      if (!btn) return;
      const g = btn.getAttribute("id") - 0;
      console.log(g);
      handle(g);
    });
  }
}
export default new Pagination();
