<script setup lang="ts">
import { useUserStore } from '@/stores'
import { http } from '@/utils/http'

const userStore = useUserStore()
// 示例请求
const getData = async () => {
  const res = await http({
    method: 'GET',
    url: 'https://pcapi-xiaotuxian-front.itheima.net/member/profile',
    header: {},
  })
  console.log(res)
}
</script>

<template>
  <view class="my">
    <view>用户信息：{{ userStore.profile }}</view>
    <button @tap="
      userStore.setProfile({
        nickname: 'root',
        token: '123456',
      })
      " size="mini" plain type="primary">
      保存用户信息
    </button>
    <button @tap="userStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="getData" size="mini" plain type="warn">测试请求</button>
  </view>
</template>

<style lang="scss">
//
</style>
