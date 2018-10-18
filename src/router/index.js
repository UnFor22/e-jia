import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = {
  Index: ()=>import ('@/views/index.vue'),
  Login: ()=>import ('@/views/login.vue'),
  Notice: ()=>import ('@/views/notice.vue'),
  Mydj:()=>import ('@/views/mydj.vue'),
  News:()=>import ('@/views/news.vue'),
  Plamlife:()=>import ('@/views/plamlife.vue'),
  Cloudinter:()=>import ('@/views/cloudinter.vue'),
  Through:()=>import ('@/views/through.vue'),
  Identity:()=>import ('@/views/identity.vue'),
  Dstoday:()=>import ('@/views/dstoday.vue'),
  Wheneverstudy:()=>import ('@/views/wheneverstudy.vue'),
  Whenevershot:()=>import ('@/views/whenevershot.vue'),
  Systembuild:()=>import ('@/views/systembuild.vue'),
  Featureavtive:()=>import ('@/views/featureavtive.vue'),
  Newsdetail:()=>import ('@/views/newsdetail.vue'),
  Politystudy:()=>import ('@/views/politystudy.vue'),
  Studydetail:()=>import ('@/views/studydetail.vue'),
  Throughdetail:()=>import ('@/views/throughdetail.vue'),
  Identitydetail:()=>import ('@/views/identitydetail.vue'),
  Studydetail1:()=>import ('@/views/studydetail1.vue'),
  Shotdetail:()=>import ('@/views/shotdetail.vue'),
  Builddetail:()=>import ('@/views/builddetail.vue'),
  Activedetail:()=>import ('@/views/activedetail.vue'),
  Noticedetail:()=>import ('@/views/noticedetail.vue'),
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: components.Index,
    },
    {
      path: '/login',
      name: 'login',
      component: components.Login,
      meta: {
        title: '登录'
      },
    },
    {
      path: '/notice',
      name: 'notice',
      component: components.Notice,
      meta: {
        title: '通知早知道'
      },   
    },
    {
      path: '/mydj',
      name: 'mydj',
      component: components.Mydj,
      meta: {
        title: '我的党建'
      },
    },
    {
      path:'/news',
      name: 'news',
      component: components.News,
      meta: {
        title: '信工新闻眼'
      }
    },
    {
      path:'/newsdetail',
      name: 'newsdetail',
      component: components.Newsdetail,
      meta: {
        title: '信工新闻眼'
      }
    },
    {
      path:'/plamlife',
      name: 'plamlife',
      component: components.Plamlife,
      meta: {
        title: '掌上组织生活'
      }
    },
    {
      path:'/cloudinter',
      name: 'cloudinter',
      component: components.Cloudinter,
      meta: {
        title: '党员云互动'
      }
    },
    {
      path:'/through',
      name: 'through',
      component: components.Through,
      meta: {
        title: '党建一点通'
      }
    },
    {
      path:'/identity',
      name: 'identity',
      component: components.Identity,
      meta: {
        title: '党员亮身份'
      }
    },
    {
      path:'/dstoday',
      name: 'dstoday',
      component: components.Dstoday,
      meta: {
        title: '党史上的今天'
      }
    },
    {
      path:'/wheneverstudy',
      name: 'wheneverstudy',
      component: components.Wheneverstudy,
      meta: {
        title: '随时随地学'
      }
    },
    {
      path:'/whenevershot',
      name: 'whenevershot',
      component: components.Whenevershot,
      meta: {
        title: '随时随地拍'
      }
    },
    {
      path:'/systembuild',
      name: 'systembuild',
      component: components.Systembuild,
      meta: {
        title: '制度建设'
      }
    },
    {
      path:'/featureavtive',
      name: 'featureavtive',
      component: components.Featureavtive,
      meta: {
        title: '特色活动'
      }
    },
    {
      path:'/studydetail1',
      name: 'studydetail1',
      component: components.Studydetail1,
      meta: {
        title: '随时随地学'
      }
    },
    {
      path:'/politystudy',
      name: 'politystudy',
      component: components.Politystudy,
      meta: {
        title: '政治学习'
      }
    },
    {
      path:'/studydetail',
      name: 'studydetail',
      component: components.Studydetail,
      meta: {
        title: '政治学习'
      }
    },
    {
      path:'/throughdetail',
      name: 'throughdetail',
      component: components.Throughdetail,
      meta: {
        title: '党建一点通'
      }
    },
    {
      path:'/identitydetail',
      name: 'identitydetail',
      component: components.Identitydetail,
      meta: {
        title: '党员亮身份'
      }
    },
    {
      path:'/studydetail1',
      name: 'studydetail1',
      component: components.Studydetail1,
      meta: {
        title: '随时随地学'
      }
    },
    {
      path:'/shotdetail',
      name: 'shotdetail',
      component: components.Shotdetail,
      meta: {
        title: '随时随地拍'
      }
    },
    {
      path:'/activedetail',
      name: 'activedetail',
      component: components.Activedetail,
      meta: {
        title: '特色活动'
      }
    },
    {
      path:'/builddetail',
      name: 'builddetail',
      component: components.Builddetail,
      meta: {
        title: '制度建设'
      }
    },
    {
      path:'/noticedetail',
      name: 'noticedetail',
      component: components.Noticedetail,
      meta: {
        title: '通知早知道'
      }
    },
   
  ]
})
