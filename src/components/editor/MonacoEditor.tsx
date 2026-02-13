import React, { useEffect } from 'react';
import Editor, { EditorProps, OnMount } from '@monaco-editor/react';
import { defineThemes } from '@/lib/monaco-themes';

/**
 * Monaco Editor Wrapper
 * Author: midasgao
 * Date: 2026-02-13
 */

interface MonacoEditorProps extends EditorProps {
  // Add any custom props here
}

const MonacoEditor: React.FC<MonacoEditorProps> = ({ 
  height = "100%", 
  defaultLanguage = "json",
  theme = "github-dark",
  options = {},
  ...props 
}) => {
  
  const handleEditorDidMount: OnMount = (editor, monaco) => {
    // Define all custom themes
    defineThemes(monaco);
    
    // Set initial theme
    monaco.editor.setTheme(theme);
    
    if (props.onMount) {
      props.onMount(editor, monaco);
    }
  };

  return (
    <Editor
      height={height}
      defaultLanguage={defaultLanguage}
      theme={theme}
      options={{
        minimap: { enabled: false },
        fontSize: 14,
        fontFamily: 'JetBrains Mono, monospace',
        scrollBeyondLastLine: false,
        automaticLayout: true,
        padding: { top: 16, bottom: 16 },
        ...options
      }}
      onMount={handleEditorDidMount}
      {...props}
    />
  );
};

export default MonacoEditor;
