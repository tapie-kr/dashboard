import { type Member } from '.';

const getMemberString = (member: Member) => {
  return `${member.studentId} ${member.name}`;
};

export { getMemberString };
