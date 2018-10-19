import axios from 'axios';
import { MessageBox } from 'mint-ui';
import router from '../router/index'
import store from '../store/index.js'

const baseURL = 'http://211.67.177.56:8080/hhdj'

const instance = axios.create({
    baseURL,
    timeout:10000
})
const qs = require('querystring')
instance.interceptors.request.use((config) => {
    if(config.method == 'post') {
        config.data = qs.stringify(config.data)
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    return config
}, function(error) {
    return Promise.reject(error)
})

const xhr = {
    get(url,data,config){
        return new Promise((resolve,reject) => {
            console.log(store.state)
            const token = store.state.token
            let computedConfig = {
                ...config
            }
            if(token){
                computedConfig = {
                    headers: {
                        'token':token
                    }
                }
            }
            // console.log(token)
            // console.log(computedConfig)
            instance.get(url, {params: data,...computedConfig}).then(res => {
                if(res.data.code != 1){
                    // MessageBox('提示', '登录状态失效，正在跳转登录页');
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