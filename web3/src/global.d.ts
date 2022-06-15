export {};

declare global {
  interface Window {
    ethereum: {
      isConnected(): boolean;
      request(args: {
        method: string;
        params?: unknown[] | object;
      }): Promise<unknown>;
      on(event: string, handler: (para: any) => void): void;
    };
  }
}

