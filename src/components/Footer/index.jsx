import {
  FacebookIcon,
  GithubIcon,
  HeartIcon,
  InstagramIcon,
  LinkedinIcon,
} from '../../assets/icons'

const Footer = () => {
  return (
    <footer className='footer flex-column flex-align-center gap-8'>
      <a href='/' className='footer__title text-color-light'>
        Pokemon
      </a>
      <div className='flex gap-8'>
        <a
          href='https://www.instagram.com/tritera.erlangga'
          target='_blank'
          rel='noopener noreferrer'
        >
          <InstagramIcon />
        </a>
        <a
          href='https://www.facebook.com/dev.triteraerlangga'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FacebookIcon />
        </a>
        <a
          href='https://www.linkedin.com/in/tritera-erlangga-0ab7b5183'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LinkedinIcon />
        </a>
        <a
          href='https://github.com/troy213'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GithubIcon />
        </a>
      </div>
      <p className='flex-justify-center text-3 text-light text-color-light gap-2'>
        Made with{' '}
        <span>
          <HeartIcon />
        </span>{' '}
        by Tritera Erlangga
      </p>
      <p className='footer__copyright text-3 text-light text-color-light'>
        <span className='footer__copyright-mobile--hidden'>
          Erlangga's Journey |{' '}
        </span>
        <span>© 2023 Tritera Erlangga. All Rights Reserved</span>
      </p>
    </footer>
  )
}

export default Footer
