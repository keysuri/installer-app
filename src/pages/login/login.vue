<script setup lang="ts">
import { ref } from 'vue';
import { postLoginAPI } from '@/services/login';
import { useUserStore } from '../../stores';

const userName = ref('');
const password = ref('');
const login = async () => {
  const data = {
    userName: userName.value,
    password: password.value,
  };
  const res = await postLoginAPI(data);
  // 保存用户信息
  const userStore = useUserStore()
  userStore.setProfile(res.data)
};
</script>

<template>
  <view class="viewport">
    <view class="logo">
      <image src="@/static/installer.png"></image>
    </view>
    <view class="login">
      <!-- 表单登录 -->
      <input class="input" type="text" placeholder="请输入用户名" v-model="userName" />
      <input class="input" type="text" password placeholder="请输入密码" v-model="password" />
      <button class="button phone" @click="login">登录</button>
    </view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20rpx 40rpx;
}

.logo {
  flex: 1;
  text-align: center;

  image {
    width: 220rpx;
    height: 220rpx;
    margin-top: 15vh;
  }
}

.login {
  display: flex;
  flex-direction: column;
  height: 60vh;
  padding: 40rpx 20rpx 20rpx;

  .input {
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    border-radius: 72rpx;
    border: 1px solid #ddd;
    padding-left: 30rpx;
    margin-bottom: 20rpx;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    border-radius: 72rpx;
    color: #fff;

    .icon {
      font-size: 40rpx;
      margin-right: 6rpx;
    }
  }

  .phone {
    background-color: #28bb9c;
  }
}
</style>