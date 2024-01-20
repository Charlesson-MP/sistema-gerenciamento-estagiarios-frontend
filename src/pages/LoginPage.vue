<template>
  <q-page>
    <!-- content -->
    <div class="row" style="background: white;">
      <div id="formatDiv" class="col-xs-12 col-sm-12 col-md-6 text-center">
        <q-img
          alt="logo-prefeitura"
          src="../assets/Brasão_Vitoria_da_Conquista.svg"
          width="70px"
        />
        <p class="text-h4">EstagiHub</p>
        <q-form
          class="q-gutter-y-md"
        >
          <p class="text-h6">Usuário</p>
          <q-input
            outlined
            label="Digite seu email"
          ></q-input>

          <p class="text-h6">Senha</p>
          <q-input
            outlined
            label="Digite sua senha"
          ></q-input>

          <q-btn
            to="dashboards"
            color="primary"
            label="Entrar"
          ></q-btn>
        </q-form>
      </div>
      <div id="formatDiv" class="col-xs-12 col-sm-12 col-md-6 text-center">
        <q-img
          alt="Imagem"
          src="../assets/report-analysis-monochromatic (1).svg"
        ></q-img>
        <q-img
          alt="logo-prefeitura"
          src="../assets/Brasão_Vitoria_da_Conquista.svg"
          width="80px"
        ></q-img>
      </div>
    </div>
  </q-page>
</template>

<style scooped>
.q-page {
  background-color: rgb(210, 210, 226);
  padding: 5px;
}

.row {
  border-radius: 5px;
}

#formatDiv {
  padding: 15px 25px 20px 25px;
}

.text-h4 {
  padding-top: 50px;
  padding-bottom: 30px;
}

.text-h6 {
  text-align: start;
  margin-bottom: 5px;
}

.q-btn {
  width: 100%;
  margin-top: 30px;
}
</style>

<script setup>
</script>
