# 初始化项目

vite + formily + react + antd v5

## 依赖包

- vite
- react-ts
- vite-formily
- @formily/core
- @formily/antd-v5
- @formily/react
- antd
- dayjs

```bash
npm create vite@latest vite-formily -- --template react-ts

npm install --save antd dayjs
npm install --save @formily/core @formily/react @formily/antd-v5
```

# 笔记

- createForm 用来创建表单核心领域模型，它是作为 MVVM 设计模式的标准 ViewModel
- FormProvider 组件是作为视图层桥接表单模型的入口，它只有一个参数，就是接收 createForm 创建出来的 Form 实例，并将 Form 实例以上下文形式传递到子组件中
- FormLayout 组件是用来批量控制 FormItem 样式的组件，这里我们指定布局为上下布局，也就是标签在上，组件在下
- FormConsumer 组件是作为响应式模型的响应器而存在，它核心是一个 render props 模式，在作为 children 的回调函数中，会自动收集所有依赖，如果依赖发生变化，则会重新渲染，借助 FormConsumer 我们可以很方便的实现各种计算汇总的需求
- FormButtonGroup 组件作为表单按钮组容器而存在，主要负责按钮的布局
- Submit 组件作为表单提交的动作触发器而存在，其实我们也可以直接使用 form.submit 方法进行提交，但是使用 Submit 的好处是不需要每次都在 Button 组件上写 onClick 事件处理器，同时它还处理了 Form 的 loading 状态，如果 onSubmit 方法返回一个 Promise，且 Promise 正在 pending 状态，那么按钮会自动进入 loading 状态

# types

```ts
type PropsWithChildren<P = unknown> = { children?: ReactNode };
type PropsWithRequiredChildren<P = unknown> = { children: ReactNode };
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
