import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { LoginResult } from '../../types/user'

// 定义 Store
export const useUserStore = defineStore(
  'user',
  () => {
    // 用户信息
    const profile = ref<any>()

    // 保存用户信息，登录时使用
    const setProfile = (val: LoginResult) => {
      profile.value = val
    }

    // 清理用户信息，退出时使用
    const clearProfile = () => {
      profile.value = undefined
    }

    // 记得 return
    return {
      profile,
      setProfile,
      clearProfile,
    }
  },
  // TODO: 持久化
  {
    // 网页端配置
    // persist: true,
    // 小程序端配置
    persist: {
      // 调整为兼容多端的API
      storage: {
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
        getItem(key) {
          return uni.getStorageSync(key)
        },
      },
    }
  },
)
