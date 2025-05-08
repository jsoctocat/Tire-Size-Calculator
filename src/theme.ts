import { createSystem, defineConfig, defineRecipe, defaultConfig } from '@chakra-ui/react';

const buttonRecipe = defineRecipe({
    base: {
        color: "blue.500",
        bg: "transparent",
        border: "40px solid",
        borderColor: "white",
    }
  })
  
const customConfig = defineConfig({
    theme: {
        recipes: {
        button: buttonRecipe,
        },
    },
})

export const system = createSystem(defaultConfig/*, customConfig*/)