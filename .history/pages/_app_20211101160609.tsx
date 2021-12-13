/*
 * @Author: your name
 * @Date: 2021-10-25 17:23:51
 * @LastEditTime: 2021-11-01 16:06:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /next-demo/pages/_app.tsx
 */
import '../styles/globals.css';
// import '../styles/antd.less';
import 'antd/dist/antd.min.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
