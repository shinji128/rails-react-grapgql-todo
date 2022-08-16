"use strict";
import { createRoot } from 'react-dom/client';
import HelloMessage from './components/App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

document.addEventListener('DOMContentLoaded', () => {
  root.render(<HelloMessage name="World" />);
});
