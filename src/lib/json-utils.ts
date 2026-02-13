/**
 * JSON Utility functions
 * Author: midasgao
 * Date: 2026-02-13
 */

export interface JsonError {
  line: number;
  message: string;
}

export function formatJson(json: string, space: number = 2): string {
  try {
    const parsed = JSON.parse(json);
    return JSON.stringify(parsed, null, space);
  } catch (e) {
    throw e;
  }
}

export function minifyJson(json: string): string {
  try {
    const parsed = JSON.parse(json);
    return JSON.stringify(parsed);
  } catch (e) {
    throw e;
  }
}

export function validateJson(json: string): JsonError | null {
  try {
    JSON.parse(json);
    return null;
  } catch (e: any) {
    // Attempt to extract line number from error message if possible
    // V8 error messages usually look like: "Unexpected token } in JSON at position 123"
    // Getting line number from position requires checking newlines up to that position.
    
    // For now, return the message.
    return {
      line: 0, // Todo: implement position to line conversion
      message: e.message
    };
  }
}
