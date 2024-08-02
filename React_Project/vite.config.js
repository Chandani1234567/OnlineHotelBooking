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
        server: {
            host: true,
            strictPort: true,
            port: 8000
        },
    }
});