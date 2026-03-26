<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-brand">
            <img src="@/assets/logo.png" alt="DDM Logo" class="footer-logo" />
            <span>Darlington Dolphin Masters ASC</span>
          </div>
          <p class="footer-tagline">
            Adult swimming for every level. Fitness, friendship and competition in Darlington since day one.
          </p>
        </div>

        <div class="footer-col">
          <h4>Quick Links</h4>
          <nav class="footer-links">
            <NuxtLink to="/">About</NuxtLink>
            <NuxtLink to="/coaching">Coaches</NuxtLink>
            <NuxtLink to="/training">Sessions</NuxtLink>
            <NuxtLink to="/membership">Membership</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </nav>
        </div>

        <div class="footer-col">
          <h4>Sessions</h4>
          <div class="footer-sessions">
            <p><strong>Mon</strong> 7:30 - 8:30pm</p>
            <p><strong>Wed</strong> 6:30 - 7:30am</p>
            <p><strong>Thu</strong> 7:30 - 8:30pm</p>
          </div>
          <p class="footer-location">
            <i class="fas fa-map-marker-alt"></i> Dolphin Centre, Darlington
          </p>
        </div>

        <div class="footer-col">
          <h4>Connect</h4>
          <div class="footer-social">
            <a href="https://www.facebook.com/groups/1674660229229616/" target="_blank" rel="noopener" aria-label="Facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/darlington_dolphin_masters_asc" target="_blank" rel="noopener" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
          <a href="mailto:ddmasc.secretary@gmail.com" class="footer-email">
            <i class="fas fa-envelope"></i> ddmasc.secretary@gmail.com
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Darlington Dolphin Masters ASC. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--navy, #0B1D3A);
  color: rgba(255, 255, 255, 0.8);
  padding: 64px 0 0;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 40px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 16px;
}

.footer-logo {
  width: 36px;
  filter: brightness(0) invert(1);
}

.footer-tagline {
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.7;
}

.footer-col h4 {
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links a {
  font-size: 0.9rem;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.footer-links a:hover {
  opacity: 1;
  color: var(--teal, #0AADAD);
}

.footer-sessions p {
  font-size: 0.9rem;
  margin-bottom: 6px;
  opacity: 0.8;
}

.footer-sessions strong {
  color: #fff;
  min-width: 40px;
  display: inline-block;
}

.footer-location {
  margin-top: 12px;
  font-size: 0.85rem;
  opacity: 0.6;
}

.footer-location i {
  color: var(--teal, #0AADAD);
  margin-right: 6px;
}

.footer-social {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.footer-social a {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: #fff;
  transition: all 0.2s ease;
}

.footer-social a:hover {
  background: var(--teal, #0AADAD);
  transform: translateY(-2px);
}

.footer-email {
  font-size: 0.85rem;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.footer-email:hover {
  opacity: 1;
  color: var(--teal, #0AADAD);
}

.footer-email i {
  margin-right: 6px;
}

.footer-bottom {
  margin-top: 48px;
  padding: 24px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: 0.8rem;
  opacity: 0.5;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
