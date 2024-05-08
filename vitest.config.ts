import {defineConfig} from "vitest/config"

// this returns the vitest configuration
export default defineConfig(({
    test: {
        environment: "jsdom",
        globals: true,
        // setup files are run before each test file
        setupFiles: ["./tests/setup.ts"],
    }
}))