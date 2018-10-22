import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = {
  Index: ()=>import ('@/views/index/index.vue'),
  Login: ()=>import ('@/views/index/login.vue'),
  Notice: ()=>import ('@/views/notice/notice.vue'),
  Mydj:()=>import ('@/views/mydj/mydj.vue'),
  News:()=>import ('@/views/news/news.vue'),
  Plamlife:()=>import ('@/views/plamlife/plamlife.vue'),
  Cloudinter:()=>import ('@/views/cloudinter/cloudinter.vue'),
  Through:()=>import ('@/views/through/through.vue'),
  Identity:()=>import ('@/views/identity/identity.vue'),
  Dstoday:()=>import ('@/views/dstoday/dstoday.vue'),
  Wheneverstudy:()=>import ('@/views/wheneverstudy/wheneverstudy.vue'),
  Whenevershot:()=>import ('@/views/whenevershot/whenevershot.vue'),
  Systembuild:()=>import ('@/views/systembuild/systembuild.vue'),
  Featureavtive:()=>import ('@/views/avtive/featureavtive.vue'),
  Newsdetail:()=>import ('@/views/news/newsdetail.vue'),
  Politystudy:()=>import ('@/views/plamlife/politystudy.vue'),
  Studydetail:()=>import ('@/views/plamlife/studydetail.vue'),
  Throughdetail:()=>import ('@/views/through/throughdetail.vue'),
  Identitydetail:()=>import ('@/views/identity/identitydetail.vue'),
  Studydetail1:()=>import ('@/views/wheneverstudy/studydetail1.vue'),
  Shotdetail:()=>import ('@/views/whenevershot/shotdetail.vue'),
  Builddetail:()=>import ('@/views/systembuild/builddetail.vue'),
  Activedetail:()=>import ('@/views/avtive/activedetail.vue'),
  Noticedetail:()=>import ('@/views/notice/noticedetail.vue'),
  Swipedetail:()=>import ('@/views/swiper/swipedetail.vue'),
  Userinfo:()=>import ('@/views/mydj/userinfo.vue'),
  Integral:()=>import ('@/views/mydj/integral.vue'),
  Integraldetail:()=>import ('@/views/mydj/integraldetail.vue'),
  Changepassword:()=>import ('@/views/mydj/changepassword.vue'),
  Pay:()=>import ('@/views/mydj/pay.vue'),
  Edituser:()=>import ('@/views/mydj/edituser.vue'),
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
    {
      path:'/swipedetail',
      name: 'swipedetail',
      component: components.Swipedetail,
      meta: {
        title: '通知早知道'
      }
    },
    {
      path:'/userinfo',
      name: 'userinfo',
      component: components.Userinfo,
      meta: {
        title: '个人信息'
      }
    },
    {
      path:'/integral',
      name: 'integral',
      component: components.Integral,
      meta: {
        title: '个人量化积分'
      }
      
      
    },
    {
      path:'/integraldetail',
      name: 'integraldetail',
      component: components.Integraldetail,
      meta: {
        title: '积分明细'
      }
    },
    {
      path:'/changepassword',
      name: 'changepassword',
      component: components.Changepassword,
      meta: {
        title: '修改密码'
      }
    },
    {
      path:'/pay',
      name: 'pay',
      component: components.Pay,
      meta: {
        title: '党费缴纳'
      }
    },
    {
      path:'/edituser',
      name: 'edituser',
      component: components.Edituser,
      meta: {
        title: '修改个人信息'
      }
    },
   
  ]
})
