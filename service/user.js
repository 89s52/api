

const Service = require('egg').Service;

class UserService extends Service {
  async getUserList() {
       //查询user表的数据
       return await this.ctx.model.User.find({});
  }

  async getUserAdd() {
   console.log(this.ctx.request.body);
    var user=new this.ctx.model.User({
      //username:this.ctx.request.body.username,
      //password:this.ctx.request.body.password,

      username:'fff',
      password:2235456,

    });
    await user.save();   //注意
    //await this.success("增加用户成功");
  } 

  async getUserEdit() {
 
    console.log(this.ctx.request.body);
    //var username=this.ctx.request.body.username;
    //var password= this.ctx.request.body.password;
    await this.ctx.model.User.updateOne({"_id":'606bb1afb52dd110856856f0'},{"username":'hhhjjj'})
     //await this.success('编辑用户成功');     
  } 
}

module.exports = UserService;
