<template>
<div style="margin-top: -15px">
    <mdb-edge-header color="teal darken-2">
      <div class="category-page-background"></div>
    </mdb-edge-header>
    <mdb-container class="free-bird">
      <mdb-row>
        <mdb-col md="8" class="mx-auto">
          <mdb-jumbotron class="pt-4">
            <section>
                <mdb-row>
                    <mdb-col>
                    <form>
                        <p class="h4 text-center mb-4">Sign in</p>
                        <div class="grey-text">
                        <mdb-input label="Your email" icon="envelope" type="email"/>
                        <mdb-input label="Your password" icon="lock" type="password"/>
                        </div>
                        <div class="text-center">
                        <mdb-btn @click='login()'>Login</mdb-btn>
                        </div>
                    </form>
                    </mdb-col>
                </mdb-row>
            </section>
          </mdb-jumbotron>
        </mdb-col>
      </mdb-row>
    </mdb-container>
        <mdb-container>
            <mdb-container>
                <section class="demo-section">
                    
                </section>
            </mdb-container>
        </mdb-container>
    </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbInput, mdbBtn, mdbJumbotron, mdbEdgeHeader } from 'mdbvue';

export default {
  name: 'FormsPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbInput,
    mdbBtn,
    mdbJumbotron,
    mdbEdgeHeader
  },
  data() {
    return {
      showModal: false,
      guests: 4
    };
  },
  methods: {
      login() {
        this.$store.commit('login')
        this.$router.push({name: 'Home'})
      }
  }
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

.category-page-background {
  width: 100%;
  height: 100%;
  opacity: 0.1;
  background: url('https://mdbootstrap.com/wp-content/uploads/2016/11/mdb-pro-min-1.jpg') center;
  background-size: cover;
}

.example-components-list {
  padding-top: 20px;
}

.example-components-list li {
  padding: 10px;
  background-color: white;
  border-bottom: 1px solid #f7f7f7;
  transition: .3s;
}

.example-components-list h6 {
  padding: 20px 10px 5px 10px;
  color: grey;
}

.example-components-list li:hover {
  background-color: #fafafa;
}

.example-components-list i {
  float: right;
  padding-top: 3px;
}

.nav-link.navbar-link h5 {
  color: #212529;
}
</style>
