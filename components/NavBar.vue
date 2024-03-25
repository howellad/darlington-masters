<template>
    <nav>
        <ul>
            <li><nuxt-link class="nav-links" to="/">Home</nuxt-link></li>
            <li><nuxt-link class="nav-links" to="/coachinfo">Coaching</nuxt-link></li>
            <li><nuxt-link class="nav-links" to="/training">Training</nuxt-link></li>
            <li><nuxt-link class="nav-links" to="/membership">Membership</nuxt-link></li>
            <li><nuxt-link class="nav-links" to="/aboutus">About Us</nuxt-link></li>
            <li><nuxt-link class="nav-links" to="/contact">Contact Us</nuxt-link></li>
            <!-- Add more navigation links as needed -->
        </ul>
    </nav>
</template>
<style scoped>
nav {
  background-color: #46B5EF;
  width: 100%;
  padding-top: 10px; 
  padding-bottom: 10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

li {
  display: inline-block;
  margin-right: 20px;
}

.nav-links {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
}

.nav-links:hover {
  color: grey;
}
</style>
