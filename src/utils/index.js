import axios from 'axios';
import { MessageBox } from 'mint-ui';
import router from '../router/index'

const baseURL = 'http://211.67.177.56:8080/hhdj'

const instance = axios.create({
    baseURL,
    timeout:10000
})

const xhr = {
    get(url,data,config){
        return new Promise((resolve,reject) => {
            instance.get(url, {params: data}, config).then(res => {
                if(res.data.code == 401){
                    MessageBox('提示', '登录状态失效，正在跳转登录页');
                    router.push('/login')
                }
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    post (url,data,config) {
        return new Promise ((resolve,reject) => {
            instance.post(url,data,config).then(res =>{
                resolve(res.data)
            }).catch(err =>{
                console.log(err)
            })
        })
    },
}

const sc = this.$route;

export const $axios = xhr