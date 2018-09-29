- 修改密码
cd /usr/local/Cellar/mysql/5.7.19/bin/
./mysqld_safe --skip-grant-tables &

./mysql  进入mysql
FLUSH PRIVILEGES;  立即生效
use mysql
update user set authentication_string=password('*******') where user='*******';
flush privileges; 
quit


-  mac The server quit without updating PID file
chmod -R 777 /usr/local/var/mysql/

