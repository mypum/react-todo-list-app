import { css } from 'styled-components'

const mainFont = '"Kanit", sans-serif'

export default css`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 14px;
    -webkit-text-size-adjust: none;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-size: 1rem;
    font-family: ${mainFont};
    line-height: 1.5;
    color: #0d142c;
    background-color: #e6e6f4;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  abbr[title],
  abbr[data-original-title] {
    cursor: help;
    border-bottom: 1px dotted #cccccc;
  }

  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }

  img {
    vertical-align: middle;
  }

  [role='button'] {
    cursor: pointer;
  }

  a,
  area,
  button,
  [role='button'],
  input,
  label,
  select,
  summary,
  textarea {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }

  input,
  button,
  select,
  textarea {
    margin: 0;
    line-height: inherit;
    border-radius: 0;
    -webkit-appearance: none;
  }

  input[type='radio']:disabled,
  input[type='checkbox']:disabled {
    cursor: not-allowed;
  }

  input[type='date'],
  input[type='time'],
  input[type='datetime-local'],
  input[type='month'] {
    -webkit-appearance: listbox;
  }

  textarea {
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  input[type='search'] {
    -webkit-appearance: none;
  }

  output {
    display: inline-block;
  }

  [hidden] {
    display: none !important;
  }

  input,
  select,
  textarea {
    font-family: ${mainFont};
  }

  a {
    color: #ed1c24;
    text-decoration: none;
  }

  a:focus {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: 1rem;
    font-family: ${mainFont};
    font-weight: 400;
  }

  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  ol,
  ul {
    list-style: none;
  }
`
