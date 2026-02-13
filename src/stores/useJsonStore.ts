import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { JsonError } from '@/lib/json-utils';

/**
 * JSON Tool Store
 * Author: midasgao
 * Date: 2026-02-13
 */

interface JsonState {
  input: string;
  output: string;
  error: JsonError | null;
  editorTheme: string;
  setInput: (input: string) => void;
  setOutput: (output: string) => void;
  setError: (error: JsonError | null) => void;
  setEditorTheme: (theme: string) => void;
  reset: () => void;
}

export const useJsonStore = create<JsonState>()(
  persist(
    (set) => ({
      input: '',
      output: '',
      error: null,
      editorTheme: 'github-dark', // Default to a nice dark theme
      setInput: (input) => set({ input }),
      setOutput: (output) => set({ output }),
      setError: (error) => set({ error }),
      setEditorTheme: (editorTheme) => set({ editorTheme }),
      reset: () => set({ input: '', output: '', error: null }),
    }),
    {
      name: 'devtools-hub-json-store',
      partialize: (state) => ({ editorTheme: state.editorTheme }), // Only persist theme preference
    }
  )
);
