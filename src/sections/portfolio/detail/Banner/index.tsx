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
  title: string;
  image: string;
  catchphrase: string;
}

import * as s from './style.css';

export default function PortfolioDetailBannerSection(props: PortfolioDetailBannerSectionProps) {
  const { title, image, catchphrase } = props;

  return (
    <>
      <Box className={s.base}>
        <AspectRatio
          ratio={694 / 250}
          fullWidth
          fullHeight
        >
          <Image
            className={s.image}
            src={image}
            alt={title}
            fullWidth
            fullHeight
          />
        </AspectRatio>
        <HStack
          spacing={spacingVars.base}
          align={StackAlign.END}
          className={s.content}
        >
          <Typo.Medium
            weight={Weight.SEMIBOLD}
            color={colorVars.content.inverted.emphasized}
          >
            {title}
          </Typo.Medium>
          <HStack spacing={spacingVars.mini}>
            <Typo.Base
              weight={Weight.MEDIUM}
              color={colorVars.content.inverted.default}
            >
              {catchphrase}
            </Typo.Base>
            <Icon
              name={GlyphIcon.ARROW_FORWARD}
              color={colorVars.content.inverted.default}
              size={18}
            />
          </HStack>
        </HStack>
      </Box>
    </>
  );
}
