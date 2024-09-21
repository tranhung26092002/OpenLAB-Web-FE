/* eslint-disable @typescript-eslint/no-explicit-any */

class HttpError extends Error {
    readonly status: number
    readonly payload: any
    constructor({ status, payload }: { status: number, payload: any }) {
        super('Http Error')
        this.status = status
        this.payload = payload
    }

}
type CustomOptionRequest = RequestInit & {
    baseUrl?: "NEXT_ENDPOINT" | "BASE_URL" | undefined
}
const request = async <Response>(method: "GET" | "POST" | "PUT" | "DELETE", url: string, options?: CustomOptionRequest | undefined) => {
    const body = options?.body ? JSON.stringify(options.body) : undefined
    const baseHeaders = {
        "Content-Type": "application/json"
    }
    const baseUrl = (options?.baseUrl === undefined || options?.baseUrl === "NEXT_ENDPOINT") ? process.env.NEXT_ENDPOINT : process.env.BASE_URL
    const fullUrl = url.startsWith("/") ? `${baseUrl}${url}` : `${baseUrl}/${url}`
    const res = await fetch(fullUrl, {
        ...options,
        headers: {
            ...baseHeaders,
            ...options?.headers
        },
        body,
        method
    })
    const payload: Response = await res.json()
    const data = {
        status: res.status,
        payload
    }
    if (!res.ok) {
        throw new HttpError(data)
    }
    return data
}

const http = {
    get<Response>(url: string, options?: Omit<CustomOptionRequest, "body"> | undefined) {
        return request<Response>("GET", url, options)
    },
    post<Response>(url: string, body: any, options?: Omit<CustomOptionRequest, "body"> | undefined) {
        return request<Response>("POST", url, { ...options, body })
    },
    put<Response>(url: string, body: any, options?: Omit<CustomOptionRequest, "body"> | undefined) {
        return request<Response>("PUT", url, { ...options, body })
    },
    delete<Response>(url: string, body?: any, options?: Omit<CustomOptionRequest, "body"> | undefined) {
        return request<Response>("DELETE", url, { ...options, body })
    },
}
export default http