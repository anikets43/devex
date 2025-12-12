import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

// Check if we should run in headed mode (default to headless)
const isHeaded = process.env.HEADED === 'true' || process.argv.includes('--headed');

console.log('isHeaded', isHeaded);
export default defineConfig({
  test: {
    browser: {
      provider: playwright(),
      enabled: true,
      // Configure browser instances based on mode
      instances: [
        {
          browser: 'chromium',
          headless: !isHeaded,
        },
      ],
    },
    server: {
      deps: {
        inline: ['devextreme']
      }
    }
  }
});