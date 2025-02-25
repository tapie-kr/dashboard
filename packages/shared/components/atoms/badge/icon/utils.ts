import { BrandIcon } from '@tapie-kr/inspire-react';

export const brandIconName: {
  [key in BrandIcon]: string;
} = {
  [BrandIcon.ANDROID]:      'android',
  [BrandIcon.APP_STORE]:    'app_store',
  [BrandIcon.APPLE]:        'apple',
  [BrandIcon.BEHANCE]:      'behance',
  [BrandIcon.CLOUDFLARE]:   'cloudflare',
  [BrandIcon.CSS3]:         'css3',
  [BrandIcon.DISCORD]:      'discord',
  [BrandIcon.DOCKER]:       'docker',
  [BrandIcon.FIGMA]:        'figma',
  [BrandIcon.GIT]:          'git',
  [BrandIcon.GITHUB]:       'github',
  [BrandIcon.GOOGLE]:       'google',
  [BrandIcon.GOOGLE_PLAY]:  'google_play',
  [BrandIcon.HTML5]:        'html5',
  [BrandIcon.INSTAGRAM]:    'instagram',
  [BrandIcon.JAVASCRIPT]:   'javascript',
  [BrandIcon.LINKEDIN]:     'linkedin',
  [BrandIcon.LINUX]:        'linux',
  [BrandIcon.MICROSOFT]:    'microsoft',
  [BrandIcon.MINIO]:        'minio',
  [BrandIcon.MONGODB]:      'mongodb',
  [BrandIcon.NEXTJS]:       'nextjs',
  [BrandIcon.NODEJS]:       'nodejs',
  [BrandIcon.NOTION]:       'notion',
  [BrandIcon.NPM]:          'npm',
  [BrandIcon.POSTGRESQL]:   'postgresql',
  [BrandIcon.PYTHON]:       'python',
  [BrandIcon.RASPBERRY_PI]: 'raspberry_pi',
  [BrandIcon.REACT]:        'react',
  [BrandIcon.READCV]:       'readcv',
  [BrandIcon.SASS]:         'sass',
  [BrandIcon.SLACK]:        'slack',
  [BrandIcon.SWIFT]:        'swift',
  [BrandIcon.TAPIE]:        'tapie',
  [BrandIcon.TYPESCRIPT]:   'typescript',
  [BrandIcon.UNITY]:        'unity',
  [BrandIcon.VERCEL]:       'vercel',
  [BrandIcon.YARN_BERRY]:   'yarn_berry',
};

export const BrandIconEnumToName = (icon: BrandIcon) => {
  return brandIconName[icon];
};
