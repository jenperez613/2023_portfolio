import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const SocialMedia = () => (
  <div className='app__social'>
    <div>
      <a
        href='https://www.linkedin.com/in/jenniferramerperez/'
        target='_blank'>
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a href='https://github.com/jenperez613' target='_blank'>
        <FaGithub />
      </a>
    </div>
    <div>
      <a href='https://www.instagram.com/jenperezzz/' target='_blank'>
        <BsInstagram />
      </a>
    </div>
  </div>
)

export default SocialMedia
