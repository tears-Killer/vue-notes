import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 100,
    student: [
      {
        name: 'wj',
        age: 22
      },
      {
        name: 'wzx',
        age: 23
      },
      {
        name: 'zbc',
        age: 30
      }
    ]
  },
  mutations: {
    //修改state里面的数据事件
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  actions: {
    //处理异步操作
  },
  getters: {
    //处理数据计算
    powerCounter(state) {
      return state.counter * state.counter
    },
    less25(state) {
      return state.student.filter(item => item.age < 25)
    },
    //调用getters内部函数
    less25Length(state,getters) {
      return getters.less25.length
    },
    //接收传参函数 必须返回一个函数
    moreAge(state) {
      return age => {
        return state.student.filter(item => item.age > age)
      }
    }
  },
  modules: {
  }
})
