import { Skeleton } from '@tapie-kr/inspire-react';

export default function SkeletonMemberCard() {
  return (
    <>
      {Array.from({ length: 7 }).map((_, idx) => (
        <Skeleton
          key={idx}
          width={300}
          height={100}
          borderRadius={10}
        />
      ))}
    </>
  );
}
