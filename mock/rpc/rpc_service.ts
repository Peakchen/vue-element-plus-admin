import axios, { AxiosResponse } from 'axios'

export interface RPCRequest {
  url: string
  method: 'get' | 'post' | 'put' | 'delete'
  timeout?: number
  data?: any
  response?: () => any
}

class RPCService {
  async send(request: RPCRequest): Promise<any> {
    try {
      const { url, method, timeout, data } = request
      const response: AxiosResponse = await axios({
        url,
        method,
        timeout,
        data
      })

      if (request.response) {
        return request.response()
      } else {
        return response.data
      }
    } catch (error) {
      console.error('RPC request error:', error)
      throw error
    }
  }
}

export const rpcService = new RPCService()
