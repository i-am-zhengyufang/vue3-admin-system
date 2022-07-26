//  mockProdServer.js
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

// mockjs生产环境配置
import testModule from '../mock';

export function setupProdMockServer() {
    createProdMockServer([...testModule]);
}
