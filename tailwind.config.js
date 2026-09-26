/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,svx}'],
  theme: {
    extend: {
      fontFamily: {
        'baskervville': ['"Baskervville"'],
        'tny': ['"TNY"'],
        'jws': ['"JWS"'],
        'inter': ['"Inter"'],
        'crimson': ['"Crimson"'],
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
      },
      typography: {
        dark: {
          css: {
            '--tw-prose-body': '#AEB4AE',
            '--tw-prose-headings': '#AEB4AE',
            '--tw-prose-lead': '#AEB4AE',
            '--tw-prose-links': '#AEB4AE',
            '--tw-prose-bold': '#AEB4AE',
            '--tw-prose-counters': '#AEB4AE',
            '--tw-prose-bullets': '#AEB4AE',
            '--tw-prose-hr': '#AEB4AE',
            '--tw-prose-quotes': '#AEB4AE',
            '--tw-prose-quote-borders': '#AEB4AE',
            '--tw-prose-captions': '#AEB4AE',
            '--tw-prose-code': '#AEB4AE',
            '--tw-prose-pre-code': '#AEB4AE',
            '--tw-prose-pre-bg': '#AEB4AE',
            '--tw-prose-th-borders': '#AEB4AE',
            '--tw-prose-td-borders': '#AEB4AE',
          }
        },
        light: {
          css: {
            '--tw-prose-body': '#121212',
            '--tw-prose-headings': '#121212',
            '--tw-prose-lead': '#121212',
            '--tw-prose-links': '#121212',
            '--tw-prose-bold': '#121212',
            '--tw-prose-counters': '#121212',
            '--tw-prose-bullets': '#121212',
            '--tw-prose-hr': '#121212',
            '--tw-prose-quotes': '#121212',
            '--tw-prose-quote-borders': '#121212',
            '--tw-prose-captions': '#121212',
            '--tw-prose-code': '#121212',
            '--tw-prose-pre-code': '#121212',
            '--tw-prose-pre-bg': '#121212',
            '--tw-prose-th-borders': '#121212',
            '--tw-prose-td-borders': '#121212',
          }
        }
      }
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('@tailwindcss/typography')
  ],
}

