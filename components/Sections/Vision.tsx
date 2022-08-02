import styled from '@emotion/styled'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

export const Vision = () => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <SectionTag>{t('section.vision')}</SectionTag>

      <Heading>
        <Fade left>
          <div className="flex w-9/12 flex-col items-center justify-center pt-5">
            <Image alt="arise logo" height={150} layout="fixed" src="/logo.svg" width={150} />
          </div>
        </Fade>

        <Fade bottom>
          <div className="flex justify-center text-center">
            <Message>{t('vision.title')}</Message>
          </div>
        </Fade>
      </Heading>

      <Content>
        <Fade bottom>
          <Row>
            <Left>
              <StepHeader>{t('vision.step1_title')}</StepHeader>
              {t('vision.step1_description')}
            </Left>
            <VerticalLine />
            <Right>
              <Image alt="step1" height={300} src="/step1.jpg" width={500} />
            </Right>
          </Row>
        </Fade>

        <Fade bottom>
          <Row>
            <Left>
              <Image alt="step2" height={300} src="/step2.jpg" width={500} />
            </Left>
            <VerticalLine />
            <Right>
              <StepHeader>{t('vision.step2_title')}</StepHeader>
              {t('vision.step2_description')}
            </Right>
          </Row>
        </Fade>

        <Fade bottom>
          <Row>
            <Left>
              <StepHeader>{t('vision.step3_title')}</StepHeader>
              {t('vision.step3_description')}
            </Left>
            <VerticalLine />
            <Right>
              <Image alt="step3" height={300} src="/step3.jpg" width={500} />
            </Right>
          </Row>
        </Fade>

        <Fade bottom>
          <Row>
            <Left>
              <Image alt="step4" height={300} src="/step4.jpg" width={500} />
            </Left>
            <VerticalLine />
            <Right>
              <StepHeader>{t('vision.step4_title')}</StepHeader>
              {t('vision.step4_description')}
            </Right>
          </Row>
        </Fade>

        <Fade bottom>
          <Row>
            <Left>
              <StepHeader>{t('vision.step5_title')}</StepHeader>
              {t('vision.step5_description')}
            </Left>
            <VerticalLine />
            <Right>
              <Image alt="step5" height={300} src="/step5.jpg" width={500} />
            </Right>
          </Row>
        </Fade>

        <Fade bottom>
          <Row>
            <Left>
              <Image alt="step6" height={300} src="/step6.jpg" width={500} />
            </Left>
            <VerticalLine />
            <Right>
              <StepHeader>{t('vision.step6_title')}</StepHeader>
              {t('vision.step6_description')}
            </Right>
          </Row>
        </Fade>

        <Fade bottom>
          <Row>
            <Left>
              <StepHeader>{t('vision.step7_title')}</StepHeader>
              {t('vision.step7_description')}
            </Left>
            <VerticalLine />
            <Right>
              <Image alt="step7" height={300} src="/step7.jpg" width={500} />
            </Right>
          </Row>
        </Fade>

        <Fade bottom>
          <Row>
            <Left>
              <Image alt="step8" height={300} src="/step8.jpg" width={500} />
            </Left>
            <VerticalLine />
            <Right>
              <StepHeader>{t('vision.step8_title')}</StepHeader>
              {t('vision.step8_description')}
            </Right>
          </Row>
        </Fade>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem 12rem;
  background: #edf2f4;

  @media (max-width: 390px) {
    padding: 4rem 2rem;
    font-size: 1.5rem;
  }
`

const SectionTag = styled.div`
  color: #e9302e;
  font-size: 1rem;
  padding-bottom: 3rem;
  letter-spacing: 0.4rem;
`

const Message = styled.div`
  font-size: 2.5rem;
  font-weight: bold;

  @media (max-width: 390px) {
    font-size: 1rem;
    margin-top: 2rem;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem 7rem;

  @media (max-width: 390px) {
    padding: 1rem;
    font-size: 0.8rem;
  }
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: end;
  padding: 2rem 7rem;

  @media (max-width: 390px) {
    padding: 1rem;
    font-size: 0.8rem;
  }
`

const VerticalLine = styled.div`
  border-left: 3px solid #e9302e;
  border-radius: 4px;
  height: 15rem;

  @media (max-width: 390px) {
    display: none;
  }
`

const Heading = styled.div`
  display: flex;
  padding-bottom: 5rem;

  @media (max-width: 1900px) {
    font-size: 3.8rem;
  }

  @media (max-width: 1500px) {
    font-size: 3.2rem;
  }

  @media (max-width: 1000px) {
    font-size: 2.6rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }

  @media (max-width: 390px) {
    flex-direction: column;
    align-items: center;
  }
`

const StepHeader = styled.div`
  font-size: 1.5rem;
  font-weight: 500;

  @media (max-width: 390px) {
    font-size: 1rem;
  }
`
