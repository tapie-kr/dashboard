import { GlyphIcon, type IconName } from '@tapie-kr/inspire-react';
import { Announcement } from '.';

export const getAnnouncementIcon = (announcement: Announcement) => {
  const announcementIcon: {
    [key in Announcement]: IconName;
  } = {
    [Announcement.MESSAGE]: GlyphIcon.SEND,
    [Announcement.NOTICE]: GlyphIcon.NOTIFICATIONS,
  };

  return announcementIcon[announcement];
};
