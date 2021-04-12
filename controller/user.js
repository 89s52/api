'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {



    var userList=await this.service.user.getUserList();
    console.log(userList);       
     
     this.ctx.body={
	      result:userList
	      }
	 

    
  }

  async addUser() {
    //增加数据

    var user=new this.ctx.model.User({
        username:'李四',
        password:'123456'

    });

    var result=await user.save();
    console.log(result)

    this.ctx.body='success_delete'
	        
  }

  async editUser() {
    //增加数据


    await this.ctx.model.User.updateOne({
        "_id":"60645ec03d4977404f267c39"
    },{
      username:"哈哈哈",
      password:'1234'
    },function(err,result){

      if(err){
        console.log(err);
        return;
      }
      console.log(result)
    })

    this.ctx.body={
             result:'success_delete'
	    }
  }

  async removeUser() {
    //增加数据

    var rel =await this.ctx.model.User.deleteOne({"_id":"60645ec03d4977404f267c39"});

    console.log(rel)

    this.ctx.body={
	      result:'success_delete'
	    }
    	  
  }
}

module.exports = UserController;
