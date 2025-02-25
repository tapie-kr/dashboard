import { Member } from '@/lib/types';

export interface Info {
  label: string;
}

export interface PortfolioMember extends Member {
  role:       string;
  roleDetail: string;
}
