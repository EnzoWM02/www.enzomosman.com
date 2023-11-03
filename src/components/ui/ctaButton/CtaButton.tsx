import styles from './CtaButton.module.css';

import React from 'react';
import { Translation } from 'react-i18next';
import Button from 'src/components/ui/Button.tsx';

interface ICtaButton {
    link: string;
}

export default function CtaButton ({link}: ICtaButton) {
    return (
      <Translation>
        {(t) => (
          <Button
            className={`${styles.ctaButton}`}
            onClick={() => window.open(link)}
          >
            <div className={`${styles.portfolioCtaButton}`}>
              {t('learnMore')}
              <i className="fa-brands fa-github" />
            </div>
          </Button>
        )}
      </Translation>
    );
}