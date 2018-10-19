import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      userinfo:{
        username: '',
        header: '', //头像
        idCard: '',
        hometown: '',
        address: '',
        nation: '',  //民族
        wxNum: '',
        qqNum: '',
        sex: '',
        education: '',  // 最高学历
        jobRank: '', // 昵称
        salary: '',  // 薪资
        joinPartyTime: '',
        lastPayTime: '',
        partyStatus: '',  // 当前身份
      },
      token: ''
    },
    mutations: {
      IS_LOGIN(state,userinfo){
        state.userinfo = userinfo.data
        state.token = userinfo.token
      }
    },
    plugins: [createPersistedState({
        storage: {
            getItem: key => sessionStorage.getItem(key),
            setItem: (key, value) => sessionStorage.setItem(key, value),
            removeItem: key => sessionStorage.removeItem(key),
        }
    })]
  })
  export default store