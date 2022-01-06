1. 使用 .editconfig 控制代码样式，比如：缩进、空格等


### vite

- 使用 ```vite serve 目录``` 可以指定启动目录

- Vite 默认支持 ESM 语法，或在 package.json 中配置  type: "module" 来开启 ESM 语法

- 为什么 ant-design-vue 不用在 site 目录下安装依赖就能启动项目

### issue
- generateRoutes 单词拼错了


#### Error [ERR_REQUIRE_ESM]: Must use import to load ES Module

解决方法： 使用 esno/esmo  替换 node 执行命令

疑问: 为什么 ant-design-vue 就可以使用 node 执行js 文件 TODO:



#### peerDependencies 的作用是什么

```
  "peerDependencies": {
    "@vue/compiler-sfc": ">=3.1.0",
    "vue": ">=3.1.0"
  },
```

### 功能点拆分

- 使用 vite 搭建 vue 项目
当前使用的 vite 创建的项目，没有自己搭建项目，并且没有使用 ts, TODO:后续补上

    - 用到的插件
        - @vitejs/plugin-vue
        - @vue/compiler-sfc