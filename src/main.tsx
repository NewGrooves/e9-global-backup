import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
import './index.css'

console.log('Main.tsx executing');

const rootElement = document.getElementById("root");
console.log('Root element found:', rootElement);

if (rootElement) {
  createRoot(rootElement).render(<App />);
  console.log('React app rendered');
} else {
  console.error('Root element not found!');
}
