import { ReactElement } from 'react';
import { Member } from '@/lib/types';
import { PortfolioStackCategory } from '@/lib/types/portfolio/stack';

export interface PortfolioTag {
  label: string;
}

export interface PortfolioMember {
  role:       string;
  roleDetail: string;
  member:     Member;
}

export interface PortfolioStack {
  category: PortfolioStackCategory;
  name:     string;
  icon:     ReactElement;
}
