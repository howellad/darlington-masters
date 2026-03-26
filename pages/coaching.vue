<template>
  <div>
    <!-- Page Header -->
    <section class="page-hero">
      <div class="page-hero__overlay"></div>
      <div class="page-hero__content ddm-container">
        <h1>Our Coaches</h1>
        <p>Meet the team behind your training</p>
      </div>
    </section>

    <!-- Coach Profile -->
    <section class="ddm-section">
      <div class="ddm-container">
        <div class="coach-profile coach-profile--centered">
          <div class="coach-info">
            <h2>Niamh</h2>
            <div class="coach-accent"></div>
            <div class="coach-stats">
              <div class="coach-stat">
                <span class="coach-stat__number">Level 2</span>
                <span class="coach-stat__label">Swim England coaching qualification</span>
              </div>
            </div>
            <p>
              Niamh is our head coach, bringing energy and enthusiasm to every session on poolside.
              A Level 2 qualified swimming coach, she is following in the footsteps of our former
              coaches Iain and Glen, continuing the club's tradition of quality coaching with a
              technically focused approach.
            </p>
            <p>
              Whether you're training for competition or swimming for fitness, Niamh will help you
              improve your technique, speed and endurance in a supportive and encouraging environment.
            </p>
          </div>
        </div>

        <!-- Club Heritage -->
        <div class="achievements">
          <div class="section-header">
            <h2>Club Coaching Heritage</h2>
            <div class="accent-bar"></div>
          </div>
          <div class="achievements-grid">
            <div class="ddm-card achievement-card">
              <div class="achievement-icon">
                <i class="fas fa-hands-helping"></i>
              </div>
              <h3>Strong Foundations</h3>
              <p>Built on 30+ years of combined coaching experience from former coaches Iain &amp; Glen</p>
            </div>
            <div class="ddm-card achievement-card">
              <div class="achievement-icon">
                <i class="fas fa-bullseye"></i>
              </div>
              <h3>Quality Over Quantity</h3>
              <p>Technically focused sessions designed around swimming at the right rate at the right time</p>
            </div>
            <div class="ddm-card achievement-card">
              <div class="achievement-icon">
                <i class="fas fa-users"></i>
              </div>
              <h3>All Abilities</h3>
              <p>From fitness swimmers to competitors &mdash; every session caters for all levels</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Page Hero */
.page-hero {
  position: relative;
  padding: 160px 0 80px;
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
  overflow: hidden;
}

.page-hero__overlay {
  position: absolute;
  inset: 0;
  background: url('@/assets/Huddersfield.jpg') center/cover no-repeat;
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

/* Coach Profile */
.coach-profile {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 60px;
  align-items: start;
}

.coach-profile--centered {
  grid-template-columns: 1fr;
  max-width: 700px;
  margin: 0 auto;
}

.coach-info h2 {
  font-size: 2rem;
  color: var(--navy);
  margin-bottom: 8px;
}

.coach-accent {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--teal), var(--amber));
  border-radius: 2px;
  margin-bottom: 24px;
}

.coach-stats {
  display: flex;
  gap: 32px;
  margin-bottom: 24px;
}

.coach-stat {
  display: flex;
  flex-direction: column;
}

.coach-stat__number {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 2rem;
  color: var(--teal);
  line-height: 1;
}

.coach-stat__label {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 4px;
}

.coach-info p {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 16px;
}

/* Achievements */
.achievements {
  margin-top: 80px;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.achievement-card {
  padding: 32px;
  text-align: center;
}

.achievement-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--teal), rgba(10, 173, 173, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 1.5rem;
  color: #fff;
}

.achievement-card h3 {
  font-size: 1.1rem;
  color: var(--navy);
  margin-bottom: 8px;
}

.achievement-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .coach-profile {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .coach-image img {
    max-height: 350px;
  }

  .achievements-grid {
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
