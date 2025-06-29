# DJS02
## Overview:
* We have been tasked with creating a custom HTML Element that displays the 
standard of Web Components, the component is supposed to accept Podcast data 
through attributes and properties.

### Technology used
* HTML
* CSS
* Javascript

---

## Web Component:
### How to use and register the component:
* import "./PodcastPreview.js" it registers itself as "podcast-preview" with the use of 
  customElements.define(). "podcast-preview" is meant to be reusable throughout the Javascript and HTML.

---

### How it passes data:
* It passes data with the use of setCard(cardObj), it gets the data from the card and begins to render the various
aspects of the Podcast preview.

---

### How it listens for interaction events:
* Click listeners are found in external modules such as the CreatePodcastCard.js where the card has an event listener
for the podcast preview. Another example is found index.js for closing the modal.

---

## Personal experience/Struggles:
* I came into this relatively confident of my abilities as I had a decent grasp on the creation of web components
* I admitally remade the PodcastPreview.js multiple times as I went through a trial and error process just trying to see an ampel of progress.
* I had a difficult fetching the attributes from the CreatePodcastCard.js as I didn't know where exactly to start

### References:
* https://www.youtube.com/watch?v=2I7uX8m0Ta0&t=922s
* https://youtu.be/j0qG-afD244?si=FnCCVo-quqkLmxsx
* https://youtu.be/PCWaFLy3VUo?si=k5iLhUhYHeSx25Aq
* https://developer.mozilla.org/en-US/docs/Web/API/Web_components
