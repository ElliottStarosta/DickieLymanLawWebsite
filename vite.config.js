import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'public/index.html'),
                legal: resolve(__dirname, 'public/legal-disclaimer.html')
            }
        }
    }
});
