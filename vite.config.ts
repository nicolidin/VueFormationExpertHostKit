import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const libSrcPath = path.resolve(
  __dirname,
  'submodule/vue-lib-submodule-kit/src',
);

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      {
        find: '@vueLibExo/',
        replacement: `${libSrcPath}/`,
      },
    ],
  },
  server: {
    fs: {
      allow: [path.resolve(__dirname), libSrcPath],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [path.join(libSrcPath, 'styles')],
        additionalData: `@use "${path.join(libSrcPath, 'styles/sfc-scss-prelude.scss').split(path.sep).join('/')}" as *;`,
      },
    },
  },
});
