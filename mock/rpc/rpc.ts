import { RPCRequest, rpcService } from './rpc_service'

export function SendRpcRequest(strUrl: string, method_type: 'get' | 'post'): any {
  const rpcRequest: RPCRequest = {
    url: strUrl,
    method: method_type,
    timeout: 5000,
    response: () => {
      return {
        code: 200,
        data: null
      }
    }
  }

  rpcService
    .send(rpcRequest)
    .then((response) => {
      console.log('RPC response:', response)
      return response
    })
    .catch((error) => {
      console.error('RPC error:', error)
    })
}
