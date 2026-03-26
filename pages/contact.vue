<script setup lang="ts">
useHead({
  title: 'Contact Us',
  meta: [
    { name: 'description', content: 'Get in touch with Darlington Dolphin Masters ASC. Email ddmasc.secretary@gmail.com or find us on Facebook and Instagram. Based at the Dolphin Centre, Darlington.' },
    { property: 'og:title', content: 'Contact Us | Darlington Dolphin Masters ASC' },
    { property: 'og:description', content: 'Email ddmasc.secretary@gmail.com or find us on Facebook and Instagram. Dolphin Centre, Darlington.' },
    { property: 'og:url', content: 'https://www.darlingtondolphinmasters.org/contact' },
  ],
})
</script>

<template>
  <div>
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="page-hero__overlay"></div>
      <div class="page-hero__content ddm-container">
        <h1>Contact Us</h1>
        <p>Get in touch &mdash; we'd love to hear from you</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="ddm-section">
      <div class="ddm-container">
        <div class="contact-grid">
          <!-- Contact Cards -->
          <div class="contact-info">
            <div class="ddm-card contact-card">
              <div class="contact-card__icon">
                <i class="fas fa-envelope"></i>
              </div>
              <h3>Email Us</h3>
              <p>The best way to reach us</p>
              <a href="mailto:ddmasc.secretary@gmail.com" class="contact-link">
                ddmasc.secretary@gmail.com
              </a>
            </div>

            <div class="ddm-card contact-card">
              <div class="contact-card__icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <h3>Find Us</h3>
              <p>We train at</p>
              <span class="contact-link">Dolphin Centre, Darlington</span>
            </div>

            <div class="ddm-card contact-card">
              <div class="contact-card__icon contact-card__icon--social">
                <i class="fab fa-facebook-f"></i>
              </div>
              <h3>Facebook</h3>
              <p>Join our group</p>
              <a
                href="https://www.facebook.com/groups/1674660229229616/"
                target="_blank"
                rel="noopener"
                class="contact-link"
              >
                DDM Facebook Group
              </a>
            </div>

            <div class="ddm-card contact-card">
              <div class="contact-card__icon contact-card__icon--social">
                <i class="fab fa-instagram"></i>
              </div>
              <h3>Instagram</h3>
              <p>Follow our journey</p>
              <a
                href="https://www.instagram.com/darlington_dolphin_masters_asc"
                target="_blank"
                rel="noopener"
                class="contact-link"
              >
                @darlington_dolphin_masters_asc
              </a>
            </div>
          </div>

          <!-- Side Panel -->
          <div class="contact-side">
            <div class="ddm-card side-panel">
              <div class="side-panel__body">
                <h3>Interested in Joining?</h3>
                <div class="side-accent"></div>
                <p>
                  We welcome new members of all abilities aged 18 and over. The best way to
                  get started is to come along and try a session.
                </p>
                <div class="side-steps">
                  <div class="side-step">
                    <span class="side-step__num">1</span>
                    <div>
                      <strong>Drop us an email</strong>
                      <p>Let us know you're interested</p>
                    </div>
                  </div>
                  <div class="side-step">
                    <span class="side-step__num">2</span>
                    <div>
                      <strong>Try a session</strong>
                      <p>Come to a Monday or Thursday evening session</p>
                    </div>
                  </div>
                  <div class="side-step">
                    <span class="side-step__num">3</span>
                    <div>
                      <strong>Join the club</strong>
                      <p>Complete your membership when you're ready</p>
                    </div>
                  </div>
                </div>
                <NuxtLink to="/membership" class="btn btn--primary" style="width: 100%; margin-top: 8px;">
                  View Membership Options
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  position: relative;
  padding: 160px 0 80px;
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
  overflow: hidden;
}

.page-hero__overlay {
  position: absolute;
  inset: 0;
  background: url('@/assets/Main_Pool_2.jpg') center/cover no-repeat;
  opacity: 0.15;
}

.page-hero__content {
  position: relative;
  z-index: 1;
}

.page-hero__content h1 {
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 8px;
}

.page-hero__content p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
}

/* Contact Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 40px;
  align-items: start;
}

.contact-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.contact-card {
  padding: 28px;
  text-align: center;
}

.contact-card__icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--teal), rgba(10, 173, 173, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  font-size: 1.3rem;
  color: #fff;
}

.contact-card__icon--social {
  background: linear-gradient(135deg, var(--navy), var(--navy-light));
}

.contact-card h3 {
  font-size: 1rem;
  color: var(--navy);
  margin-bottom: 4px;
}

.contact-card p {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.contact-link {
  color: var(--teal);
  font-weight: 600;
  font-size: 0.85rem;
  word-break: break-all;
}

.contact-link:hover {
  color: var(--navy);
}

/* Side Panel */
.side-panel__body {
  padding: 32px;
}

.side-panel__body h3 {
  font-size: 1.3rem;
  color: var(--navy);
  margin-bottom: 8px;
}

.side-accent {
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, var(--teal), var(--amber));
  border-radius: 2px;
  margin-bottom: 16px;
}

.side-panel__body > p {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 24px;
}

.side-steps {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

.side-step {
  display: flex;
  gap: 16px;
  align-items: start;
}

.side-step__num {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--teal);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  flex-shrink: 0;
}

.side-step strong {
  font-size: 0.9rem;
  color: var(--navy);
  display: block;
  margin-bottom: 2px;
}

.side-step p {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin: 0;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-info {
    grid-template-columns: 1fr;
  }

  .page-hero {
    padding: 120px 0 60px;
  }

  .page-hero__content h1 {
    font-size: 2rem;
  }
}
</style>
