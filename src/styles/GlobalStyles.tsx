/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import "pretendard/dist/web/variable/pretendardvariable.css";

const GlobalStyles = () => (
  <Global
    styles={(theme) => css`
      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
      /* HTML5 display-role reset for older browsers */
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }
      body {
        line-height: 1;
      }
      ol,
      ul {
        list-style: none;
      }
      blockquote,
      q {
        quotes: none;
      }
      blockquote:before,
      blockquote:after,
      q:before,
      q:after {
        content: "";
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      :root {
        font-family: "Pretendard Variable", sans-serif;
        line-height: 1.5;
        font-weight: 400;

        color: rgba(255, 255, 255, 0.87);
        background-color: #f1f4f8;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      /* 기본 밑줄 제거 */
      a {
        text-decoration: none;
      }

      /* 아직 방문하지 않은 링크의 글자색 정의 */
      a:link {
        ${theme.colors.neutral.text.weak};
      }

      /* 사용자가 방문한 적이 있는(클릭한 이후) 링크의 글자색 정의 */
      a:visited {
      }

      /* 마우스를 링크에 올려두었을 때, 글자색을 정의 */
      a:hover {
        text-decoration: underline;
      }

      /* 마우스로 링크를 클릭하고 뗄 때까지의 글자색을 정의 */
      a:active {
        color: green;
      }

      body {
        margin: 0;
        display: flex;
        place-items: center;
        /* min-width: 930px; */
        min-height: 100vh;
        box-sizing: border-box;
      }

      h1 {
        font-size: 3.2em;
        line-height: 1.1;
      }

      p {
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        :root {
          color: #213547;
          background-color: #ffffff;
        }
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `}
  />
);

export default GlobalStyles;
