export {};

declare global {
  interface Window {
    ethereum: {
      isConnected(): boolean;
      request(args: {
        method: string;
        params?: unknown[] | object;
      }): Promise<JsonRpcResponse>;
      on(event: string, handler: (para: any) => void): void;
    };
  }

  interface JsonRpcRequest {
    id: string | undefined;
    jsonrpc: '2.0';
    method: string;
    params?: Array<any>;
  }
  
  interface JsonRpcResponse {
    id: string | undefined;
    jsonrpc: '2.0';
    method: string;
    result?: unknown;
    error?: Error;
  }
}

