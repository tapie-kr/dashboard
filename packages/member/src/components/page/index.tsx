'use client';

import PageTemplate, { PageTemplateProps } from '@tapie-kr/dashboard-shared/layout/page-template';
import { pathMap } from '@/lib/pathmap';

interface PageProps  extends Omit<PageTemplateProps, 'pathMap'> {
}

export default function Page(props: PageProps) {
  return (
    <PageTemplate
      pathMap={pathMap}
      {...props}
    />
  );
}
