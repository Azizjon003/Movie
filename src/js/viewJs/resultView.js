import images from "../../images/gifs.svg";
class showKino {
  #parentEl = document.querySelector(".movies");
  #data;
  render(data) {
    this.#data = data;
    this.#parentEl.innerHTML = "";
    document.querySelector(".load").innerHTML = "";
    this.#data.forEach((item) => {
      this.generatorHtml(item);
    });
  }

  generatorHtml(data) {
    const html = `<div class="movies_container">
   <div class="movie">
     <img src="${data.img}" alt="" class="movies_img" />
   </div>
   <div class="rotate">
     <div class="title"><p>${data.name}</p></div>
     <div class="year"><p>${data.year}</p></div>
   </div>
 </div>`;
    this.#parentEl.insertAdjacentHTML("afterbegin", html);
  }
  load() {
    const html = `<img src="${images}" />`;
    document.querySelector(".load").insertAdjacentHTML("afterbegin", html);
  }
}
export default new showKino();
