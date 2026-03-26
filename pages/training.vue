<template>
  <div>
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="page-hero__overlay"></div>
      <div class="page-hero__content ddm-container">
        <h1>Training Sessions</h1>
        <p>Three sessions every week at the Dolphin Centre</p>
      </div>
    </section>

    <!-- Sessions -->
    <section class="ddm-section">
      <div class="ddm-container">
        <div class="section-header">
          <h2>Weekly Schedule</h2>
          <p>Open to swimmers aged 18+ of all abilities, whether training for fitness or competition.</p>
          <div class="accent-bar"></div>
        </div>

        <div class="sessions-grid">
          <div class="ddm-card session-card">
            <div class="session-card__day">Mon</div>
            <div class="session-card__body">
              <h3>Monday Evening</h3>
              <div class="session-card__time">
                <i class="fas fa-clock"></i> 7:30pm &ndash; 8:30pm
              </div>
              <div class="session-card__detail">
                <i class="fas fa-swimming-pool"></i> Full 25m main pool
              </div>
              <div class="session-card__detail">
                <i class="fas fa-map-marker-alt"></i> Dolphin Centre
              </div>
            </div>
          </div>

          <div class="ddm-card session-card session-card--featured">
            <div class="session-card__badge">Early Bird</div>
            <div class="session-card__day">Wed</div>
            <div class="session-card__body">
              <h3>Wednesday Morning</h3>
              <div class="session-card__time">
                <i class="fas fa-clock"></i> 6:30am &ndash; 7:30am
              </div>
              <div class="session-card__detail">
                <i class="fas fa-swimming-pool"></i> 2 lanes
              </div>
              <div class="session-card__detail">
                <i class="fas fa-map-marker-alt"></i> Dolphin Centre
              </div>
            </div>
          </div>

          <div class="ddm-card session-card">
            <div class="session-card__day">Thu</div>
            <div class="session-card__body">
              <h3>Thursday Evening</h3>
              <div class="session-card__time">
                <i class="fas fa-clock"></i> 7:30pm &ndash; 8:30pm
              </div>
              <div class="session-card__detail">
                <i class="fas fa-swimming-pool"></i> 5 lanes
              </div>
              <div class="session-card__detail">
                <i class="fas fa-map-marker-alt"></i> Dolphin Centre
              </div>
            </div>
          </div>
        </div>

        <!-- Info Box -->
        <div class="info-box">
          <div class="info-box__icon">
            <i class="fas fa-info-circle"></i>
          </div>
          <div class="info-box__content">
            <h4>New to the club?</h4>
            <p>
              Prospective members are welcome to try a couple of sessions before joining.
              Just introduce yourself to Niamh the Coach or Chris the Secretary on poolside before the session starts.
            </p>
            <NuxtLink to="/contact" class="btn btn--teal" style="margin-top: 12px; padding: 10px 24px; font-size: 0.85rem;">
              Get in Touch
            </NuxtLink>
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

/* Sessions Grid */
.sessions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}

.session-card {
  position: relative;
  overflow: visible;
  border-top: 4px solid var(--teal);
}

.session-card--featured {
  border-top-color: var(--amber);
}

.session-card__badge {
  position: absolute;
  top: -14px;
  right: 20px;
  background: var(--amber);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  font-family: 'Montserrat', sans-serif;
}

.session-card__day {
  background: var(--off-white);
  padding: 20px 28px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 1.4rem;
  color: var(--navy);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.session-card--featured .session-card__day {
  background: linear-gradient(135deg, rgba(232, 149, 46, 0.1), rgba(232, 149, 46, 0.05));
}

.session-card__body {
  padding: 24px 28px 28px;
}

.session-card__body h3 {
  font-size: 1.15rem;
  color: var(--navy);
  margin-bottom: 16px;
}

.session-card__time {
  font-size: 1rem;
  font-weight: 600;
  color: var(--teal);
  margin-bottom: 12px;
}

.session-card__time i {
  margin-right: 8px;
  width: 16px;
}

.session-card__detail {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.session-card__detail i {
  color: var(--teal);
  margin-right: 8px;
  width: 16px;
  text-align: center;
}

/* Info Box */
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

@media (max-width: 768px) {
  .sessions-grid {
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
