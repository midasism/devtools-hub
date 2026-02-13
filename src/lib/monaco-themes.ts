import { Monaco } from "@monaco-editor/react";

export type ThemeName = 
  | "vs-dark" 
  | "light" 
  | "github-dark" 
  | "dracula" 
  | "one-dark-pro" 
  | "nord"
  | "github-light"
  | "atom-one-light"
  | "solarized-light";

export const THEME_GROUPS = [
  {
    label: "Dark Themes",
    themes: [
      { label: "GitHub Dark", value: "github-dark" },
      { label: "Dracula", value: "dracula" },
      { label: "One Dark Pro", value: "one-dark-pro" },
      { label: "Nord", value: "nord" },
      { label: "VS Code Dark", value: "vs-dark" },
    ]
  },
  {
    label: "Light Themes",
    themes: [
      { label: "GitHub Light", value: "github-light" },
      { label: "Atom One Light", value: "atom-one-light" },
      { label: "Solarized Light", value: "solarized-light" },
      { label: "VS Code Light", value: "light" },
    ]
  }
];

export const defineThemes = (monaco: Monaco) => {
  // --- Dark Themes ---
  
  // GitHub Dark
  monaco.editor.defineTheme("github-dark", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "8b949e" },
      { token: "keyword", foreground: "ff7b72" },
      { token: "string", foreground: "a5d6ff" },
      { token: "number", foreground: "79c0ff" },
      { token: "type", foreground: "d2a8ff" },
      { token: "class", foreground: "d2a8ff" },
      { token: "function", foreground: "d2a8ff" },
      { token: "variable", foreground: "ffa657" },
    ],
    colors: {
      "editor.background": "#0d1117",
      "editor.foreground": "#c9d1d9",
      "editorCursor.foreground": "#c9d1d9",
      "editor.lineHighlightBackground": "#161b22",
      "editorLineNumber.foreground": "#6e7681",
      "editor.selectionBackground": "#1f6feb40",
      "editor.inactiveSelectionBackground": "#1f6feb20",
    },
  });

  // Dracula
  monaco.editor.defineTheme("dracula", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "6272a4" },
      { token: "keyword", foreground: "ff79c6" },
      { token: "string", foreground: "f1fa8c" },
      { token: "number", foreground: "bd93f9" },
      { token: "type", foreground: "8be9fd" },
      { token: "class", foreground: "8be9fd" },
      { token: "function", foreground: "50fa7b" },
      { token: "variable", foreground: "f8f8f2" },
    ],
    colors: {
      "editor.background": "#282a36",
      "editor.foreground": "#f8f8f2",
      "editorCursor.foreground": "#f8f8f0",
      "editor.lineHighlightBackground": "#44475a",
      "editorLineNumber.foreground": "#6272a4",
      "editor.selectionBackground": "#44475a",
      "editor.inactiveSelectionBackground": "#44475a80",
    },
  });

  // One Dark Pro
  monaco.editor.defineTheme("one-dark-pro", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "5c6370", fontStyle: "italic" },
      { token: "keyword", foreground: "c678dd" },
      { token: "string", foreground: "98c379" },
      { token: "number", foreground: "d19a66" },
      { token: "type", foreground: "e5c07b" },
      { token: "class", foreground: "e5c07b" },
      { token: "function", foreground: "61afef" },
      { token: "variable", foreground: "abb2bf" },
    ],
    colors: {
      "editor.background": "#282c34",
      "editor.foreground": "#abb2bf",
      "editorCursor.foreground": "#528bff",
      "editor.lineHighlightBackground": "#2c313c",
      "editorLineNumber.foreground": "#495162",
      "editor.selectionBackground": "#3e4451",
      "editor.inactiveSelectionBackground": "#3e445180",
    },
  });

  // Nord
  monaco.editor.defineTheme("nord", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "616e88" },
      { token: "keyword", foreground: "81a1c1" },
      { token: "string", foreground: "a3be8c" },
      { token: "number", foreground: "b48ead" },
      { token: "type", foreground: "8fbcbb" },
      { token: "class", foreground: "8fbcbb" },
      { token: "function", foreground: "88c0d0" },
      { token: "variable", foreground: "d8dee9" },
    ],
    colors: {
      "editor.background": "#2e3440",
      "editor.foreground": "#d8dee9",
      "editorCursor.foreground": "#d8dee9",
      "editor.lineHighlightBackground": "#3b4252",
      "editorLineNumber.foreground": "#4c566a",
      "editor.selectionBackground": "#434c5e",
      "editor.inactiveSelectionBackground": "#434c5e80",
    },
  });

  // --- Light Themes ---

  // GitHub Light
  monaco.editor.defineTheme("github-light", {
    base: "vs",
    inherit: true,
    rules: [
      { token: "comment", foreground: "6a737d" },
      { token: "keyword", foreground: "d73a49" },
      { token: "string", foreground: "032f62" },
      { token: "number", foreground: "005cc5" },
      { token: "type", foreground: "6f42c1" },
      { token: "class", foreground: "6f42c1" },
      { token: "function", foreground: "6f42c1" },
      { token: "variable", foreground: "e36209" },
    ],
    colors: {
      "editor.background": "#ffffff",
      "editor.foreground": "#24292e",
      "editorCursor.foreground": "#24292e",
      "editor.lineHighlightBackground": "#f6f8fa",
      "editorLineNumber.foreground": "#1b1f234d",
      "editor.selectionBackground": "#0366d625",
      "editor.inactiveSelectionBackground": "#0366d615",
    },
  });

  // Atom One Light
  monaco.editor.defineTheme("atom-one-light", {
    base: "vs",
    inherit: true,
    rules: [
      { token: "comment", foreground: "a0a1a7", fontStyle: "italic" },
      { token: "keyword", foreground: "a626a4" },
      { token: "string", foreground: "50a14f" },
      { token: "number", foreground: "986801" },
      { token: "type", foreground: "c18401" },
      { token: "class", foreground: "c18401" },
      { token: "function", foreground: "4078f2" },
      { token: "variable", foreground: "383a42" },
    ],
    colors: {
      "editor.background": "#fafafa",
      "editor.foreground": "#383a42",
      "editorCursor.foreground": "#526fff",
      "editor.lineHighlightBackground": "#f0f0f1",
      "editorLineNumber.foreground": "#9d9d9f",
      "editor.selectionBackground": "#e5e5e6",
      "editor.inactiveSelectionBackground": "#e5e5e680",
    },
  });

  // Solarized Light
  monaco.editor.defineTheme("solarized-light", {
    base: "vs",
    inherit: true,
    rules: [
      { token: "comment", foreground: "93a1a1", fontStyle: "italic" },
      { token: "keyword", foreground: "859900" },
      { token: "string", foreground: "2aa198" },
      { token: "number", foreground: "d33682" },
      { token: "type", foreground: "b58900" },
      { token: "class", foreground: "b58900" },
      { token: "function", foreground: "268bd2" },
      { token: "variable", foreground: "657b83" },
    ],
    colors: {
      "editor.background": "#fdf6e3",
      "editor.foreground": "#657b83",
      "editorCursor.foreground": "#657b83",
      "editor.lineHighlightBackground": "#eee8d5",
      "editorLineNumber.foreground": "#93a1a1",
      "editor.selectionBackground": "#eee8d5",
      "editor.inactiveSelectionBackground": "#eee8d580",
    },
  });
};
