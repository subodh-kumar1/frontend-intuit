import { createProxyMiddleware } from "http-proxy-middleware";
export default function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target:
        "http://springbootapplication-env.eba-3mbm5mj3.us-east-1.elasticbeanstalk.com",
      changeOrigin: true,
    })
  );
}
