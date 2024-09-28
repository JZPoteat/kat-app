<template>
  <v-container>
    <v-row justify="center" class="my-5">
      <h1 class="text-h4 about-header">About</h1>
      <v-col cols="12">
        <v-card>
          <v-card-title> </v-card-title>
          <v-card-text>
            <p>
              Hi, I'm Kathleen, and I'm so glad you're here!<br />
              My passion for painting and crafting began with my mom, Jutta. Growing up, she crafted
              with us all the time. We made so many special memories while working on different
              projects together. <br />
            </p>
            <img
              src="../stores/photos/about/Jutta.jpg"
              alt="Jutta"
              class="my-4 about-image"
              max-width="600"
              contain
            />
            <p>
              As a child we would visit Opa, my grandfather, in Germany. Opa was a painter whose
              murals still live in the community he loved so much. I remember driving around
              neighboring villages in Germany and everyone recognizing Opa, as he never knew a
              stranger.
            </p>
            <p>
              While Jutta and Opa are no longer with us, their love for art, for life, lives on in
              everything I do. I like to hope that every piece I create carries a memory of them, a
              piece of who they were and who they helped me become. It's more than just creating;
              it's honoring them, keeping them close with every piece I create.
            </p>
            <p>
              Everything I craft is made with clean, homemade ingredients, because for me, it's
              important that what I make is as pure as the memories that inspire it. My hope is
              that, through my work, you feel the love, the care, the joy that was passed down to
              me.
            </p>
            <p>
              Thank you, from the bottom of my heart, for being part of this journey. It means the
              world to me that you're here, and I hope you find something that resonates with you,
              just as these memories and moments do for me.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
p {
  text-align: left;
  margin-bottom: 10px;
}
.about-image {
  width: 40%;
}

.about-header {
  color: #8f9779; /* Earthy brown tone */
  border-bottom: 1px solid #a0522d; /* Earthy sienna border */
  padding-bottom: 10px; /* Space between text and border */
  font-family: 'Georgia', serif;
  font-weight: bold;
  margin-left: 15px;
  margin-right: auto;
}

.text-h4 {
  font-family: 'Georgia', serif;
  font-weight: 700;
}
.v-img {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.v-card {
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
