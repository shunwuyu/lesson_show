var xiaoming={
  name:'小明',
  sex:'男',
  sendflower:function(target){
      target.receiveflower(this);
  }
};


var xiaomei = {
  name: '小美', 
  receiveflower: function() {
    xiaohong.listengoodmod();
  }
}

var xiaohong={
  name:'小红',
  sex:'女',
  happy:false,
  receiveflower:function(){
    if(!this.happy){
        console.log('小红不开心，扔了鲜花');
    } else {
      console.log('电影约起');
    }
      
  },
  listengoodmod:function(){
     
      var a = myFunction(1,10);
      function myFunction(begin,end){
      var num = Math.round(Math.random()*(end-begin)+begin);
      return num;
      }
      
      if(a>6){
        this.happy = true;
        this.receiveflower();
      } else {
        console.log('等下我再帮你送,等她心情好了');
        setTimeout(() => {
          this.happy = true;
          this.receiveflower();
        },10000)
      }
  } 
};

xiaoming.sendflower(xiaomei);