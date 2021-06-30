# file-static-server-start

> 简易静态资源服务器，运行后在当前目录启动监听。

## 功能

- [x] 当前目录监听
- [x] 全局安装后可以直接全局执行
- [ ] 输出当前文件夹下文件链接

## 演示

![](./run.png)

## 安装

```sh
yarn global add file-static-server-start
```

## 使用

```sh
fss
```

即在当前目录启动监听，浏览器打开http://127.0.0.1:5544/[xxx]即可下载文件，其中xxx是当前文件夹下的文件名。

## 构建流程

### 配置

对于一个普通的node项目，使其可执行需要如下配置：

#### 添加执行头到index.js/ts

```sh
#!/usr/bin/env node
```

#### package的配置

```json
  "bin": {
    "fss": "dist/index.js"
  },
```

会安装以一个fss的命令

### 打包

```sh
tsc
```

### 发布

```sh
npm login
```

注：重名的包发布会报403错误

### 升级

修改后升级再发布：

```sh
npm version patch
npm publish
```

### 全局安装

```sh
yarn global add my-xxx
```

### 使用

运行bin字段对应的命令即可。

## Reference

1. [使用 NPM 发布和使用 CLI 工具](https://juejin.cn/post/6844904153030852621)
2. [如何发布自己的NPM包（模块）？](