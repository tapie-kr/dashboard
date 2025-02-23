import {
  Filter,
  Grid,
  HStack,
  spacingVars,
  StackAlign,
  StackJustify,
  VStack,
} from '@tapie-kr/inspire-react';
import AttendanceCard from '@/components/card/attendance';
import AttendanceStatCard from '@/components/card/attendance/stat';
import Page from '@/components/page';

import { AttendanceUnit } from '@/components/card/attendance/shared';
import { getContestFilterGroup } from '@/lib/enum/utils';

const attendanceData = [
  {
    count: 32,
    unit:  AttendanceUnit.MONTH,
  },
  {
    count: 535,
    unit:  AttendanceUnit.YEAR,
  },
];

export default function AttendancePage() {
  return (
    <Page
      title='출석'
      count={0}
    >
      <VStack
        fullWidth
        spacing={spacingVars.jumbo}
        align={StackAlign.START}
      >
        <HStack
          fullWidth
          spacing={spacingVars.base}
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
          <Filter filters={[getContestFilterGroup()]} />
          <Grid
            columnCount={3}
            gap={spacingVars.petite}
          >
            <AttendanceCard
              day={23}
              count={5}
              member={{
                studentId: 10417,
                name:      '신유준',
              }}
            />
            {Array.from({ length: 5 }).map((_, index) => (
              <AttendanceCard
                key={index}
                isAbsent
                day={23}
                count={5}
                member={{
                  studentId: 10417,
                  name:      '신유준',
                }}
              />
            ))}
          </Grid>
        </VStack>
      </VStack>
    </Page>
  );
}
