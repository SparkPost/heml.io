const primary = `#2097e4`
const font = `Muli, "Helvetica Neue", Helvetica, Arial, sans-serif`
const monospace = `'Source Code Pro', monospace`

/**
 * Globals
 */
export default `
  @import url('https://fonts.googleapis.com/css?family=Muli:200,300,400,600,700|Source+Code+Pro');

  * {
    position: relative;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${font};
    font-size: 16px;
    color: #333;
  }

  /**
   * Typography 🖊
   */
  h1, h2, h3, h4, h5, h6 {
    margin: 1.25em 0 .666666667em 0;
  }

  h1 {
    font-size: 2em;
    font-weight: 600;
  }

  h2 {
    font-size: 1.5em;
    font-weight: 600;
  }

  h3 {
    font-size: 1.25em;
    font-weight: 600;
  }

  h4 {
    font-size: 1.15em;
    font-weight: 600;
  }

  h5 {
    font-size: 1em;
    font-weight: 600;
  }

  h6 {
    font-size: .875em;
    font-weight: 600;
  }

  p {
    line-height: 1.75em;
    margin: 0 0 1em 0;
  }

  a {
    color: inherit; 
  }

  a:hover {
    color: ${primary};
  }

  hr {
    border: 1px solid #f0f0f0;
  }`

export const button = `
  /**
   * Buttons 🖱
   */
  :global(.button) {
    text-decoration: none;
    color: ${primary};
    background: white;
    border: 2px solid white;
    padding: .44em 1.2em;
    border-radius: 50px;
    display: inline-block;
    margin: 0 .25em;
    transition: all .25s;
    cursor: pointer;
    box-shadow: 0 2px 30px 0px rgba(30, 112, 167, 0.39);
    font-size: 1rem;
  }

  :global(.button:hover) {
    transform: translateY(-2px);
    box-shadow: 0 2px 30px 0px rgba(30, 112, 167, 0.6);
  }

  :global(.button--large) {
    font-size: 1.15em;
  }

  :global(.button--transparent) {
    background: transparent;
    color: white;
  }

  :global(.button--transparent:hover) {
    color: white;
  }`

/**
 * Header
 */
export const header = `
  #logo {
    font-size: 1.5em;
    margin: 0;
    line-height: 1em;
    font-family: ${monospace};
    font-weight: 400;
    color: ${primary};
  }

  #logo a {
    color: inherit;
    text-decoration: inherit;
  }

  .header {
    border-top: 3px solid ${primary};
    border-bottom: 1px solid #f0f0f0;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.25em 2em;
    z-index: 99;
    height: auto;
  }

  ul {
      padding: 0;
      list-style: none;
      margin: 0;
  }

  li {
    display: inline-block;
    margin: 0 .5em;
  }

  .header :global(a) {
    color: inherit;
    font-weight: inherit;
    text-decoration: none;
  }

  .header :global(.active) {
    color: ${primary};
    font-weight: 600;
  }`

/**
 * Home
 */
export const hero = `
  .hero {
    z-index: 1;
    background-image: linear-gradient(120deg, ${primary} 0%, #68b8fe 100%);
    color: #fff;
    padding: 70px;
    border-radius: 0 0 50% 50% / 4%;
  }

  .hero :global(h2) {
    margin-top: 1.5rem;
    font-size: 3.5em;
    margin-bottom: .25em;
    font-weight: bold;
    letter-spacing: 1.5px;
    line-height: 1.05em;
    display: inline-block;
  }

  .hero :global(h3) {
    font-size: 1.5em;
    margin-top: 0;
    margin-bottom: 1.5em;
    font-weight: 300;
  }`

export const philosophy = `
  .philosophy {
    background: #f9f8f9;
    display: flex;
    justify-content: space-around;
    margin-top: -2em;
    padding: 5em 2em 2em 2em;
  }

  .philosophy div {
    width: 30%;
  }

  .philosophy h3 {
    color: ${primary};
  }

  .philosophy p {
    margin-top: 0;
  }`

/**
 * Documentation
 */
export const navigation = `
  .navigation {
    position: fixed;
    padding: 0 2em 4em 2em;
    height: 100vh;
    width: 20%;
    overflow: auto;
    background: #f9fbfd;
    border-right: 1px solid #f0f0f0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 2em;
  }

  .navigation :global(a) {
    color: inherit;
    text-decoration: none;
  }

  .navigation :global(.active) {
    color: ${primary};
    font-weight: 600;
  }

  li {
    margin: 0 0 1em 0;
    padding: 0;
    font-weight: 600;
  }

  li ul {
    margin-top: 1em;
  }

  li ul li {
    font-weight: 400;
    font-size: .9rem;
    margin-left: 1em;
    margin-bottom: .75em;
  }`

