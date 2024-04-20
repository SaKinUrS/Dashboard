import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@/': path.resolve(__dirname, 'src') + '/',
            '@models': path.resolve(__dirname, 'src/models'),
            '@features': path.resolve(__dirname, 'src/features'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@enums': path.resolve(__dirname, 'src/enums'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@icons': path.resolve(__dirname, 'src/icons'),
        },
    },
});
