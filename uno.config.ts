import { defineConfig, presetMini } from "unocss"

export default defineConfig({
  presets: [presetMini()],

  content: {
    filesystem: ["./src/**/*.ts"],

    // We're not using pipeline config since everything is handled by PostCSS
    // But this is needed in order for VSCode autocompletion to work
    pipeline: {
      include: [/\.(ts|html)($|\?)/],
    },
  },
})
