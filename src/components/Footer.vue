<template>
  <div id="footer">
    <h3>
     <router-link to="/sitemap">
        Sitemap
      </router-link>
    </h3>

    <div class="contact-links">
      <a href="https://github.com/YaninaTrekhleb" target="_blank">
        <img src="../images/logo/github-logo-icon.png" alt="github-logo" width="30">
      </a>
      <a href="https://www.linkedin.com/in/yanina-trekhleb/" target="_blank">
        <img src="../images/logo/linkedin-logo.png" alt="linkedin-logo" width="30">
      </a>
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
    background-color: #b7cdcc98;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }

  h3 {
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    padding-bottom: 10px;
  }

  .contact-link img {
  }
</style>
