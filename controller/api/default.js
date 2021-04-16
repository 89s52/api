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

  //post 增加数据
  async register() {    
    const goodsResult = await this.service.user.getUserAdd();
    console.log(this.ctx.request.body)

    this.ctx.body={
      result:'success_post'
    }
  }

   //put 修改数据
   async editUser() {    
    const goodsResult = await this.service.user.getUserEdit();
    console.log(this.ctx.request.body)
    this.ctx.body={
      result:'success_put'
    }
  }

  async deleteUser() {    
    const goodsResult = await this.service.user.removeUser();
    console.log(this.ctx.request.body)
    this.ctx.body={
      result:'success_put'
    }
  }


}

module.exports = DefaultController;
  

