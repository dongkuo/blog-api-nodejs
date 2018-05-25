# blog-api-nodejs

🔥 采用Node.js编写的博客后端API。欢迎提交代码 🚀 :-p

## 接口约定

**除非常非常特别的情况外，接口的定义一律遵循以下约定！！！**

### 请求

- 请求路径命名一律采用 ***/{对象名}/动词*** 的格式。其中，**对象名**统一用单词的单数形式；而**动词**只能在以下5种中选择：

    | 名称   | 请求方式 | 说明                               |
    | ------ | -------- | ---------------------------------- |
    | add    | POST     | 用于添加（创建）一个对象           |
    | delete | GET      | 用于删除一个对象                   |
    | update | POST     | 用于更新一个对象                   |
    | get    | GET      | 用于获取单个对象的详细信息         |
    | list   | GET      | 用于获取多个对象的列表，一律带分页 |

- 分页相关参数添加在请求URL上，如下：

    | 参数名 | 是否必须 | 说明                     |
    | ------ | -------- | ------------------------ |
    | page   | 否       | 页码。第一页是1，默认是1 |
    | size   | 否       | 页面大小。默认是20       |

- 对于**POST**请求，`Content-Type`一律使用`application/json`；  

### 响应

- 所有HTTP响应均响应200响应码；响应`Content-Type` 使用`application/json`；响应体格式如下：

    ```json
    {
        "code": Number,
        "error": String,
        "data": Object
    }
    ```

- 其中，若请求成功被处理，code值一律取0，否则取相应错误值；当code取0时，error一定为`null`；当code不为0时，data一定为`null`

## 角色权限

#### 角色

定义如下几种角色：

- **ROOT**：超级用户，该角色下仅有一名用户，具有一切的权限；
- **ADMIN**：代表管理员用户
- **MEMBER**：代表登录用户
- **VISITOR**：代表未登录用户
- **ALL**：代表一切用户，所有用户都在此角色下
- **OWNER**：代表资源创建者本人，该角色下仅有“自己”一个用户。

#### 权限

接口权限控制的最小颗粒度是角色。一个用户是否拥有调用某接口的权限由其所扮演的角色决定。特别地，定义

## 接口清单 

| 名称         | 权限 | 请求方式 | 请求路径        | 完成情况 |
| ------------ | ------------ | -------- | --------------- | -------- |
| 列取文章分类 | **ALL** | GET      | category/list   | ⏳ |
| 添加文章分类 | **ADMIN** | POST     | category/add    | ⏳ |
| 删除文章分类 | **ADMIN** | GET      | category/delete | ⏳ |
| 修改文章分类 | **ADMIN** | POST     | category/update | ⏳ |
|  |  |  |  |  |
| 列取文章     | **ALL**  | GET      | article/list    | ⏳ |
| 获取文章详情 | **ALL**  | GET      | article/get     | ⏳ |
| 添加文章 | **ADMIN** | POST | article/add | ⏳ |
| 删除文章 | **OWNER** | GET | article/delete | ⏳ |
| 修改文章 | **OWNER** | POST | article/update | ⏳ |
|  |  |  |  |  |
| 列取文章评论 | **ALL** | GET | comment/list | ⏳ |
| 添加文章评论 | **ADMIN**、**MEMBER** | POST | comment/add | ⏳ |
| 修改文章评论 | **ADMIN**、**OWNER** | POST | comment/update | ⏳ |
| 删除文章评论 | **ADMIN**、**OWNER** | DELETE | comment/delete | ⏳ |

## 接口明细

⏳ 待补充

## 数据库表

### user（用户）

| 名称        | 类型         | 是否必须 | 说明                                 |
| ----------- | ------------ | -------- | ------------------------------------ |
| id          | bigint       | 是       | 主键id                               |
| username    | varchar(30)  | 是       | 用户名                               |
| password    | varchar(36)  | 是       | 密码                                 |
| nickname    | varchar(30)  | 是       | 昵称                                 |
| email       | varchar(100) | 否       | 邮箱                                 |
| avatar      | varchar(500) | 否       | 头像url                              |
| status      | tinyint      | 是       | 用户状态。-1：删除；0：禁用；1：正常 |
| create_time | timestamp    | 是       | 创建时间                             |
| role        | varchar(20)  | 是       | 角色                                 |

### category（文章分类）

| 名称         | 类型        | 是否必须 | 说明                            |
| ------------ | ----------- | -------- | ------------------------------- |
| id           | bigint      | 是       | 主键id                          |
| name         | varchar(20) | 是       | 分类名称                        |
| order_weight | int         | 是       | 排序权重。默认值为0，越小越靠前 |
| create_time  | timestamp   | 是       | 记录创建时间                    |

### article（文章）

| 名称             | 类型         | 是否必须 | 说明                                |
| ---------------- | ------------ | -------- | ----------------------------------- |
| id               | bigint       | 是       | 主键id                              |
| category_id      | bigint       | 是       | 文章分类id。关联article_category.id |
| uid              | bigint       | 是       | 作者id。关联user.id                 |
| title            | varchar(100) | 是       | 文章标题                            |
| cover_image      | varchar(500) | 否       | 封面图片URL                         |
| cover_caption    | varchar(20)  | 否       | 封面说明                            |
| summary          | varchar(300) | 是       | 文章摘要                            |
| content_markdown | text         | 否       | 文章内容。markdown格式              |
| content_html     | text         | 否       | 文章内容。html格式                  |
| publish_time     | timestamp    | 是       | 发表时间                            |
| create_time      | timestamp    | 是       | 记录创建时间                        |
| update_time      | timestamp    | 是       | 记录最近修改时间                    |
| status           | tinyint      | 是       | 文章状态。-1：删除；1：正常         |

### message（评论、回复、留言……）

| 名称          | 类型         | 是否必须 | 说明                                                         |
| ------------- | ------------ | -------- | ------------------------------------------------------------ |
| id            | bigint       | 是       | 主键id                                                       |
| associated_id | bigint       | 是       | 关联的id。该值为评论关联对象的id。如：对于某文章的评论，该值为文章的id |
| parent_id     | bigint       | 是       | 父评论id。若该评论是“评论的回复”，该值为对应评论的id；否则为0； |
| content       | varchar(300) | 是       | 评论内容                                                     |
| uid           | bigint       | 是       | 评论作者id                                                   |
| create_time   | timestamp    | 是       | 创建时间                                                     |
| update_time   | timestamp    | 是       | 最近更新时间                                                 |
| status        | tinyint      | 是       | 评论状态。-1：删除；1：正常                                  |

