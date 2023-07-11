# 记录

记录过程中的一些步骤及知识点

## 创建项目
全局安装脚手架

```
npm i -g @nestjs/cli  // 全局安装Nest
nest new nest-case  // 创建项目
```

## 模块说明
AppModule是应用程序的根模块，根模块提供了用来启动应用的引导机制，可以包含很多功能模块。

.mudule文件需要使用一个@Module() 装饰器的类，装饰器可以理解成一个封装好的函数，其实是一个语法糖，@Module() 装饰器接收四个属性：providers、controllers、imports、exports。
- providers：Nest.js注入器实例化的提供者（服务提供者），处理具体的业务逻辑，各个模块之间可以共享（注入器的概念后面依赖注入部分会讲解）
- controllers：处理http请求，包括路由控制，向客户端返回响应，将具体业务逻辑委托给providers处理；
- imports：导入模块的列表，如果需要使用其他模块的服务，需要通过这里导入；
- exports：导出服务的列表，供其他模块导入使用。如果希望当前模块下的服务可以被其他模块共享，需要在这里配置导出；


> 如果因为在匹配过程中， 发现**@Put("list/:id")**已经满足了,就不会继续往下匹配了，所以@Put("list/user")装饰的方法应该写在它之前。

## 全局路由前缀
在main.ts中app.setGlobalPrefix('api'); // 设置全局路由前缀


## 编写代码
nest-cli提供的几个有用的命令：

```
//语法
nest g [文件类型] [文件名] [文件目录]
```

### 创建模块
**nest g mo posts** 创建一个 posts模块，文件目录不写，默认创建和文件名一样的posts目录，在posts目录下创建一个posts.module.ts.

执行完命令后，我们还可以发现同时在根模块app.module.ts中引入PostsModule这个模块，也在@Model装饰器的inports中引入了PostsModule

### 创建控制器
**nest g co posts** 此时创建了一个posts控制器，命名为posts.controller.ts以及一个该控制器的单元测试文件.

执行完命令， 文件posts.module.ts中会自动引入PostsController,并且在@Module装饰器的controllers中注入。

### 创建服务类
**nest g service posts** 创建app.service.ts文件，并且在app.module.ts文件下，@Module装饰器的providers中注入注入。

>注意创建顺序：先创建Module, 再创建Controller和Service, 这样创建出来的文件在Module中自动注册，反之，后创建Module, Controller和Service,会被注册到外层的app.module.ts