export const sidebar = `
  aside {
    position: fixed;
    top: 0;
    padding: 64px 2em 2em 2em;
    width: 20%;
    overflow: auto;
    right: 0;
  }

  ul {
    padding: 2em 0;
    display: block;
    color: #666;
    font-size: .875em;
    list-style: none;
  }

  .divider {
    margin: 1em 0 1em 0;
    border-top: 2px dashed #f0f0f0;
  }

  li {
    margin: 0 0 .5em 0;
  }

  a {
    color: inherit;
    font: inherit;
    text-decoration: none;
  }`

export const documentation = `
  @import url('https://cdn.rawgit.com/PrismJS/prism-themes/master/themes/prism-base16-ateliersulphurpool.light.css');

  /**
   * Code 💻
   */
  :global(code) {
    background: #F4F7FB;
    padding: 0 .25em;
    font-size: .95em;
    border-radius: 3px;
    font-family: ${monospace};
  }

  :global(.gatsby-highlight pre) {
    background: #f9fbfd;
    border: 1px solid #ececec;
    border-radius: 3px;
    padding: .5em 1em;
    overflow: auto;
    margin: 0 0 1em 0;
  }

  :global(.gatsby-highlight code) {
    background: none;
    color: inherit;
    padding: 0;
    border-radius: 0;
  }
  
  /**
   * Tables 
   */
  :global(table) {
    border: 1px solid #ececec;
    overflow: hidden;
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    margin: 1em 0;
    border-radius: 3px;
  }

  
  :global(th) {
    font-weight: 600;
  }

  :global(h3) {
    margin: .5em 0;
  }

  :global(th:empty) {
    display: none;
  }

  :global(td), :global(th) {
    text-align: left; 
    padding: .375em .75em .375em .75em;
  }

  :global(td) {
    line-height: 1.75em;
    vertical-align: top;
  }

  :global(.bordered-table table) {
    border-width: 0 1px 1px 0;
  }

  :global(.bordered-table td), :global(.bordered-table th) {
    border: 1px solid #ececec;
    border-right: 0;
    border-bottom-width: 0;
  }

  :global(.fixed-table table) {
    table-layout: fixed;
  }

  :global(.attributes-table td) {
    line-height: 1.5em;
  }

  :global(.attributes-table td:first-child) {
    text-align: right;
    line-height: 1em;
  }

  :global(.attributes-table strong) {
    white-space: nowrap;
  }

  :global(small) {
    color: #888;
    display: block;
    margin-top: .25em;
    font-size: .875em;
    font-weight: 400;
    line-height: 1em;
  }`

/**
 * Editor
 */
export const editor = `
  #editor, #editor > div {
    padding: 68px 0 0 0;
    margin-top: -68px;
  }

  #editor {
    outline: 0;
    font-size: 16px;
    height: 100vh;
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  #navigation {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 40px;
  }

  #results {
    width: 100%;
    height: 100%;
    flex: 1;
  }
  
  #preview {
    border: 0;
    width: 100%;
    height: 100%;
  }

  #html {
    width: 100%;
    height: 100%;
    overflow: scroll;
    margin: 0;
  }

  *, *:before, *:after {
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      position: relative;
  }

  .root {
      height: 100vh;
      width: 100vw;
  }

  .Resizer {
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      background: #f4f4f5;
      box-shadow: inset 1px 0px 10px rgba(226, 226, 226, 0.45);
      z-index: 1;
      -moz-background-clip: padding;
      -webkit-background-clip: padding;
      background-clip: padding-box;
  }

  .Resizer.horizontal {
      height: 15px;
      cursor: row-resize;
      width: 100%;
  }
  .Resizer.vertical {
      width: 15px;
      cursor: col-resize;
  }

  .Resizer.vertical:after {
      content: " ";
      display: block;
      height: 3px;
      width: 7px;
      background: #e2e3e4;
      top: 50%;
      border-radius: 29%;
      box-shadow: 0 8px 0 0 #e2e3e4, 0 -8px 0 0 #e2e3e4;
      left: 50%;
      transform: translate(-65%, -50%);
  }

  .vertical section {
      width: 100vh;
      height: 100vh;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
          -ms-flex-direction: column;
              flex-direction: column;
  }

  .vertical header {
      padding: 1rem;
      background: #eee;
  }

  .vertical footer {
      padding: 1rem;
      background: #eee;
  }

  #vertically-nested-in-container-example {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
          -ms-flex: 1;
              flex: 1;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
  }

  .horizontal section {
      width: 100vh;
      height: 100vh;
      display: flex;
      flex-direction: column;
  }

  .horizontal header {
      padding: 1rem;
      background: #eee;
  }

  .horizontal footer {
      padding: 1rem;
      background: #eee;
  }

  #horizontally-nested-in-container-example {
      flex: 1;
      display: flex;
  }

  .parent {
      width: 100%;
      height: 100%;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
          -ms-flex: 1;
              flex: 1;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
          -ms-flex-direction: column;
              flex-direction: column;
  }

  .wrapper {
      background: #ffa;
      margin: 5rem;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
          -ms-flex: 1;
              flex: 1;
  }`
