// Minimal, zero-dep i18n. Base = English. Korean overrides.

export type Lang = 'en' | 'ko';

export const dict = {
  en: {
    // nav
    'nav.home': 'home',
    'nav.research': 'research',
    'nav.teaching': 'teaching',
    'nav.lab': 'lab',
    'nav.status': 'status',
    'nav.contact': 'contact',

    // hero / home
    'home.title': 'Assistant Professor',
    'home.terminal.whoami': 'whoami',
    'home.terminal.role': 'cat role.txt',
    'home.terminal.lab': 'ls lab/',
    'home.button.viewResearch': 'view_research',
    'home.button.contact': 'contact',
    'home.status.active': 'status: active',
    'home.profile.version': 'profile.v2026',

    // sections
    'section.dashboard': '// dashboard',
    'section.about': '// about',
    'section.researchAreas': '// research_areas',
    'section.events': '// events',
    'section.liveSnapshot': '// live_snapshot',

    // dashboard headings
    'dashboard.heading': 'Research & Teaching at a Glance',
    'dashboard.sub':
      'Live overview of publications, projects, courses, and events — aggregated from public records.',
    'dashboard.tag': '[ atCL / stats ]',
    'dashboard.stat.papers': 'papers',
    'dashboard.stat.projects': 'projects',
    'dashboard.stat.courses': 'courses',
    'dashboard.stat.events': 'events',
    'dashboard.stat.journals_conf': '{j} journals · {c} conf.',
    'dashboard.stat.ongoing': '{n} ongoing',
    'dashboard.stat.active': '{n} active',
    'dashboard.stat.recentActivity': 'recent activity',
    'dashboard.contribution_log': 'contribution_log',
    'dashboard.contribution.through': '— through {date}',
    'dashboard.contribution.totalSuffix': 'activities in the last year',
    'dashboard.timeline.title': 'tail -f activity.log',
    'dashboard.timeline.entries': '{n} entries',

    // about
    'about.heading': 'About',
    'about.glanceFile': '~/profile/at_a_glance.json',
    'about.label.education': 'education',
    'about.label.current': 'current',
    'about.label.previous': 'previous',
    'about.label.lab': 'lab',
    'about.label.externalLinks': 'external links',

    // research areas
    'research.heading': 'Four Pillars of Research',
    'research.sub': 'Driving innovation and commercialization across advanced technology domains',
    'research.active': '● active',

    // area titles
    'area.commercialization': 'Commercialization for Advanced Technology',
    'area.datamining': 'Research Methodology using Non-linear Datamining',
    'area.bmi': 'Business Model Innovation',
    'area.innovation': 'Innovation Dynamics and its Applications',

    // CTA
    'cta.nowRecruiting': 'now recruiting',
    'cta.joinTitle': 'Join',
    'cta.getInTouch': 'get_in_touch',

    // status-quo
    'status.title': 'Status Quo',
    'status.sub': 'Recent activities, events, and collaborations across research, teaching, and industry engagement.',
    'status.stat.events': 'events',
    'status.stat.latest': 'latest',
    'status.stat.countries': 'countries',
    'status.stat.partners': 'partners',
    'status.activitySnapshot': 'Activity Snapshot',
    'status.eventGallery': 'Event Gallery',
    'status.affiliatedWith': '// affiliated with',

    // footer
    'footer.contact': 'contact',
    'footer.address': 'address',
    'footer.external': 'external',

    // lang toggle
    'lang.toggleToKo': '한국어',
    'lang.toggleToEn': 'English',
  },
  ko: {
    'nav.home': '홈',
    'nav.research': '연구',
    'nav.teaching': '강의',
    'nav.lab': '연구실',
    'nav.status': '현황',
    'nav.contact': '연락처',

    'home.title': '조교수',
    'home.terminal.whoami': 'whoami',
    'home.terminal.role': 'cat 직함.txt',
    'home.terminal.lab': 'ls 연구실/',
    'home.button.viewResearch': '연구_보기',
    'home.button.contact': '연락하기',
    'home.status.active': '상태: 활동중',
    'home.profile.version': '프로필.v2026',

    'section.dashboard': '// 대시보드',
    'section.about': '// 소개',
    'section.researchAreas': '// 연구_분야',
    'section.events': '// 행사',
    'section.liveSnapshot': '// 실시간_현황',

    'dashboard.heading': '연구와 강의를 한눈에',
    'dashboard.sub': '논문, 프로젝트, 강의, 행사를 공개 데이터 기반으로 집계한 현황판입니다.',
    'dashboard.tag': '[ atCL / 통계 ]',
    'dashboard.stat.papers': '논문',
    'dashboard.stat.projects': '프로젝트',
    'dashboard.stat.courses': '강의',
    'dashboard.stat.events': '행사',
    'dashboard.stat.journals_conf': '저널 {j}편 · 학회 {c}편',
    'dashboard.stat.ongoing': '진행중 {n}건',
    'dashboard.stat.active': '운영중 {n}건',
    'dashboard.stat.recentActivity': '최근 활동',
    'dashboard.contribution_log': '기여_로그',
    'dashboard.contribution.through': '— {date} 기준',
    'dashboard.contribution.totalSuffix': '건의 지난 1년 활동',
    'dashboard.timeline.title': 'tail -f 활동.log',
    'dashboard.timeline.entries': '{n}건',

    'about.heading': '소개',
    'about.glanceFile': '~/프로필/요약.json',
    'about.label.education': '학력',
    'about.label.current': '현재',
    'about.label.previous': '이력',
    'about.label.lab': '연구실',
    'about.label.externalLinks': '외부 링크',

    'research.heading': '연구의 네 가지 축',
    'research.sub': '첨단 기술 분야에서 혁신과 사업화를 이끄는 연구 영역입니다.',
    'research.active': '● 진행중',

    'area.commercialization': '첨단기술 사업화',
    'area.datamining': '비선형 데이터마이닝 연구방법론',
    'area.bmi': '비즈니스 모델 혁신',
    'area.innovation': '혁신 동역학과 응용',

    'cta.nowRecruiting': '구성원 모집중',
    'cta.joinTitle': '함께합시다 —',
    'cta.getInTouch': '연락하기',

    'status.title': '현황',
    'status.sub': '연구, 강의, 산학 협력 영역의 최근 활동과 행사를 모았습니다.',
    'status.stat.events': '행사',
    'status.stat.latest': '최신',
    'status.stat.countries': '국가',
    'status.stat.partners': '파트너',
    'status.activitySnapshot': '활동 현황',
    'status.eventGallery': '행사 갤러리',
    'status.affiliatedWith': '// 소속',

    'footer.contact': '연락처',
    'footer.address': '주소',
    'footer.external': '외부',

    'lang.toggleToKo': '한국어',
    'lang.toggleToEn': 'English',
  },
} as const;

type DictKey = keyof (typeof dict)['en'];

export function translate(lang: Lang, key: DictKey, params?: Record<string, string | number>): string {
  const template = (dict[lang] as Record<string, string>)[key] ?? (dict.en as Record<string, string>)[key] ?? key;
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => String(params[k] ?? ''));
}
