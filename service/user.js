

const Service = require('egg').Service;

class UserService extends Service {
  async getUserList() {
       //查询user表的数据
       return await this.ctx.model.User.find({});
  }

 
  async getUserAdd() {
   console.log(this.ctx.request.body);
   var getuser=this.ctx.request.body;
    var user=new this.ctx.model.User({
         
      username:getuser.username,
      password:getuser.password,

      //username:'ffttt',
      //password:2235456,

    });
    await user.save();   //注意
    //await this.success("增加用户成功");
  } 

  async getUserEdit() {
 
    // console.log(this.ctx.request.body);
    // var username=this.ctx.request.body.username;
    // var password= this.ctx.request.body.password;
    // await this.ctx.model.User.updateOne({age: 18}, {name: 'changeName'})

    await this.ctx.model.User.updateOne({
      "_id":"6078e505ed61a330635d2f6a"
  },{
    username:"哈哈哈",
    password:'1234'
  },function(err,result){

    if(err){
      console.log(err);
      return;
    }
    console.log(result)
  });

  } 

  async removeUser() {

    var rel =await this.ctx.model.User.deleteOne({"_id":"6078e48aed61a330635d2f68"});

    console.log(rel)
    
  }

}

module.exports = UserService;
