/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors.js');
const plugin = require('tailwindcss/plugin.js');


module.exports = {
    content: ['./build/**/*.html'],
    important: true,
    theme: {
        container: {
            center: true,
            screens: {
                mobile: '768px',
                tablet: '991px',
                desktop: '1360px'
            },
            padding: {
                DEFAULT: '1.0625rem',
                mobile: '1.0625rem',
                tablet: '1.3rem',
                desktop: '1.5rem',
            },
        },
        fontFamily: {
            'circleMedium': 'var(--circle-font)' 
        },
        extend: {
            colors: {
                'steel-grey': 'var(--color-steel-grey)',
                'dark-graphite': 'var(--color-dark-graphite)',
                'ocean-green': 'var(--color-ocean-green)',
                charcoal: 'var(--color-charcoal)',
                'white/50': 'rgba(255, 255, 255, 0.5)',
            },

            screens: {
                mobile: '768px',
                tablet: '991px',
                desktop: '1024px'
            },
        }
    },
    plugins: [
        plugin(function ({matchUtilities}) {
            matchUtilities(
                {
                    'response-font': (value) => ({
                        fontSize: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                    }),

                    'response-margin': (value) => ({
                        margin: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                    }),
                    'response-mt': (value) => ({
                        marginTop: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                    }),
                    'response-mr': (value) => ({
                        marginRight: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                    }),
                    'response-mb': (value) => ({
                        marginBottom: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                    }),
                    'response-ml': (value) => ({
                        marginLeft: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                    }),
                    'response-my': (value) => ({
                        marginTop: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                        marginBottom: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                    }),
                    'response-mx': (value) => ({
                        marginLeft: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                        marginRight: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                    }),

                    'response-padding': (value) => ({
                        padding: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                    }),
                    'response-pt': (value) => ({
                        paddingTop: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                    }),
                    'response-pr': (value) => ({
                        paddingRight: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                    }),
                    'response-pb': (value) => ({
                        paddingBottom: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                    }),
                    'response-pl': (value) => ({
                        paddingLeft: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                    }),
                    'response-py': (value) => ({
                        paddingTop: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                        paddingBottom: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                    }),
                    'response-px': (value) => ({
                        paddingLeft: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                        paddingRight: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                    })
                }
            )
        })
    ]
}