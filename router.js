'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  
  router.get('/', controller.home.index);
  
  router.get('/user', controller.user.index);
  router.get('/user/add', controller.user.addUser);
  router.get('/user/edit', controller.user.editUser);
  router.get('/user/remove', controller.user.removeUser);
  
  router.get('/api', controller.api.default.index);  
  router.get('/api/productList', controller.api.default.productList);  
  router.post('/api/register', controller.api.default.register);  
  router.put('/api/editUser', controller.api.default.editUser);  
  router.delete('/api/deleteUser', controller.api.default.deleteUser);  

};
