/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // プロジェクト内のTailwindを適用したいファイルを指定
  theme: {
    extend: {
      // ブランドカラーやアプリケーションに特有の色を追加
      colors: {
        'brand-blue': '#007bff',
        'brand-red': '#ff5733',
      },
      // プロジェクトに合わせたフォントサイズのカスタマイズ
      fontSize: {
        'xs': '.75rem', // 12px
        'sm': '.875rem', // 14px
        'base': '1rem', // 16px (デフォルト)
        'lg': '1.125rem', // 18px
        'xl': '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
      },
      // コンテナの最大幅やパディングのカスタマイズ
      container: {
        center: true, // コンテナを中央揃え
        padding: '2rem', // コンテナのパディング設定
      },
      // プロジェクトに合わせたフォントファミリーのカスタマイズ
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'], // サンセリフフォントのカスタマイズ
        serif: ['Georgia', 'serif'], // セリフフォントのカスタマイズ
      },
    },
  },
  plugins: [],
}
