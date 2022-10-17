# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0).
Frontend Mentor challenges help me improve my coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Base Apparel coming soon page solution](#frontend-mentor---base-apparel-coming-soon-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Models & my works](#models--my-works)
- [Desktop version:](#desktop-version)
- [Mobile version](#mobile-version)
- [Active states version](#active-states-version)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Models & my works

# Desktop version:

Model:

![desktop version](/assets/design/desktop-design.jpg)

My work:

![desktop version](/assets/my-work/my-work-desktop-version.png)

# Mobile version

Model:

![mobile version](/assets/design/mobile-design.jpg)

My work:

![mobile version](/assets/my-work/my-work-mobile-version.png)

# Active states version

Model:

![Active states version](/assets/design/active-states.jpg)

My work:

![Active states version](/assets/my-work/my-work-active-states-version.png)

### Links

- Solution URL: [Code on GitHub](https://github.com/ClaireKarsenti/Frontend-Mentor-Solution-Base-Apparel-Coming-Soon-Page)
- Live Site URL: [GitHub Pages Live URL](https://clairekarsenti.github.io/Frontend-Mentor-Solution-Base-Apparel-Coming-Soon-Page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla Javascript

### What I learned

This project allowed me to deepen my knowledge of HTML5, CSS, flexbox and one my understanding and my method for the responsive design. I started building my content for smaller screen first and then adjust it for larger screens.

For the image to be responsive, I discovered ```<picture> </picture>```  tag. Before I used an empty ```<div> </div>```  tag with a class attribute to switch the image on different resolution. Comparing the two, the "picture" tag is more readable and easy to use.

```html
  <picture>
      <source
          media="(min-width: 768px)"
          srcset="./assets/images/hero-desktop.jpg"
      />
      <img src="./assets/images/hero-mobile.jpg" alt="Woman" />
  </picture>
```

## Author

- Linkedin - [Claire Karsenti](https://www.linkedin.com/in/claire-karsenti/)
- Frontend Mentor - [@ClaireKarsent](https://www.frontendmentor.io/profile/ClaireKarsenti)
