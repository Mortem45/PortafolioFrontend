import React, { Component, Suspense } from 'react'
import RightBord from '../../right_bord/containers/right_bord'
import LeftBord from '../../left_bord/containers/left_bord'
import HomeLayout from '../components/home_layout'
import Section from '../../sections/components/section'
import Menu from '../../menu/containers/menu'
import MenuSmall from '../../menu/containers/menu_small'
import Home from '../../sections/components/home'
import ContactMe from '../../sections/components/contactme'
import TitleSection from '../../sections/components/titleSections'
import Paragraph from '../../utils/components/paragraph'
import ListSkills from '../../utils/components/list_skills'
import ListPortfolio from '../../utils/components/list_portfolio'
import ContactFooter from '../../utils/components/contactme-footer'
import ContactMeForm from '../../utils/components/contacteme-form'
import Letras from '../../utils/components/letras'
import LenguWrap from '../../utils/components/lenguage_wrap'
import Projects from '../../projects/containers/projects'

import { useTranslation } from 'react-i18next'

function App (){
  const { t, i18n } = useTranslation()

  const changeLangES = () => {
    i18n.changeLanguage('es')
  }

  const changeLangEN = () => {
    i18n.changeLanguage('en')
  }

  return (
    <HomeLayout>
      <Menu changeLangEN={changeLangEN} changeLangES={changeLangES}/>
      <MenuSmall />
      <RightBord>
        <LenguWrap changeLangEN={changeLangEN} changeLangES={changeLangES}/>
      </RightBord>
      <LeftBord />
      <Home id={'home'} dataName={'home.'}/>
      <Section id={'about-me'} dataName={'about-me.'}>
        <Letras
          title_sup={t('titles.about_me.title_sup')}
          title_inf={t('titles.about_me.title_inf')}>
        </Letras>
        <TitleSection
          title_sup={t('titles.about_me.title_sup')}
          title_inf={t('titles.about_me.title_inf')}>
        </TitleSection>
        <Paragraph
          parr1={t('aboutme.parr1')}
          parr2={t('aboutme.parr2')}>
        </Paragraph>
      </Section>
      <Section id={'skills'} dataName={'skills.'}>
        <TitleSection
          title_sup={t('titles.skills.title_sup')}
          title_inf={t('titles.skills.title_inf')}>
        </TitleSection>
        <Paragraph
          parr1={t('skills.parr1')}
          parr2={t('skills.parr2')}>
        </Paragraph>
        <Letras
          title_sup={t('titles.skills.title_sup')}
          title_inf={t('titles.skills.title_inf')}>
        </Letras>
        <ListSkills></ListSkills>
      </Section>
      <Section id={'portfolio'} dataName={'portfolio.'}>
        <ListPortfolio></ListPortfolio>
        <Projects></Projects>
      </Section>
      <ContactMe
        id={'contactMe'}
        dataName={'contactMe.'}
        title={t('titles.contact')}>
        <ContactFooter contactfooter={t('contactfooter.slogan_sup')}/>
        <ContactMeForm
          name={t('contactform.name')}
          email={t('contactform.email')}
          message_theme={t('contactform.message_theme')}
          message={t('contactform.message')}
          send={t('contactform.send')}>
        </ContactMeForm>
      </ContactMe>
    </HomeLayout>
  )

}

const Loader = () => (
  <div>
    <div>loading...</div>
  </div>
)

export default function HomeContainer() {
  return (
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  )
}
