import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: "./",
    plugins: [vue(), dts({ include: ['src/**/*.ts', 'src/**/*.d.ts', 'src/**/*.vue'], outDir: 'dist/types' })],
    build: mode === "production" ? {
      outDir: "dist", //输出文件名称
      lib: {
        entry: resolve(__dirname, './src/index.ts'), //指定组件编译入口文件
        name: 'cover-image-adjuster',
        fileName: (format) => `index.${format}.js` // 打包后的文件名
      }, //库编译模式配置
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ["vue"],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: "Vue",
          },
        },
      }, // rollup打包配置
    } : {}
  }
})
