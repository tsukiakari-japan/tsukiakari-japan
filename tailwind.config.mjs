/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        shu:      '#C0392B',   // 朱（メインアクセント）
        shu2:     '#A93226',   // 朱ダーク（hover）
        redlight: '#FEF2F1',   // 朱の淡い背景
        warmwhite:'#FBF8F4',   // メイン背景
        cream:    '#F5EFE6',   // カード背景
        charcoal: '#1C1C1C',   // メインテキスト
        midgray:  '#6B6460',   // サブテキスト
        border:   '#E5E0D8',   // ボーダー・区切り
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'Noto Sans TC', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
