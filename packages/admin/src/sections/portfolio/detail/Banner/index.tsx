import {
  AspectRatio,
  Box,
  colorVars,
  GlyphIcon,
  HStack,
  Icon,
  Image,
  spacingVars,
  StackAlign,
  Typo,
  Weight,
} from '@tapie-kr/inspire-react';

interface PortfolioDetailBannerSectionProps {
  title:       string;
  image:       string;
  catchphrase: string;
}

import * as s from './style.css';

export default function PortfolioDetailBannerSection(props: PortfolioDetailBannerSectionProps) {
  const {
    title,
    image,
    catchphrase,
  } = props;

  return (
    <>
      <Box className={s.base}>
        <AspectRatio
          fullWidth
          fullHeight
          ratio={694 / 250}
          className={s.imageContainer}
        >
          <Image
            fullWidth
            fullHeight
            className={s.image}
            src={image}
            alt={title}
          />
          <HStack
            spacing={spacingVars.base}
            align={StackAlign.END}
            className={s.content}
          >
            <Typo.Medium
              weight={Weight.SEMIBOLD}
              color={colorVars.solid.translucent.white._95}
            >
              {title}
            </Typo.Medium>
            <HStack spacing={spacingVars.mini}>
              <Typo.Base
                weight={Weight.MEDIUM}
                color={colorVars.solid.translucent.white._50}
              >
                {catchphrase}
              </Typo.Base>
              <Icon
                name={GlyphIcon.ARROW_FORWARD}
                color={colorVars.solid.translucent.white._50}
                size={18}
              />
            </HStack>
          </HStack>
        </AspectRatio>
      </Box>
    </>
  );
}
