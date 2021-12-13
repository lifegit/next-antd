/*
 * @Author: your name
 * @Date: 2021-10-25 17:23:51
 * @LastEditTime: 2021-10-26 17:56:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /next-demo/pages/_app.tsx
 */
import '../styles/globals.css';
import '../styles/antd.less';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
