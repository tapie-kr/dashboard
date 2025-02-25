import { BrandIcon } from '@tapie-kr/inspire-react';

export const brandIconName: {
  [key in BrandIcon]: string;
} = {
  [BrandIcon.ANDROID]:      'Android',
  [BrandIcon.APP_STORE]:    'App Store',
  [BrandIcon.APPLE]:        'Apple',
  [BrandIcon.BEHANCE]:      'Behance',
  [BrandIcon.CLOUDFLARE]:   'Cloudflare',
  [BrandIcon.CSS3]:         'CSS3',
  [BrandIcon.DISCORD]:      'Discord',
  [BrandIcon.DOCKER]:       'Docker',
  [BrandIcon.FIGMA]:        'Figma',
  [BrandIcon.GIT]:          'Git',
  [BrandIcon.GITHUB]:       'Github',
  [BrandIcon.GOOGLE]:       'Google',
  [BrandIcon.GOOGLE_PLAY]:  'Google Play',
  [BrandIcon.HTML5]:        'HTML5',
  [BrandIcon.INSTAGRAM]:    'Instagram',
  [BrandIcon.JAVASCRIPT]:   'Javascript',
  [BrandIcon.LINKEDIN]:     'LinkedIn',
  [BrandIcon.LINUX]:        'Linux',
  [BrandIcon.MICROSOFT]:    'Microsoft',
  [BrandIcon.MINIO]:        'MinIO',
  [BrandIcon.MONGODB]:      'MongoDB',
  [BrandIcon.NEXTJS]:       'Next.js',
  [BrandIcon.NODEJS]:       'Node.js',
  [BrandIcon.NOTION]:       'Notion',
  [BrandIcon.NPM]:          'NPM',
  [BrandIcon.POSTGRESQL]:   'PostgreSQL',
  [BrandIcon.PYTHON]:       'Python',
  [BrandIcon.RASPBERRY_PI]: 'Raspberry Pi',
  [BrandIcon.REACT]:        'React',
  [BrandIcon.READCV]:       'ReadCV',
  [BrandIcon.SASS]:         'SASS',
  [BrandIcon.SLACK]:        'Slack',
  [BrandIcon.SWIFT]:        'Swift',
  [BrandIcon.TAPIE]:        'TAPIE',
  [BrandIcon.TYPESCRIPT]:   'Typescript',
  [BrandIcon.UNITY]:        'Unity',
  [BrandIcon.VERCEL]:       'Vercel',
  [BrandIcon.YARN_BERRY]:   'Yarn Berry',
};

export const BrandIconEnumToName = (icon: BrandIcon) => {
  return brandIconName[icon];
};
