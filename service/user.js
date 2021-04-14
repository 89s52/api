

const Service = require('egg').Service;

class UserService extends Service {
  async getUserList() {
       //查询user表的数据
       return await this.ctx.model.User.find({});
  }

  async getUserAdd() {
    //  console.log(this.ctx.request.body);
    var user=new this.ctx.model.User({
      username:this.ctx.request.body.username,
      password:this.ctx.request.body.password,
    })
    await this.ctx.model.user.save();   //注意
    await this.success("增加用户成功");
  } 

  async getUserEdit() {
 
    var username=this.ctx.request.body.username;
    var password= this.ctx.request.body.password;
    await this.ctx.model.User.updateOne({"username":username},{
      password,password
    })
     await this.success('编辑用户成功');     
  } 
}

module.exports = UserService;
