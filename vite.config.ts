import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
export default defineConfig({plugins:[react()],test:{environment:'jsdom',include:['src/**/*.test.ts','src/**/*.test.tsx'],coverage:{provider:'v8',include:['src/domain/**/*.ts'],thresholds:{lines:100,functions:100,statements:100,branches:100}}}});
