<template>
  <div class="min-h-screen min-w-full flex items-center justify-center">
    <h1 class="text-3xl font-bold underline text-test">Hello world!</h1>
  </div>
</template>

<script>
import tailwindConfig from "tailwindconfig";
import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(tailwindConfig);

export default {
  mounted() {
    console.log(fullConfig.theme.colors.test);
  },
};
</script>
