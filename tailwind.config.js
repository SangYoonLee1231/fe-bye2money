const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,vue,md}",
    // 추가적인 필요 경로가 있으면 여기에 추가
  ],
  theme: {
    extend: {
      // 1) 폰트 패밀리
      fontFamily: {
        serif: ['"Joseon-ilbo Myeongjo"', "serif"], // 조선일보명조
        sans: ["Pretendard", ...defaultTheme.fontFamily.sans], // Pretendard + 기본 sans
      },

      // 2) 폰트 사이즈 + 라인 하이트
      fontSize: {
        // serif
        "serif-48": ["3rem", { lineHeight: "3.5rem" }], // 48px / 56px
        "serif-24": ["1.5rem", { lineHeight: "2rem" }], // 24px / 32px
        "serif-14": ["0.875rem", { lineHeight: "1rem" }], // 14px / 16px

        // semibold
        "semibold-16": ["1rem", { lineHeight: "1.5rem" }], // 16px / 24px
        "semibold-14": ["0.875rem", { lineHeight: "1rem" }], // 14px / 16px
        "semibold-12": ["0.75rem", { lineHeight: "1rem" }], // 12px / 16px

        // light
        "lighttext-16": ["1rem", { lineHeight: "2rem" }], // 16px / 32px
        "lighttext-14": ["0.875rem", { lineHeight: "1.5rem" }], // 14px / 24px
        "lighttext-12": ["0.75rem", { lineHeight: "1.5rem" }], // 12px / 24px
      },

      // 3) 컬러 토큰
      colors: {
        // Grayscale primitives
        grayscale: {
          50: "#FFFFFF",
          100: "#FBFCFD",
          200: "#F1F4F8",
          300: "#777D84",
          400: "#000000",
        },

        // Pastel palette
        pastel: {
          almondFrost: "#A28878",
          porsche: "#E39D5D",
          chenin: "#D7CA6B",
          caper: "#AACD7E",
          cruise: "#BCDFD3",
          onahau: "#C5E0EB",
          glacier: "#7DB7BF",
          seagull: "#79B2CA",
          jordyBlue: "#73A4D0",
          perano: "#A7B9E9",
          perfume: "#BDA6E1",
          lavenderPink: "#F0B0D3",
          amaranth: "#E93B5A",
          chestnut: "#C04646",
        },

        // Semantic tokens (예시)
        neutral: {
          surface: {
            weak: "#FBFCFD", // grayscale.100
            default: "#F1F4F8", // grayscale.200
            point: "#777D84", // grayscale.300
          },
          text: {
            weak: "#777D84", // grayscale.300
            default: "#000000", // grayscale.400
            revDefault: "#FFFFFF", // grayscale.50
          },
          border: {
            default: "#000000", // grayscale.400
          },
        },

        brand: {
          surface: {
            default: "#FFFFFF", // grayscale.50
          },
          text: {
            income: "#79B2CA", // pastel.seagull
            expense: "#C04646", // pastel.chestnut
          },
        },

        danger: {
          surface: {
            default: "#E93B5A", // pastel.amaranth
          },
          text: {
            default: "#E93B5A", // pastel.amaranth
            revDefault: "#FFFFFF", // grayscale.50
          },
          border: {
            default: "#E93B5A", // pastel.amaranth
          },
        },

        // colorchip (예시)
        colorchip: {
          10: "#A28878", // pastel.almondFrost
          20: "#E39D5D", // pastel.porsche
          30: "#D7CA6B", // pastel.chenin
          // … 이하 동일 패턴
          120: "#C04646", // pastel.chestnut
        },
      },

      // 4) 아이콘 사이즈 변수 (옵션)
      spacing: {
        icon: "1.5rem", // 필요하면 theme(‘spacing.icon’) 으로 쓰세요
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
