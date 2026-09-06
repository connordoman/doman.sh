import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import bash from "react-syntax-highlighter/dist/esm/languages/hljs/bash";
import powershell from "react-syntax-highlighter/dist/esm/languages/hljs/powershell";
import curl from "highlightjs-curl";
import shell from "react-syntax-highlighter/dist/esm/languages/hljs/shell";

import type { CSSProperties } from "react";
import AtomOneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark";
import GitHub from "react-syntax-highlighter/dist/esm/styles/hljs/github";

// react-syntax-highlighter doesn't ship highlight.js's github-dark theme, so
// it's transcribed here from highlight.js's styles/github-dark.css.
const GitHubDark: { [key: string]: CSSProperties } = {
  hljs: {
    display: "block",
    overflowX: "auto",
    padding: "0.5em",
    color: "#c9d1d9",
    background: "#0d1117",
  },
  "hljs-doctag": { color: "#ff7b72" },
  "hljs-keyword": { color: "#ff7b72" },
  "hljs-meta .hljs-keyword": { color: "#ff7b72" },
  "hljs-template-tag": { color: "#ff7b72" },
  "hljs-template-variable": { color: "#ff7b72" },
  "hljs-type": { color: "#ff7b72" },
  "hljs-variable.language_": { color: "#ff7b72" },
  "hljs-title": { color: "#d2a8ff" },
  "hljs-title.class_": { color: "#d2a8ff" },
  "hljs-title.class_.inherited__": { color: "#d2a8ff" },
  "hljs-title.function_": { color: "#d2a8ff" },
  "hljs-attr": { color: "#79c0ff" },
  "hljs-attribute": { color: "#79c0ff" },
  "hljs-literal": { color: "#79c0ff" },
  "hljs-meta": { color: "#79c0ff" },
  "hljs-number": { color: "#79c0ff" },
  "hljs-operator": { color: "#79c0ff" },
  "hljs-variable": { color: "#79c0ff" },
  "hljs-selector-attr": { color: "#79c0ff" },
  "hljs-selector-class": { color: "#79c0ff" },
  "hljs-selector-id": { color: "#79c0ff" },
  "hljs-regexp": { color: "#a5d6ff" },
  "hljs-string": { color: "#a5d6ff" },
  "hljs-meta .hljs-string": { color: "#a5d6ff" },
  "hljs-built_in": { color: "#ffa657" },
  "hljs-symbol": { color: "#ffa657" },
  "hljs-comment": { color: "#8b949e" },
  "hljs-code": { color: "#8b949e" },
  "hljs-formula": { color: "#8b949e" },
  "hljs-name": { color: "#7ee787" },
  "hljs-quote": { color: "#7ee787" },
  "hljs-selector-tag": { color: "#7ee787" },
  "hljs-selector-pseudo": { color: "#7ee787" },
  "hljs-subst": { color: "#c9d1d9" },
  "hljs-section": { color: "#1f6feb", fontWeight: "bold" },
  "hljs-bullet": { color: "#f2cc60" },
  "hljs-emphasis": { color: "#c9d1d9", fontStyle: "italic" },
  "hljs-strong": { color: "#c9d1d9", fontWeight: "bold" },
  "hljs-addition": { color: "#aff5b4", backgroundColor: "#033a16" },
  "hljs-deletion": { color: "#ffdcd7", backgroundColor: "#67060c" },
};

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("powershell", powershell);
SyntaxHighlighter.registerLanguage("curl", curl);
SyntaxHighlighter.registerLanguage("shell", shell);

const syntaxStyles = {
  AtomOneDark,
  AtomOneDarkTransparent: {
    ...AtomOneDark,
    hljs: { ...AtomOneDark.hljs, background: "transparent", padding: 0 },
  },
  GitHub,
  GitHubTransparent: {
    ...GitHub,
    hljs: { ...GitHub.hljs, background: "transparent", padding: 0, margin: 0 },
  },
  GitHubDark,
  GitHubDarkTransparent: {
    ...GitHubDark,
    hljs: { ...GitHubDark.hljs, background: "transparent", padding: 0, margin: 0 },
  },
};

const Syntax = {
  Highlighter: SyntaxHighlighter,
  styles: syntaxStyles,
};

export default Syntax;
