# CoverImageAdjuster

一个用于调整封面图片位置的Vue 3组件，支持拖拽调整图片位置，适用于封面图片裁剪场景。

## 特性

- 支持鼠标拖拽和触摸拖拽
- 自动适应容器尺寸
- 支持设置初始位置
- 支持禁用拖拽
- 支持自定义容器尺寸
- TypeScript支持

## 安装

```bash
npm install cover-image-adjuster
# 或
yarn add cover-image-adjuster
```

## 使用

### 全局注册

```ts
import { createApp } from 'vue'
import CoverImageAdjuster from 'cover-image-adjuster'

const app = createApp(App)
app.use(CoverImageAdjuster)
```

### 局部注册

```vue
<script setup lang="ts">
import { CoverImageAdjuster } from 'cover-image-adjuster'
</script>

<template>
  <CoverImageAdjuster
    src="path/to/your/image.jpg"
    :width="400"
    :height="300"
    @positionChange="handlePositionChange"
  />
</template>
```

## Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|---------|------|
| src | string | - | 图片URL（必填） |
| width | number | 200 | 容器宽度（像素） |
| height | number | 200 | 容器高度（像素） |
| draggable | boolean | true | 是否可拖拽 |
| initialPosition | { x: number, y: number } | { x: 0, y: 0 } | 图片初始位置 |

## 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| positionChange | { x: number, y: number } | 图片位置变化时触发 |

## 示例

### 基础用法

```vue
<template>
  <CoverImageAdjuster
    src="/example.jpg"
    :width="400"
    :height="300"
    @positionChange="(pos) => console.log('Position changed:', pos)"
  />
</template>
```

### 设置初始位置

```vue
<template>
  <CoverImageAdjuster
    src="/example.jpg"
    :width="400"
    :height="300"
    :initialPosition="{ x: -50, y: -30 }"
  />
</template>
```

### 禁用拖拽

```vue
<template>
  <CoverImageAdjuster
    src="/example.jpg"
    :width="400"
    :height="300"
    :draggable="false"
  />
</template>
```

## 许可证

MIT
