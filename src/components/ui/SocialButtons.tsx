import styles from './SocialButtons.module.css'
import { Links } from '@/utils/Links.tsx';
import React from 'react';

export default function SocialButtons () {

  return (
    <div
      className={`${styles.iconContainer}`}
    >
      <a href={Links.Github} target={'_blank'} rel={'noreferrer'}>
        <i className="fa-brands fa-github" />
      </a>
      <a href={Links.Linkedin} target={'_blank'} rel={'noreferrer'}>
        <i className="fa-brands fa-linkedin" />
      </a>
      <a href={Links.Instagram} target={'_blank'} rel={'noreferrer'}>
        <i className="fa-brands fa-instagram" />
      </a>
    </div>
  )
}