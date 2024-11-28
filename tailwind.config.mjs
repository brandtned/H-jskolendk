/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    /* Vil du overskrive eller extende tailwinds indstillinger?  */

	theme: {
        // Hvis du placerer noget herinde, så vil du erstatte Tailwinds styling.

        /* COLORS */
        colors: {
            "yellow-950": "rgba(39, 30, 7, 1)",
            "yellow-900": "rgba(83, 63, 14, 1)",
            "yellow-800": "rgba(162, 124, 27, 1)",
            "yellow-700": "rgba(223, 178, 63, 1)",
            "yellow-600": "rgba(236, 209, 141, 1)",
            "yellow-500": "rgba(250, 243, 225, 1)",
            "yellow-400": "rgba(251, 244, 229, 1)",
            "yellow-300": "rgba(252, 248, 238, 1)",
            "yellow-200": "rgba(253, 250, 242, 1)",
            "yellow-100": "rgba(254, 253, 251, 1)",
            "yellow-50": "rgba(254, 253, 251, 1)",
            "neutrals-950": "rgba(34, 34, 34, 1)",
            "neutrals-900": "rgba(46, 46, 46, 1)",
            "neutrals-800": "rgba(66, 66, 66, 1)",
            "neutrals-700": "rgba(89, 89, 89, 1)",
            "neutrals-600": "rgba(112, 112, 112, 1)",
            "neutrals-500": "rgba(133, 133, 133, 1)",
            "neutrals-400": "rgba(156, 156, 156, 1)",
            "neutrals-300": "rgba(179, 179, 179, 1)",
            "neutrals-200": "rgba(199, 199, 199, 1)",
            "neutrals-100": "rgba(222, 222, 222, 1)",
            "neutrals-50": "rgba(255, 255, 255, 1)",
            "orange-950": "rgba(30, 11, 0, 1)",
            "orange-900": "rgba(56, 20, 0, 1)",
            "orange-800": "rgba(112, 39, 1, 1)",
            "orange-700": "rgba(173, 61, 1, 1)",
            "orange-600": "rgba(228, 81, 1, 1)",
            "orange-500": "rgba(254, 110, 31, 1)",
            "orange-400": "rgba(254, 139, 77, 1)",
            "orange-300": "rgba(254, 169, 123, 1)",
            "orange-200": "rgba(255, 195, 164, 1)",
            "orange-100": "rgba(255, 225, 209, 1)",
            "orange-50": "rgba(255, 242, 235, 1)",
            'white': '#fff',
            'black': '#000',
          },

          /* SPACING */
          spacing: {
            "xxxs": "4px",
            "xxs": "8px",
            "xs": "16px",
            "s": "24px",
            "sm": "32px",
            "m": "40px",
            "ml": "48px",
            "lg": "64px",
            "xl": "80px",
            "2xl": "96px",
            "3xl": "112px",
            "4xl": "128px",
            "5xl": "160px",
            "6xl": "208px",
            "7xl": "320px",
            "8xl": "360px",
            "9xl": "424px"
          },

        /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
        /* FONTE */
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
            'headline': ['Kaisei HarunoUmi', 'monospace'], /* eksempel på ekstra font */
        },

        /* FONTSIZE */
        fontSize: {
            form: ['14px', { lineHeight: '1.5rem' }],
            button: ['15px', { lineHeight: '1.5rem' }],
            body: ['16px', { lineHeight: '1.5rem' }],
            h6: ['16px', { lineHeight: '1.5rem' }],
            h5: ['20px', { lineHeight: '1.5rem' }],
            h4: ['25px', { lineHeight: '1.5rem' }],
            h3: ['35px', { lineHeight: '1.5rem' }],
            h2: ['50px', { lineHeight: '120%' }],
            h1: ['80px', { lineHeight: '120%' }],
          },

        /* WEIGHT */
          fontWeight: {
            extralight: '200',
            light: '300',
            regular: '400',
            semibold: '500',
            bold: '700',
          },

        /* BORDERWIDTH */
        borderWidth: {
            DEFAULT: '1px',
            0: '0px',
            2: '2px',
            3: '3px',
            4: '4px',
            5: '5px',
        },

        /* BORDERRADIUS */
        borderRadius: {
            DEFAULT: '20px',
            none: '0px',
            sm: '10px',
            md: '20px',
            lg: '30px',
            xl: '40px',
            full: '999px',
        },

        /* BOXSHADOW */
        boxShadow: {
            drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */
            drop50: '4px 4px 4px 0 rgb(0 0 0 / 0.50)',  
            inner25: '0 4px 4px 0 rgb(0 0 0 / 0.25) inset',  
            inner50: '0 4px 4px 0 rgb(0 0 0 / 0.50) inset',  
        },

		extend: {
            // Hvis du placerer noget herinde, så vil du ikke erstatte Tailwinds styling, men blot tilføje til det.
        },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}