#### 安装
[mac](https://download.docker.com/mac/stable/Docker.dmg)
[windows](https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe)
[linux](https://get.docker.com/)

#### 概念
Dockerfile: 类似于“package.json”
 |
 V
Image: 类似于“Win7纯净版.rar”
 |
 V
Container: 一个完整操作系统

#### 命令
>bash
   docker image build ./ -t hello-docker:1.0.0 # 打包镜像
   // 基于路径./（当前路径）打包一个镜像，镜像的名字是hello-docker，版本号是1.0.0。该命令会自动寻找Dockerfile来打包出一个镜像
   docker images  //查看本机已有的镜像
   
   // 根据镜像创建容器
   docker container create -p 2333:80 hello-docker:1.0.0
   docker container start xxx # xxx 为上一条命令运行得到的结果
   //我们使用docker container create来创建基于hello-docker:1.0.0镜像的一个容器，使用-p来指定端口绑定——将容器中的80端口绑定在宿主机的2333端口。执行完该命令，会返回一个容器ID
   而第二个命令，则是启动这个容器
   
   //进入容器 
   docker container exec -it xxx /bin/bash # xxx 为容器ID
>   

```bash
   # 构建镜像 
   docker build -t docker_demo .
   #创建一个新的容器并运行，-d为后台执行，-p 9000:3000前面为主机端口，后面是容器端口。docker_demo镜像名
docker run -d -p 9000:3000 docker_demo
#启动已被停止的容器
docker start docker_demo
#关闭已被启动的容器
docker stop docker_demo
#重新启动容器
docker restart docker_demo
#杀掉一个运行中的容器。
docker kill -s KILL docker_demo
#删除一个或多少容器。-f :通过SIGKILL信号强制删除一个运行中的容器-l :移除容器间的网络连接，而非容器本身-v :-v 删除与容器关联的卷
docker rm -f docker_demo、docker_demo1
#在运行的容器中执行命令。104e28f2f072容器id
sudo docker exec -it 104e28f2f072 /bin/bash 
#列出容器。 -a:所有容器包含没有运行的
docker ps 
#获取容器获取容器的日志 104e28f2f072容器id，-t:显示时间戳
docker logs -f -t 104e28f2f072 
```



https://hub.docker.com/
liubin915249126
