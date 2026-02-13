import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import Home from '@/pages/Home';
import JsonFormatter from '@/pages/json/JsonFormatter';
import { ThemeProvider } from "@/components/theme-provider"

/**
 * App Component with Routing
 * Author: midasgao
 * Date: 2026-02-13
 */

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="devtools-hub-ui-theme">
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/json" element={<JsonFormatter />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
