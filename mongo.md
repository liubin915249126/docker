#### 创建用户
db.createUser( { user: "admin",  pwd: "admin",  roles: [ { role: "root", db: "admin" } ] } )  
#### 认证用户
db.auth("admin","admin")

#### CMD
```bash
    # 通过 Dockerfile 构建 镜像
    docker build -t node_demo . 
    # 启动 mongo -v 映射目录 
    docker run -p 27017:27017 -v $PWD/data/db:/data/db -d --name mongodb_demo mongo:latest
    # 启动 node 应用  --link=mongodb_demo:mongodb 链接mongodb_demo的容器 mongodb为程序里面是用的
    docker run -d -p 9000:3000 --link=mongodb_demo:mongodb node_demo
```