import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTASection from '../components/CTASection'
import ContactSection from '../components/ContactSection'
import ContactForm from '../components/ContactForm'
import styles from '../styles/Contact.module.css'
import ParallaxSection from '../components/ParallaxSection'
import Decorators from '../components/common/Decorators'

const Contact: React.FC = () => {

	return (
			<div className="parallax-container pricing-page">
				<Header />

					<main className={styles.contactPage}>
						<div style={{ position: 'relative' }}>
							<section className={styles.heroWrap}>
									<div data-hero="light" className={styles.heroInner}>
										<img src="https://placehold.co/1352x512" alt="Contact hero" className={styles.heroImage} />
									</div>
							</section>
							<Decorators count={2} seed={10} />
						</div>
						

						<ParallaxSection speed={0.15} direction="up">
							<div style={{ position: 'relative' }}>
							<ContactSection />
							<Decorators count={2} seed={5} />
							</div>
						</ParallaxSection>
						<ParallaxSection speed={0.15} direction="up">
							<div style={{ position: 'relative' }}>
							<ContactForm />
							<Decorators count={2} seed={4} />
							</div>
						</ParallaxSection>

				<CTASection />
			</main>

			<Footer />
		</div>
	)
}

export default Contact
