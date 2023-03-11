# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](../resultsSummaryComponent/src/design/desktop-design.jpg)

### Links

- Solution URL: https://main--sensational-bavarois-456919.netlify.app/
- Live Site URL: https://main--sensational-bavarois-456919.netlify.app/

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

In here I reinforced how to add the "only-corners" borders. With 2 elements and after and before pseudoelements for both:

```css
.icon-category::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  border-top-left-radius: 10px;
  border: 1px solid hsla(241, 100%, 89%, 0.5);
  border-bottom: 0;
  border-right: 0;
  top: 0;
  left: 0;
}

.icon-category::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  border-bottom-left-radius: 10px;
  border: 1px solid hsla(241, 100%, 89%, 0.5);
  border-top: 0;
  border-right: 0;
  bottom: 0;
  left: 0;
}

.stat-score::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  border-top-right-radius: 10px;
  border: 1px solid hsla(241, 100%, 89%, 0.5);
  border-bottom: 0;
  border-left: 0;
  top: 0;
  right: 0;
}

.stat-score::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid hsla(241, 100%, 89%, 0.5);
  border-top: 0;
  border-left: 0;
  bottom: 0;
  right: 0;
}
```

### Continued development

Need to improve the media queries and html5 markup for better accesibility.

## Author

- Website - www.david-gomez.xyz
- Frontend Mentor - https://www.frontendmentor.io/profile/dav9go
