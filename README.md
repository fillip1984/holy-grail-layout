# Holy grail -layout

My attempt to build out a set of useful UI/UX components with tailwind

![Sample of project](sample.gif)

While working on other projects I commonly forget how to do something. I wanted to use this app to remind myself how I've accomplished the holy grail layout so I don't have to go and hunt on youtube/google.

I wouldn't recommend that you use this code as is! I would seek out 3rd party libraries that accomplish the more complex bits. There are definitely bugs in these UI components. What this project does do is give you a sense of how things can be accomplished. That should help you decide whether you should find a UI library or not, and also in understanding how to troubleshoot or customize other libraries that are built to handle toast, modal, drawers, etc...

## Goals

- [ X ] [Holy grail layout](<https://en.wikipedia.org/wiki/Holy_grail_(web_design>)
  - [ X ] Main section scrolls independent of header, side nav, and footer effectively making them all static or fixed
  - [ X ] Side nav is... somewhat responsive. Wasn't striving for mobile first
- [ X ] Side drawer
- [ X ] Bottom drawer
- [ X ] toasts
  - [ ] add progress bar or ring to indicate how long a toast will remain before being dismissed
- [ X ] modal

## Prerequisites

- You have node.js, npm, and vs code installed

## Creating a clone from this repository

There's nothing really special about this project -- no middleware, database, etc...

1) Just pull down the project (e.g. git clone <https://github.com/fillip1984/holy-grail-layout.git>)
2) run npm install to pull down dependencies
3) then run npm run dev

## Project was bootstrapped via degit

I have created a project that I use to bootstrap other projects. You can find out more from the below links to learn how to do the same if you wish.

- [UI Tooling](<https://github.com/fillip1984/ui-tooling-2>)
- The above repository was inspired by [TheSwordBreaker/vite-reactts-eslint-prettier](https://raw.githubusercontent.com/TheSwordBreaker/vite-reactts-eslint-prettier/main/README.md)
