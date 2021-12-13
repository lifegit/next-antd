/*
 * @Author: your name
 * @Date: 2021-11-10 16:11:14
 * @LastEditTime: 2021-11-11 17:45:45
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /next-demo/openapi.config.ts
 */


const { generateService } = require('@umijs/openapi')
generateService({
  schemaPath: 'http://petstore.swagger.io/v2/swagger.json',
  serversPath: './servers',
})