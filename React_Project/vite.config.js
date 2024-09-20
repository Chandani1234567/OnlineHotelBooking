import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        define: {
            // Example for MongoDB URI (if needed in frontend)
            'process.env.MONGO_URI': JSON.stringify(env.MONGO_URI),
        },
        plugins: [react()],
        build: {
            outDir: 'dist', // Ensure this matches your Render.com publish directory
        },
        // Ensure all requests redirect to index.html for React Router
        server: {
            historyApiFallback: true, // This ensures the server redirects all requests to index.html
        },
    };
});
