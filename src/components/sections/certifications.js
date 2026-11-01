import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledCertificationsSection = styled.section`
  max-width: 900px;

  ul.cert-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    grid-gap: 15px;
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

const StyledCert = styled.li`
  ${({ theme }) => theme.mixins.boxShadow};
  padding: 1.5rem 1.75rem;
  border-radius: var(--border-radius);
  background-color: var(--light-navy);
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
  }

  .cert-name {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-lg);
    line-height: 1.3;
  }

  .cert-issuer {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  .cert-date {
    margin-top: 5px;
    color: var(--slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
  }
`;

const Certifications = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/content/certifications/" }) {
        frontmatter {
          title
          certifications {
            name
            issuer
            date
          }
        }
      }
    }
  `);

  const { title, certifications } = data.markdownRemark.frontmatter;

  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!prefersReducedMotion) {
      sr.reveal(revealContainer.current, srConfig());
    }
  }, [prefersReducedMotion]);

  return (
    <StyledCertificationsSection id="certifications" ref={revealContainer}>
      <h2 className="numbered-heading">{title}</h2>

      <ul className="cert-grid">
        {certifications &&
          certifications.map(({ name, issuer, date }, i) => (
            <StyledCert key={i}>
              <h3 className="cert-name">{name}</h3>
              <div className="cert-issuer">{issuer}</div>
              {date && <div className="cert-date">{date}</div>}
            </StyledCert>
          ))}
      </ul>
    </StyledCertificationsSection>
  );
};

export default Certifications;
