/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}', // 경로 앞에 src 추가
    './node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      borderRadius: {
        5: '5px',
        10: '10px',
        20: '20px',
        30: '30px',
        40: '20px',
      },
      colors: {
        primary: {
          DEFAULT: '#21C6BD', // 메인 컬러
          hover: '#24A49D', // 메인 컬러의 hover 컬러
          main500: 'rgba(33, 198, 189, 0.5)', // 투명도 50%
          main100: 'rgba(33, 198, 189, 0.1)', // 투명도 10%
        },
        bg: {
          DEFAULT: '#FFFFFF', // 기본 배경
          light: '#F5F5F5', // 밝은 배경 (입력 필드)
          deep: '#EFEFEF', // 중간톤 배경 (스켈레톤 UI)
          dark: '#1A1B1D', // 어두운 배경 (버튼)
          dark500: 'rgba(35, 37, 39, 0.5)', // 투명도 50% 어두운 배경 (오버레이)
        },
        text: {
          DEFAULT: '#232527', // 기본 텍스트 (본문)
          sub: '#898989', // 서브 텍스트 (보조 설명)
          disabled: '#AAAAAA', // 비활성화 텍스트 (입력 필드 placeholder)
        },
        notification: '#FF0101', // 알림 색상 (경고, 오류 메시지)
        border: '#BFBFBF', // 테두리 색상
        divider: '#E2E2E2', // 구분선 색상 (섹션 구분 라인)
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'], // font
        paperlogy: ['Paperlogy', 'sans-serif'], // font-paperlogy
      },
      fontSize: {
        h1: '32px', // 큰 제목
        h2: '24px', // 섹션 제목
        h3: '20px', // 작은 제목
        body1: '16px', // 본문
        body2: '14px', // 작은 본문
        caption: '12px', // 캡션, 부가 설명
      },
    },
  },
  plugins: [],
};
