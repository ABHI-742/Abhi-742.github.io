import React, { useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
        }
      }
      markdownRemark(fileAbsolutePath: { regex: "/content/contact/" }) {
        html
        frontmatter {
          title
          buttonText
        }
      }
    }
  `);

  const { email } = data.site.siteMetadata;
  const { html, frontmatter } = data.markdownRemark;
  const { title, buttonText } = frontmatter;
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What&apos;s Next?</h2>
      <h2 className="title">{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <a className="email-link" href={`mailto:${email}`}>
        {buttonText}
      </a>
    </StyledContactSection>
  );
};

export default Contact;
