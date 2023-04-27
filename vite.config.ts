import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import _path from "path";

const path = (to: string) => _path.resolve(__dirname, to);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ include: "**/*.svg" })],
  resolve: {
    alias: {
      svg: path("./src/assets/svg/"),
    },
  },
});
