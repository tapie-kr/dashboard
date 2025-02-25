import { Skeleton } from '@tapie-kr/inspire-react';

export default function SkeletonAchievementCard() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton
          key={index}
          width={250}
          height={100}
          borderRadius={10}
        />
      ))}
    </>
  );
}
