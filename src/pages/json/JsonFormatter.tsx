import React, { useEffect } from 'react';
import MonacoEditor from '@/components/editor/MonacoEditor';
import { Button } from '@/components/ui/button';
import { useJsonStore } from '@/stores/useJsonStore';
import { formatJson, minifyJson, validateJson } from '@/lib/json-utils';
import { Copy, Trash2, Download, Minimize2, FileJson, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from "@/components/ui/select"
import { THEME_GROUPS } from '@/lib/monaco-themes';

/**
 * JSON Formatter Page
 * Author: midasgao
 * Date: 2026-02-13
 */

const JsonFormatter: React.FC = () => {
  const { 
    input, 
    output, 
    error, 
    editorTheme,
    setInput, 
    setOutput, 
    setError, 
    setEditorTheme,
    reset 
  } = useJsonStore();

  const handleFormat = () => {
    if (!input) return;
    const validationError = validateJson(input);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    try {
      const formatted = formatJson(input);
      setOutput(formatted);
    } catch (e: any) {
      setError({ line: 0, message: e.message });
    }
  };

  const handleMinify = () => {
    if (!input) return;
    const validationError = validateJson(input);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    try {
      const minified = minifyJson(input);
      setOutput(minified);
    } catch (e: any) {
      setError({ line: 0, message: e.message });
    }
  };

  const handleClear = () => {
    reset();
  };

  const handleCopy = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      // Optional: Add toast notification here
    }
  };
  
  const handleDownload = () => {
      if(!output) return;
      const blob = new Blob([output], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'formatted.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
  }

  // Auto-validate on input change (optional, maybe debounce)
  useEffect(() => {
    if (input) {
      const err = validateJson(input);
      setError(err);
    } else {
        setError(null);
    }
  }, [input, setError]);


  return (
    <div className="container py-6 space-y-4 h-[calc(100vh-3.5rem)] flex flex-col">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <FileJson className="h-8 w-8 text-primary" />
          JSON Formatter
        </h1>
        <div className="flex flex-wrap items-center gap-2">
           <Select value={editorTheme} onValueChange={setEditorTheme}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              {THEME_GROUPS.map((group, index) => (
                <React.Fragment key={group.label}>
                  {index > 0 && <SelectSeparator className="my-2" />}
                  <SelectGroup>
                    <SelectLabel className="px-2 py-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      {group.label}
                    </SelectLabel>
                    {group.themes.map((theme) => (
                      <SelectItem key={theme.value} value={theme.value}>
                        {theme.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </React.Fragment>
              ))}
            </SelectContent>
          </Select>
          <div className="w-px h-6 bg-border mx-2 hidden md:block" />
          <Button onClick={handleFormat} className="bg-primary hover:bg-primary/90 text-white font-bold">
            Format
          </Button>
          <Button onClick={handleMinify} variant="secondary">
            <Minimize2 className="mr-2 h-4 w-4" />
            Minify
          </Button>
          <Button onClick={handleCopy} variant="outline" disabled={!output}>
            <Copy className="mr-2 h-4 w-4" />
            Copy
          </Button>
           <Button onClick={handleDownload} variant="outline" disabled={!output}>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button onClick={handleClear} variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Clear
          </Button>
        </div>
      </div>

      {error && (
        <div className="bg-destructive/15 text-destructive px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium border border-destructive/20">
          <AlertCircle className="h-4 w-4" />
          {error.message}
        </div>
      )}

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 min-h-0">
        <div className="flex flex-col gap-2 h-full">
          <label className="text-sm font-medium text-muted-foreground">Input</label>
          <div className="flex-1 border rounded-md overflow-hidden bg-card shadow-sm">
            <MonacoEditor
              value={input}
              onChange={(value) => setInput(value || '')}
              language="json"
              theme={editorTheme}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 h-full">
          <label className="text-sm font-medium text-muted-foreground">Output</label>
          <div className="flex-1 border rounded-md overflow-hidden bg-card shadow-sm relative">
            <MonacoEditor
              value={output}
              language="json"
              options={{ readOnly: true }}
              theme={editorTheme}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsonFormatter;
