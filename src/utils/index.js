import axios from 'axios';
// import router from '../router/index'
// import store from '../store/index.js'

const baseURL = 'http://211.67.177.56:8080/hhdj'
const token = localStorage.getItem('token')

const instance = axios.create({
    baseURL,
    timeout:10000,
    headers:{'token':token}
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
            const token = localStorage.getItem('token')
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
            // console.log(computedConfig)
            instance.get(url, {params: data,...computedConfig}).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    post (url,data,config) {
        return new Promise ((resolve,reject) => {
            const token = localStorage.getItem('token')
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
            // console.log(computedConfig)
            instance.post(url,data,...computedConfig).then(res =>{
                resolve(res.data)
            }).catch(err =>{
                console.log(err)
            })
        })
    },
}


export const $axios = xhr