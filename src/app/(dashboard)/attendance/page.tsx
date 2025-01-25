import AttendanceCard from '@/components/card/attendance';
import AttendanceStatCard from '@/components/card/attendance/stat';
import PageTemplate from '@/components/page-template';

import {
  Filter,
  Grid,
  HStack,
  spacingVars,
  StackAlign,
  StackJustify,
  VStack,
} from '@tapie-kr/inspire-react';
import { AttendanceUnit } from '@/components/card/attendance/shared';
import { getUnitFilterGroup } from '@/lib/enum/utils';

const attendanceData = [
  { count: 32, unit: AttendanceUnit.MONTH },
  { count: 535, unit: AttendanceUnit.YEAR },
];

export default function AttendancePage() {
  return (
    <PageTemplate
      title={'출석'}
      count={0}
    >
      <VStack
        fullWidth
        spacing={spacingVars.jumbo}
        align={StackAlign.START}
      >
        <HStack
          spacing={spacingVars.base}
          fullWidth
          justify={StackJustify.START}
        >
          {attendanceData.map((item, index) => {
            return (
              <AttendanceStatCard
                key={index}
                count={item.count}
                unit={item.unit}
              />
            );
          })}
        </HStack>
        <VStack
          spacing={spacingVars.petite}
          align={StackAlign.START}
        >
          <Filter filters={[getUnitFilterGroup()]} />
          <Grid
            columnCount={3}
            gap={spacingVars.petite}
          >
            <AttendanceCard
              member={{ studentId: 10417, name: '신유준' }}
              day={23}
              count={5}
            />
            {Array.from({ length: 5 }).map((_, index) => (
              <AttendanceCard
                key={index}
                member={{ studentId: 10417, name: '신유준' }}
                day={23}
                count={5}
                isAbsent
              />
            ))}
          </Grid>
        </VStack>
      </VStack>
    </PageTemplate>
  );
}
