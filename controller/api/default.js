'use strict';

const Controller = require('egg').Controller;

class DefaultController extends Controller {
	  async index() {
		          this.ctx.body="api接口"
		    }


	  async productList() {    


		      const goodsResult = await this.service.user.getUserList();
		      this.ctx.body={
			            result:goodsResult
			          }
		    }


	  async register() {    
		    var user=new this.ctx.model.User({
			            username:'李四',
			            password:'123456'

			        });

		      var result=await user.save();
		      console.log(result)

                      this.ctx.body={
		                  result:'success_delete'
		                  }

                     
		  }


	   async editUser() {    

	  
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

		       this.ctx.body='修改用户成功';

		   
		   
	   }	   
           async deleteUser() {    

                      var rel =await this.ctx.model.User.deleteOne({"_id":"60645ec03d4977404f267c39"});

		      console.log(rel)

		      this.ctx.body='删除用户成功';


		    }

	  


}

module.exports = DefaultController;
  

