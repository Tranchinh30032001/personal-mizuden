import react from '@vitejs/plugin-react'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'

export default defineConfig(() => {
  return {
    base: '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@components': path.resolve(__dirname, './src/components'),
        '@configs': path.resolve(__dirname, './src/configs'),
        '@constants': path.resolve(__dirname, './src/constants'),
        '@features': path.resolve(__dirname, './src/features'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@layouts': path.resolve(__dirname, './src/layouts'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@schemas': path.resolve(__dirname, './src/schemas'),
        '@services': path.resolve(__dirname, './src/services'),
        '@store': path.resolve(__dirname, './src/store'),
        '@utils': path.resolve(__dirname, './src/utils')
      }
    },

    plugins: [
      react(),
      viteCompression({
        algorithm: 'gzip',
        ext: '.gz',
        filter: /\.(js|css|html|svg)$/i,
        threshold: 10240
      }),

      visualizer({
        open: false,
        gzipSize: true,
        brotliSize: true
      })
    ],

    build: {
      target: 'es2015',
      outDir: 'dist',
      assetsDir: 'assets',
      cssCodeSplit: true,
      sourcemap: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom']
          }
        }
      }
    },

    server: {
      port: 3000,
      strictPort: true,
      headers: {
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'X-XSS-Protection': '1; mode=block'
      }
    },

    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
      exclude: []
    }
  }
})
