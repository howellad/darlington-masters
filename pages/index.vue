<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title">Darlington Dolphin<br />Masters ASC</h1>
        <p class="hero-subtitle">
          Adult swimming for every level &mdash; fitness, friendship &amp; competition.
          Ages 18+ welcome.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/membership" class="btn btn--blue">Try a Session</NuxtLink>
          <NuxtLink to="/training" class="btn btn--outline">View Sessions</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Stats Bar -->
    <div class="stats-bar">
      <div class="stats-bar__inner ddm-container">
        <div class="stats-bar__item">
          <i class="fas fa-swimmer"></i>
          <span>Ages 18 &ndash; 80+</span>
        </div>
        <div class="stats-bar__item">
          <i class="fas fa-medal"></i>
          <span>Swim England Affiliated</span>
        </div>
        <div class="stats-bar__item">
          <i class="fas fa-calendar-alt"></i>
          <span>3 Sessions Per Week</span>
        </div>
        <div class="stats-bar__item">
          <i class="fas fa-users"></i>
          <span>All Abilities Welcome</span>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <section class="ddm-section">
      <div class="ddm-container">
        <div class="about-grid">
          <div class="about-text">
            <div class="section-header" style="text-align: left;">
              <h2>Welcome to DDM</h2>
              <div class="accent-bar" style="margin-left: 0;"></div>
            </div>
            <p>
              At Darlington Dolphin Masters, we're more than just a swimming club &mdash; we're a community
              united by our love for the water and our passion for swimming.
            </p>
            <p>
              Whether you're a seasoned swimmer looking to improve your technique or a
              beginner eager to dive into the world of competitive swimming, our club offers a
              supportive and inclusive environment for swimmers of all ages and abilities.
            </p>
            <p>
              Join us and discover the joy of swimming in a welcoming community.
              Whether you're aiming for podium finishes or simply swimming for the sheer
              pleasure of it, you'll find a home among fellow aquatic enthusiasts who share
              your passion for the sport.
            </p>
            <NuxtLink to="/coaching" class="btn btn--teal" style="margin-top: 12px;">
              Meet Our Coaches
            </NuxtLink>
          </div>
          <div class="about-image">
            <img src="@/assets/Team_2.jpeg" alt="DDM Team Photo" />
          </div>
        </div>
      </div>
    </section>

    <!-- Why Join Section -->
    <section class="ddm-section ddm-section--gray">
      <div class="ddm-container">
        <div class="section-header">
          <h2>Why Swim With Us?</h2>
          <div class="accent-bar"></div>
        </div>
        <div class="feature-grid">
          <div class="ddm-card feature-item">
            <div class="feature-item__icon">
              <i class="fas fa-chalkboard-teacher"></i>
            </div>
            <h3>Expert Coaching</h3>
            <p>Qualified, enthusiastic coaching at every session.</p>
          </div>
          <div class="ddm-card feature-item">
            <div class="feature-item__icon">
              <i class="fas fa-heart"></i>
            </div>
            <h3>All Abilities</h3>
            <p>From complete beginners to national-level competitors, everyone is welcome.</p>
          </div>
          <div class="ddm-card feature-item">
            <div class="feature-item__icon">
              <i class="fas fa-trophy"></i>
            </div>
            <h3>Competition</h3>
            <p>Opportunities to compete at county, regional, national and masters championships.</p>
          </div>
          <div class="ddm-card feature-item">
            <div class="feature-item__icon">
              <i class="fas fa-dumbbell"></i>
            </div>
            <h3>Structured Training</h3>
            <p>Quality-focused sessions designed around technique, speed and endurance.</p>
          </div>
          <div class="ddm-card feature-item">
            <div class="feature-item__icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3>Swim England Insurance</h3>
            <p>Full membership includes Swim England affiliation and insurance cover.</p>
          </div>
          <div class="ddm-card feature-item">
            <div class="feature-item__icon">
              <i class="fas fa-glass-cheers"></i>
            </div>
            <h3>Social Events</h3>
            <p>A friendly club with a great social side beyond the pool.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="ddm-container cta-inner">
        <h2>Ready to Dive In?</h2>
        <p>New members are welcome to try a couple of sessions before joining. Come along and say hello!</p>
        <NuxtLink to="/contact" class="btn btn--primary">Get in Touch</NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-image: url('@/assets/Main_Pool_2.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(11, 29, 58, 0.92) 0%,
    rgba(11, 29, 58, 0.7) 50%,
    rgba(11, 29, 58, 0.4) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 24px 80px;
}

.hero-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 3.5rem;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 520px;
  line-height: 1.6;
  margin-bottom: 32px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* About Grid */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-text p {
  color: var(--text-muted);
  margin-bottom: 16px;
  font-size: 1.05rem;
  line-height: 1.7;
}

.about-image {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(11, 29, 58, 0.15);
}

.about-image img {
  width: 100%;
  display: block;
  object-fit: cover;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
  padding: 80px 0;
}

.cta-inner {
  text-align: center;
}

.cta-inner h2 {
  font-size: 2.2rem;
  color: #fff;
  margin-bottom: 16px;
}

.cta-inner p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.75);
  max-width: 500px;
  margin: 0 auto 28px;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .about-image {
    order: -1;
  }

  .section-header {
    text-align: center !important;
  }

  .accent-bar {
    margin-left: auto !important;
  }
}
</style>
