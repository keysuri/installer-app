import { http } from "@/utils/http"
import type { LoginParams, LoginResult } from "@/types/user"

export const postLoginAPI = (data: LoginParams) => {
    return http<LoginResult>({
        method: 'POST',
        url: '/user/login',
        data,
    })
}