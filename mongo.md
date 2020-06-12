#### 创建用户
db.createUser( { user: "admin",  pwd: "admin",  roles: [ { role: "root", db: "admin" } ] } )  
#### 认证用户
db.auth("admin","admin")

#### 启动 mongo
docker build -t node_demo .

docker run -p 27017:27017 -v $PWD/data/db:/data/db -d --name mongodb_demo mongo:latest

docker run -d -p 9000:3000 --link=mongodb_demo:mongodb node_demo