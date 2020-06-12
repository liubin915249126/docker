#### 创建用户
db.createUser( { user: "admin",  pwd: "admin",  roles: [ { role: "root", db: "admin" } ] } )  
#### 认证用户
db.auth("admin","admin")