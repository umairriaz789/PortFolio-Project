import {
  BannerContent,
  StyledTopBanner,
} from "../styles/layout/TopBanner.styled";

export const TopBanner = () => {
  return (
    <StyledTopBanner>
      <BannerContent>
        <a href="mailto:umairriaz789@gmail.com">👻 umairriaz789@gmail.com</a>
      </BannerContent>
      <BannerContent showOnMobile>
        {/* <a
          href="https://chaoocharles.gumroad.com/l/muqASJ"
          target="_blank"
          rel="noreferrer"
        >
          🔥 Learn how to Create a Portfolio like this!
        </a> */}
      </BannerContent>
      <BannerContent>
        <span>⚡ Available for Hire</span>
      </BannerContent>
    </StyledTopBanner>
  );
};
