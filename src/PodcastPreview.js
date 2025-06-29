/**
 * Creates a template with the use of inner.html for the podcast cards
 */
const template = document.createElement("template");
template.innerHTML = /*html*/ `
  
<div class="card">
    <img id="cover" alt="Podcast cover" />
    <h3 id="title"></h3>
    <p id="seasons"></p>
    <div class="tags" id="tags"></div>
    <p class="updated-text" id="updated"></p>
  </div>
`;

/**
 * Defines a new custom HTML element
 */
class PodcastPreview extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
  }
  /**
   * Accepts the Podcast data object and begins rendering
   * @param {object} cardObj - It is the Podcast data such as the image, title, seasons, genres and updated info
   */
  setCard(cardObj) {
    this.card = cardObj;
    this.render();
  }

  render() {
    if (!this.card) return;
    const shadow = this.shadowRoot;
    shadow.getElementById("cover").src = this.card.image;
    shadow.getElementById("cover").alt = `${this.card.title} cover`;
    shadow.getElementById("title").textContent = this.card.title;
    shadow.getElementById("seasons").textContent = `${
      this.card.seasons
    } season${this.card.seasons > 1 ? "s" : ""}`;

    const tagsContainer = shadow.getElementById("tags");
    tagsContainer.innerHTML = this.card.genreNames
      .map((g) => `<span class="tag">${g}</span>`)
      .join("");

    shadow.getElementById("updated").textContent = this.card.updatedFormatted;
  }
}

customElements.define("podcast-preview", PodcastPreview);
