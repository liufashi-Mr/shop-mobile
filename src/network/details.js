/*
 * @Descripttion:"获取商品详情" 
 * @Author: stride
 * @Date: 2021-04-20 23:06:51
 * @LastEditors: stride
 * @LastEditTime: 2021-04-25 11:06:06
 */

/**
 * @name: getShopById
 * @test: 通过id获取信息
 * @msg: 
 * @param {spu_id}
 * @return {*}
 */
import axios from "utils/request";
export async function getShopById(spu_id) {
  return await axios({
    method: 'post',
    url: "/store/getSku",
    data: { spu_id }
  })
}

/**
 * @name: getRecommend
 * @test: test font
 * @msg: 
 * @param {*}
 * @return {*}
 */
export async function getRecommend(parent_name) {
  return await axios({
    method: 'post',
    url: "/type/getproduct",
    data: { parent_name }
  })
}