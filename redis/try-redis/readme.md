[source](https://www.cnblogs.com/lianer/p/6379915.html)

[redis](http://try.redis.io/)
key-value store  oftern referred as a NoSQL database

- key-value 
  SET server:name "fido"
  DEL delete a given key and associated value
  INCR connections
  - INCR
    多个运行， 值就不定了
    exists for a certain length of time
  - EXPIRE  120 seconds
    TTL 多长时间可运行
    -2 过期   -1 will never expire 

  - list 
    动作 RPUSH, LPUSH, LLEN, LRANGE, RPOP
    list 查询 LRANGE
    
  - SET 
    