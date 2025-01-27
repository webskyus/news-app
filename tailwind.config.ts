import type {Config} from "tailwindcss";

export default {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			primary5: '#f81539',
  			primary10: '#f81539',
  			primary25: '#f81539',
  			primary50: '#f81539',
  			primary75: '#f81539',

  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			secondary5: '#fc4308',
  			secondary10: '#fc4308',
  			secondary25: '#fc4308',
  			secondary50: '#fc4308',
  			secondary75: '#fc4308',

  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			stroke: '#e6e6e6',
  			gray: '#f5f5f5',

  			black: '#3e3232',
  			black5: '#3e3232',
  			black10: '#3e3232',
  			black25: '#3e3232',
  			black50: '#3e3232',
  			black75: '#3E3232',

  			white: '#ffffff',
  			white5: '#ffffff',
  			white10: '#ffffff',
  			white25: '#ffffff',
  			white50: '#ffffff',
  			white75: '#ffffff',

  			dark: '#000000',
  			dark5: '#000000',
  			dark10: '#000000',
  			dark25: '#000000',
  			dark50: '#000000',
  			dark75: '#000000',

  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontSize: {
  			'3xs': '0.625rem',
  			'2xs': '0.75rem',
  			xs: '0.8125rem',
  			sm: '0.875rem',
  			base: '1rem',
  			lg: '1.125rem',
  			xl: '1.25rem',
  			'2xl': '1.5625rem',
  			'3xl': '1.9375rem',
  			'4xl': '2.25rem'
  		},
  		fontFamily: {
  			roboto: [
  				'Roboto',
  				'sans-serif'
  			]
  		},
  		boxShadow: {
  			shadow: '0px 0px 32px 0px rgba(0,0,0,0.07)'
  		},
  		borderRadius: {
  			0: '0rem',
  			1: '0.3125rem',
  			2: '0.75rem',
  			3: '2rem',
  			4: '3.125rem',
  			5: '4rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	plugins: []
  },
    plugins: [require("tailwindcss-animate")]
} satisfies Config;
