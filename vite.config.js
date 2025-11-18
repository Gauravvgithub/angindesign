// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 9630,
//   },
// });


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from 'vite-plugin-commonjs'

export default defineConfig({
  plugins: [
    react(),
    commonjs() 
  ],
   server: {
    port: 9630,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})
