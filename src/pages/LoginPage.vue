<template>
  <q-page>
    <!-- content -->
    <div class="row">
      <div id="div-form" class="col-6 text-center">
        <q-img
          id="logo-prefeitura-form"
          alt="logo-prefeitura"
          src="../assets/Brasão_Vitoria_da_Conquista.svg"/>
        <p class="text-h5" style="font-weight: bolder;">EstagiHub</p>
        <q-form style="padding: 25px;" class="row q-gutter-y-sm q-mx-md"
          @submit="onSubmit"
          @reset="onReset"
          ref="myForm"
        >

          <!--Caixa de entrada para o email-->
          <p class="text-h6" style="margin-bottom: -5px;">Usuario</p>
          <q-input
            outlined
            label="Digite seu email"
            suffix="@gmail.com"
            :rules="[
              val => val.length > 0 || 'Campo obrigatório.'
            ]"
            class="col-xs-12
                  col-sm-12
                  col-md-12"
          >
            <template v-slot:prepend>
              <q-icon name="mail"/>
            </template>
          </q-input>
          <!--Fim da caixa de entrada do email-->

          <!--Caixa de entrada para o email-->
          <p class="text-h6" style="margin-bottom: -5px;">Senha</p>
          <q-input
            outlined
            label="Digite seu email"
            suffix="@gmail.com"
            :rules="[
              val => val.length > 0 || 'Campo obrigatório.'
            ]"
            class="col-xs-12
                  col-sm-12
                  col-md-12"
          >
            <template v-slot:prepend>
              <q-icon name="password"/>
            </template>
          </q-input>
          <!--Fim da caixa de entrada do email-->
          <q-btn
            class="col-12"
            style="margin-top: 30px;"
            color="primary"
            type="submit"
            label="Entrar"
          ></q-btn>

        </q-form>

      </div>
      <div id="div-img" class="col-6 text-center">
        <q-img
          alt="imagem-page"
          src="src\assets\report-analysis-monochromatic (1).svg"
          style="width: 100%; max-width: 600px;"
        />
        <q-img
          style="margin: 10px"
          width="60px"
          alt="logo-prefeitura"
          src="../assets/Brasão_Vitoria_da_Conquista.svg"/>
      </div>
    </div>
  </q-page>
</template>

<style>
#logo-prefeitura-form {
  width: 80px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.q-page {
  padding: 5px;
  background-color: rgb(233, 219, 247);
}

#div-form {
  background-color: white;
  border-radius: 5px;
}
</style>

<script setup>
</script>
