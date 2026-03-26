<template>
  <div>
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="page-hero__overlay"></div>
      <div class="page-hero__content ddm-container">
        <h1>Membership</h1>
        <p>Join our friendly swimming community</p>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="ddm-section">
      <div class="ddm-container">
        <div class="section-header">
          <h2>Membership Fees</h2>
          <p>Choose the membership that suits you</p>
          <div class="accent-bar"></div>
        </div>

        <div class="pricing-grid">
          <!-- Competitive -->
          <div class="ddm-card pricing-card pricing-card--featured">
            <div class="pricing-card__badge">Most Popular</div>
            <div class="pricing-card__header">
              <h3>Competitive</h3>
              <p>Full Swim England registration for competitions</p>
            </div>
            <div class="pricing-card__prices">
              <div class="price-row">
                <span class="price-label">Full Year <small>(from 1st Jan)</small></span>
                <span class="price-amount">&pound;65</span>
              </div>
              <div class="price-row">
                <span class="price-label">Part Year <small>(from 1st May)</small></span>
                <span class="price-amount">&pound;60</span>
              </div>
              <div class="price-row">
                <span class="price-label">Part Year <small>(from 1st Sep)</small></span>
                <span class="price-amount">&pound;55</span>
              </div>
            </div>
            <ul class="pricing-card__features">
              <li><i class="fas fa-check"></i> All coached sessions</li>
              <li><i class="fas fa-check"></i> Swim England affiliation</li>
              <li><i class="fas fa-check"></i> Competition entry</li>
              <li><i class="fas fa-check"></i> Insurance cover</li>
            </ul>
            <NuxtLink to="/contact" class="btn btn--blue pricing-btn">Join Competitive</NuxtLink>
          </div>

          <!-- Recreational -->
          <div class="ddm-card pricing-card">
            <div class="pricing-card__header">
              <h3>Recreational</h3>
              <p>Swimming for fitness and fun</p>
            </div>
            <div class="pricing-card__prices">
              <div class="price-row">
                <span class="price-label">Full Year <small>(from 1st Jan)</small></span>
                <span class="price-amount">&pound;50</span>
              </div>
              <div class="price-row">
                <span class="price-label">Part Year <small>(from 1st May)</small></span>
                <span class="price-amount">&pound;50</span>
              </div>
              <div class="price-row">
                <span class="price-label">Part Year <small>(from 1st Sep)</small></span>
                <span class="price-amount">&pound;40</span>
              </div>
            </div>
            <ul class="pricing-card__features">
              <li><i class="fas fa-check"></i> All coached sessions</li>
              <li><i class="fas fa-check"></i> Swim England affiliation</li>
              <li><i class="fas fa-check"></i> Insurance cover</li>
              <li style="opacity: 0.4;"><i class="fas fa-times"></i> Competition entry</li>
            </ul>
            <NuxtLink to="/contact" class="btn btn--blue pricing-btn">Join Recreational</NuxtLink>
          </div>
        </div>

        <!-- Additional Info -->
        <div class="membership-info">
          <div class="info-box">
            <div class="info-box__icon">
              <i class="fas fa-info-circle"></i>
            </div>
            <div class="info-box__content">
              <h4>How to Join</h4>
              <p>
                Prospective new members are very welcome to try a couple of sessions before committing.
                Just introduce yourself to Niamh the Coach or Chris the Secretary on poolside before the
                start of a session.
              </p>
              <h4 style="margin-top: 20px;">Pool Entry</h4>
              <p>
                On top of club membership, you'll need to pay for pool entry at the Dolphin Centre.
                Most of us have a Dolphin Centre monthly membership which gives unlimited swimming,
                but you can also just turn up and pay per session at reception.
              </p>
              <p style="margin-top: 8px;">
                To get started, contact us at
                <a href="mailto:ddmasc.secretary@gmail.com" class="email-link">ddmasc.secretary@gmail.com</a>
              </p>
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

/* Pricing Grid */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 800px;
  margin: 0 auto 48px;
}

.pricing-card {
  position: relative;
  padding: 0;
  overflow: visible;
}

.pricing-card--featured {
  border: 2px solid var(--amber);
}

.pricing-card__badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--amber);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 16px;
  border-radius: 20px;
  font-family: 'Montserrat', sans-serif;
  white-space: nowrap;
}

.pricing-card__header {
  padding: 32px 28px 20px;
  text-align: center;
  border-bottom: 1px solid var(--light-gray);
}

.pricing-card__header h3 {
  font-size: 1.5rem;
  color: var(--navy);
  margin-bottom: 6px;
}

.pricing-card__header p {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.pricing-card__prices {
  padding: 24px 28px;
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--light-gray);
}

.price-row:last-child {
  border-bottom: none;
}

.price-label {
  font-size: 0.9rem;
  color: var(--text-dark);
}

.price-label small {
  color: var(--text-muted);
  font-size: 0.8rem;
}

.price-amount {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  color: var(--navy);
}

.pricing-card__features {
  list-style: none;
  padding: 0 28px 8px;
}

.pricing-card__features li {
  padding: 8px 0;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.pricing-card__features li i {
  margin-right: 10px;
  color: var(--teal);
  width: 16px;
}

.pricing-card__features li i.fa-times {
  color: var(--text-muted);
}

.pricing-btn {
  display: block;
  margin: 16px 28px 28px;
  text-align: center;
}

/* Info Box */
.membership-info {
  max-width: 800px;
  margin: 0 auto;
}

.info-box {
  display: flex;
  gap: 24px;
  align-items: start;
  background: var(--off-white);
  border-radius: 12px;
  padding: 32px;
  border-left: 4px solid var(--teal);
}

.info-box__icon {
  font-size: 1.5rem;
  color: var(--teal);
  flex-shrink: 0;
  margin-top: 2px;
}

.info-box__content h4 {
  font-size: 1.1rem;
  color: var(--navy);
  margin-bottom: 8px;
}

.info-box__content p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

.email-link {
  color: var(--teal);
  font-weight: 600;
  text-decoration: underline;
}

.email-link:hover {
  color: var(--navy);
}

@media (max-width: 768px) {
  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .page-hero {
    padding: 120px 0 60px;
  }

  .page-hero__content h1 {
    font-size: 2rem;
  }

  .info-box {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
