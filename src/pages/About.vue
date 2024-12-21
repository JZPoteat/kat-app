<template>
  <v-container>
    <v-row justify="center" class="my-5">
      <h1 class="text-h4 about-header">About</h1>
      <v-col cols="12">
        <v-card>
          <v-card-title> </v-card-title>
          <v-card-text>
            <div class="img-box">
              <img
                src="../stores/photos/about/pfp.png"
                alt="Front Pic"
                class="my-4 about-image"
                contain
              />
              <div class="img-text">
                <h2 class="img-text-header">Hello and Welcome!</h2>
                <p>
                  Hello! Thank you for stopping by and checking out my content. My name is Kathleen,
                  and I am the owner of My Little Mouse Creative.<br /><br />
                  Currently, I am running this business out of my home in the Greater Charlotte
                  area. On any given day, I might be crafting handmade jewelry, painting with
                  watercolors, or diving into whatever creative project inspires me. <br /><br />

                  If you don't see what you're looking for, chances are I've either created
                  something similar before or would love to give it a shot—so don't hesitate to ask!
                  <br /><br />
                </p>
                <p>
                  Thank you, from the bottom of my heart, for being part of this journey. It means
                  the world to me that you're here, and I hope you find something that resonates
                  with you, just as these memories and moments do for me.
                </p>
              </div>
            </div>
            <div class="img-box">
              <img
                src="../stores/photos/about/Jutta.jpg"
                alt="Jutta"
                class="my-4 about-image"
                id="jutta-img"
                max-width="600"
                contain
              />
              <div class="img-text" id="jutta-text-box">
                <h2 class="img-text-header">Our Story</h2>
                <p>
                  My passion for painting and crafting began with my mom, Jutta. Growing up, she
                  crafted with us all the time. We made so many special memories while working on
                  different projects together. <br /><br />
                </p>
                <p>
                  As a child we would visit Opa, my grandfather, in Germany. Opa was a painter whose
                  murals still live in the community he loved so much. I remember driving around
                  neighboring villages in Germany and everyone recognizing Opa, as he never knew a
                  stranger.
                </p>
              </div>
            </div>
            <div class="img-box">
              <img
                src="../stores/photos/about/stunz89windsbach.jpg"
                alt="stunz89 windsbach"
                class="my-4 about-image"
                id="stunz-img"
                contain
              />
              <div class="img-text">
                <h2 class="img-text-header">Our Legacy</h2>
                <p>
                  While Jutta and Opa are no longer with us, their love for art, for life, lives on
                  in everything I do. I like to hope that every piece I create carries a memory of
                  them, a piece of who they were and who they helped me become. It's more than just
                  creating; it's honoring them, keeping them close with every piece I create.
                </p>
              </div>
            </div>
            <div class="img-box">
              <img
                src="../stores/photos/artwork/red_flower.jpg"
                alt="red flower painting"
                class="my-4 about-image"
                id="red-flower"
                contain
              />
              <div class="img-text">
                <h2 class="img-text-header">Our Products</h2>
                <p>
                  Everything I craft is made with clean, homemade ingredients, because for me, it's
                  important that what I make is as pure as the memories that inspire it. My hope is
                  that, through my work, you feel the love, the care, the joy that was passed down
                  to me.
                </p>
              </div>
            </div>
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
  margin-left: auto;
  margin-right: auto;
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

.img-box {
  display: flex;
  flex-direction: column;
}

.img-text {
  margin-left: 20px;
}

.img-text-header {
  margin-bottom: 15px;
  color: #8f9779;
}

@media (min-width: 768px) {
  .img-box {
    flex-direction: row;
  }

  .about-image {
    margin-left: 0px;
    margin-right: 0px;
  }

  #jutta-img,
  #red-flower {
    order: 2;
  }

  #jutta-text-box {
    order: 1;
  }
}
</style>
