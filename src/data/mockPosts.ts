import { PostSummary } from './../types/post';

export const mockPostSummaries: PostSummary[] = [
  {
    postId: 10,
    title: '개발자 취업 준비 루틴 공유',
    content:
      '제가 실천했던 취업 준비 루틴을 공유합니다! 아침에는 코딩 테스트 문제를 풀고, 오후에는 프로젝트를 진행했어요. 이력서와 포트폴리오를 주 1회씩 점검하며 꾸준히 개선했고, GitHub 커밋도 매일 유지하며 실력을 관리했습니다. 특히 기술 면접 대비로는 예상 질문을 정리하고, 친구들과 모의 면접을 하면서 실전 감각을 익혔어요.',
    author: { userId: 1, username: '컬처스팟', profileCode: 1234 },
    hits: 210,
    likeCount: 30,
    commentCount: 9,
    createdAt: '2025-03-10T07:20:00Z',
  },
  {
    postId: 9,
    title: '다크모드 구현 방법',
    content:
      'CSS 변수와 Context API를 이용한 다크모드 구현 팁입니다. 우선 전역 변수로 색상을 정의해두고, 사용자 설정에 따라 class를 토글하거나 context 상태를 활용해 테마를 변경할 수 있어요. 시스템 설정 감지도 가능하고, 로컬 스토리지에 저장해 다음 방문 시에도 유지되도록 처리할 수 있습니다.',
    author: { userId: 3, username: 'user303', profileCode: 303 },
    hits: 132,
    likeCount: 11,
    commentCount: 2,
    createdAt: '2025-03-09T18:40:00Z',
  },
  {
    postId: 8,
    title: 'Git 협업 팁 공유',
    content:
      'Git으로 협업할 때는 브랜치 전략이 매우 중요합니다. 보통 feature, develop, main 브랜치를 나누어 작업하며, 커밋 메시지는 일관된 컨벤션을 따르는 것이 좋습니다. 예: [feat] 기능 추가, [fix] 버그 수정 등. 또한 PR 리뷰 문화를 정착시키는 것도 생산성 향상에 큰 도움이 됩니다.',
    author: { userId: 6, username: 'user606', profileCode: 606 },
    hits: 120,
    likeCount: 10,
    commentCount: 3,
    createdAt: '2025-03-08T09:55:00Z',
  },
  {
    postId: 7,
    title: 'API 통신 시 에러 처리 방법',
    content:
      'API 통신 중 발생하는 에러를 어떻게 처리하면 사용자 경험을 해치지 않을까요? 예외 상황별로 구체적인 메시지를 제공하고, 네트워크 오류나 401 인증 오류 등은 상황에 맞게 자동 재시도나 로그인 리디렉션 처리를 고려해야 합니다. 공통 에러 핸들러를 만들어 관리하면 훨씬 깔끔한 코드가 될 수 있어요.',
    author: { userId: 2, username: 'user202', profileCode: 202 },
    hits: 95,
    likeCount: 6,
    commentCount: 1,
    createdAt: '2025-03-07T13:10:00Z',
  },
  {
    postId: 6,
    title: 'CSS Flex와 Grid 정리',
    content:
      'CSS 레이아웃을 짤 때 Flex와 Grid의 선택은 중요한 문제입니다. Flex는 1차원 레이아웃에 적합하고, Grid는 2차원 배치에 적합하죠. Flex는 아이템의 흐름을 제어하기 좋고, Grid는 영역 분할이 쉬워서 복잡한 레이아웃에 유리합니다. 상황에 맞는 도구 선택이 중요합니다!',
    author: { userId: 5, username: 'user505', profileCode: 505 },
    hits: 76,
    likeCount: 3,
    commentCount: 0,
    createdAt: '2025-03-06T11:30:00Z',
  },
  {
    postId: 5,
    title: '면접에서 자주 나오는 질문 정리',
    content:
      '프론트엔드 면접에서 자주 나오는 질문들을 모아봤어요. 예를 들어 클로저란 무엇인가, useEffect는 언제 실행되는가, 이벤트 위임은 무엇인가 등. 이 질문들에 대해 답을 준비해 두면 실제 면접에서도 당황하지 않고 자신의 생각을 잘 표현할 수 있습니다.',
    author: { userId: 4, username: 'user404', profileCode: 404 },
    hits: 170,
    likeCount: 15,
    commentCount: 5,
    createdAt: '2025-03-05T16:45:00Z',
  },
  {
    postId: 4,
    title: '개발자 포트폴리오 팁',
    content:
      '좋은 포트폴리오는 단순히 프로젝트 나열이 아니라, 문제 해결 능력을 보여주는 것이 중요합니다. 어떤 문제를 어떻게 해결했는지, 기술 선택 이유, 어려움을 극복한 과정 등을 서술하면 보는 사람에게 강한 인상을 줄 수 있어요. 디자인보다는 스토리텔링에 집중해보세요!',
    author: { userId: 1, username: 'user101', profileCode: 101 },
    hits: 200,
    likeCount: 25,
    commentCount: 7,
    createdAt: '2025-03-04T10:00:00Z',
    updatedAt: '2025-03-04T12:00:00Z',
  },
  {
    postId: 3,
    title: '타입스크립트 기초 개념 정리',
    content:
      'TypeScript를 처음 접하는 분들을 위한 기초 개념 정리입니다. interface와 type의 차이, 기본 타입, 함수 타입 정의, 유니언 타입, 제네릭 등 주요 개념을 한눈에 볼 수 있도록 정리했어요. 코드 예시와 함께 익히면 금방 익숙해질 수 있습니다.',
    author: { userId: 3, username: 'user303', profileCode: 303 },
    hits: 103,
    likeCount: 8,
    commentCount: 2,
    createdAt: '2025-03-03T08:15:00Z',
  },
  {
    postId: 2,
    title: 'React 상태 관리, 뭐가 좋을까?',
    content:
      'Redux, Recoil, Zustand 각각의 장단점을 고민해봤어요. 규모가 큰 프로젝트엔 Redux가 여전히 좋고, 간단한 앱에선 Zustand가 직관적입니다. Recoil은 React와 잘 맞고 비동기 작업도 다루기 편하죠. 팀의 경험과 프로젝트 성격에 따라 선택하는 것이 핵심입니다.',
    author: { userId: 2, username: 'user202', profileCode: 202 },
    hits: 88,
    likeCount: 5,
    commentCount: 1,
    createdAt: '2025-03-02T14:20:00Z',
  },
  {
    postId: 1,
    title: 'Next.js 프로젝트 구조 잡기',
    content:
      '프로젝트를 시작할 때 디렉토리 구조를 어떻게 잡는 것이 좋을까요? pages, components, hooks, utils 등 폴더를 나눠 두면 유지보수에 좋습니다. 특히 features 또는 modules 단위로 나누면 규모가 커져도 정리가 잘 되는 느낌이에요.',
    author: { userId: 1, username: 'user101', profileCode: 101 },
    hits: 150,
    likeCount: 12,
    commentCount: 4,
    createdAt: '2025-03-01T09:00:00Z',
    updatedAt: '2025-03-01T11:30:00Z',
  },
];
