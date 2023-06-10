import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";
// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  // process에서 타입에러가 뜨게된다.
  // @type/node를 설치해주자
  return {
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            VITE_KAKAO_CLIENT_ID: env.VITE_KAKAO_CLIENT_ID,
          },
        },
      }),
    ],
  };
};
