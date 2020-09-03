<template>
  <div id="footer">
    <div class="footer-info">
      <h3>
      <router-link to="/sitemap">
          Sitemap
        </router-link>
      </h3>

      <div class="contact-links">
        <a 
          href="https://github.com/YaninaTrekhleb" 
          target="_blank"
        >
          <img 
            src="../images/logo/github-logo-icon.png" 
            alt="github-logo" 
            class="footer-logo"
          >
        </a>
        <a 
          href="https://www.linkedin.com/in/yanina-trekhleb/" 
          target="_blank"
        >
          <img 
            src="../images/logo/linkedin-logo.png" 
            alt="linkedin-logo" 
            class="footer-logo"
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Footer'
}
</script>

<style>
  #footer {
    position: relative;
    bottom: 0;
    width: 100%;
    background-color: #afc3daab;
    height: 100px;
  }

  .footer-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
  }

  .footer-info h3 {
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    margin: 0;
    padding: 10px;
  }

  .contact-links a {
    margin-right: 10px;
  }

  .footer-logo {
    width: 30px;
  }

  /* iPhone version */
  @media (max-width: 767px) { 
    .footer-info h3 {
      font-size: 20px;
  }
}
</style>
