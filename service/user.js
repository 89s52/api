

const Service = require('egg').Service;

class UserService extends Service {
  async getUserList() {
       //查询user表的数据
       return await this.ctx.model.User.find({});
  }

 
  async getUserAdd() {
    var user=new this.ctx.model.User({
      username:'李四',
      password:'123456'

  });

  var result=await user.save();
  console.log(result)
  } 

  async getUserEdit() {
 
    console.log(this.ctx.request.body);
    var username=this.ctx.request.body.username;
    var password= this.ctx.request.body.password;
    await this.ctx.model.User.updateOne({age: 18}, {name: 'changeName'})

     //await this.success('编辑用户成功');     
  } 
}

module.exports = UserService;
