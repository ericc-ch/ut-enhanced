import { defineConfig, presetWind3 } from "unocss"

export default defineConfig({
  presets: [presetWind3()],

  content: {
    filesystem: ["./src/**/*.ts"],

    // We're not using pipeline config since everything is handled by PostCSS
    // But this is needed in order for VSCode autocompletion to work
    pipeline: {
      include: [/\.(ts|html)($|\?)/],
    },
  },
})
