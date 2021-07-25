<template>
<div style="margin-top: -15px">
        <mdb-container>
            <mdb-container>
                <section class="demo-section">
                    
                </section>
            </mdb-container>
        </mdb-container>
    </div>
</template>

<script>
import { mdbContainer } from 'mdbvue';

export default {
  name: 'FormsPage',
  components: {
    mdbContainer
    
  },
  data() {
    return {
      guests: 4
    };
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
