import {
  Container,
  Content,
  LinksContainer,
  AboutMe,
  CopyrightNotice,
} from "./styled";
import { Link } from "./Link";
import { ReactComponent as GitHubIcon } from "./images/github.svg";
import { ReactComponent as FacebookIcon } from "./images/facebook.svg";
import { ReactComponent as LinkedInIcon } from "./images/linkedin.svg";
import { ReactComponent as WebsiteIcon } from "./images/website.svg";
import { ReactComponent as MailIcon } from "./images/mail.svg";

export const Footer = () => {
  return (
    <Container>
      <Content>
        <AboutMe>
          This application was created by Krystian Greblowski. If you would like
          to see more of my work or contact me, check out the profiles below.
        </AboutMe>

        <LinksContainer>
          <Link
            name="krystian.greblowski@gmail.com"
            url="mailto:krystian.greblowski@gmail.com"
            icon={<MailIcon />}
          />

          <Link
            name="Personal Homepage"
            url="https://krystiangreblowski.github.io/personal-homepage/"
            icon={<WebsiteIcon />}
          />

          <Link
            name="GitHub"
            url="https://github.com/KrystianGreblowski/"
            icon={<GitHubIcon />}
          />

          <Link
            name="Facebook"
            url="https://www.facebook.com/profile.php?id=100000060031788/"
            icon={<FacebookIcon />}
          />

          <Link
            name="LinkedIn"
            url="https://www.linkedin.com/in/krystian-greblowski-2a8449308/"
            icon={<LinkedInIcon />}
          />
        </LinksContainer>

        <CopyrightNotice>Copyright © 2024 Krystian Greblowski</CopyrightNotice>
      </Content>
    </Container>
  );
};
