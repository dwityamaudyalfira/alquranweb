<template>
  <section class="semua" style="background-color: #E1BA9D;">
  <section class="page-section" id="team">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">CONTACT</h2>
        <h3 class="section-subheading">If you want to contact me, just let me know.</h3>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="team-member">
            <img class="mx-auto rounded-circle" src="/src/assets/1.jpg" alt="..." />
            <h4 class="media">WhatsApp</h4>
            <p class="tl">088742693594</p>
            <a class="btn btn-social mx-2" style="background-image: url('src/assets/wa.png');" href="https://wa.me/6288742693594"></a>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="team-member">
            <img class="mx-auto rounded-circle" src="/src/assets/2.png" alt="..." />
            <h4 class="media">Email</h4>
            <p class="tl">dwityamaudy@gmail.com</p>
            <a class="btn btn-social mx-2" style="background-image: url('src/assets/email.png');" href="mailto:dwityamaudy@gmail.com"></a>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="team-member">
            <img class="mx-auto rounded-circle" src="/src/assets/3.png" alt="..." />
            <h4 class="media">Instagram</h4>
            <p class="tl">@bentocake.athere</p>
            <a class="btn btn-social mx-2" style="background-image: url('src/assets/ig.png');" href="https://www.instagram.com/bentocake.athere/?igshid=YmMyMTA2M2Y="></a>
          </div>
        </div>
      </div>
    </div>
    <FooterView/>
  </section>
  </section>
</template>

<script>
import FooterView from "../views/FooterView.vue";
export default {
  components: { FooterView }
}

</script>

<style scoped>
.team-member {
  margin-bottom: 3rem;
  text-align: center;
}
.team-member img {
  width: 14rem;
  height: 14rem;
  border: 0.5rem solid rgba(0, 0, 0, 0.1);
}
.team-member h4, .team-member .h4 {
  margin-top: 1.5rem;
  margin-bottom: 0;
}

.page-section {
  background-size: cover;
  background-repeat: no-repeat;
}

.section-heading {
  padding-top: 50px;
  font-family: "Segoe UI";
  font-weight: bold;
  font-size: 40px;
  color: white;
}
.section-subheading {
  font-family: "Segoe UI";
  font-size: 25px;
  color: #DB825B;
  padding-bottom: 40px;
}
.tl {
  font-family: "Segoe UI";
  font-size: 18px;
  color: #DB825B;
}
.media{
  font-family: "Segoe UI";
  font-size: 25px;
  color: white;
}
.btn-social {
  height: 2.5rem;
  width: 2.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>