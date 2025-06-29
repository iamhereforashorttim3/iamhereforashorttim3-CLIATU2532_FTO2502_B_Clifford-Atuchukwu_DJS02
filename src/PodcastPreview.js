class PodcastPreview extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(PodcastPreview.content.cloneNode(true));
  }
}

customElements.define("podcast-preview", PodcastPreview);
