<template>
  <div class="modify-page">
      <div class="modify-form">
        <h1 class="page-title">Modifique seus dados</h1>
        <form @submit.prevent="modifying">
          <div class="form-group">
            <label for="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              v-model="formData.nome"
              :placeholder="entregador.nome"
              required
            />
          </div>
          <div class="form-group">
            <label for="cpf">CPF:</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              v-model="formData.cpf"
              :placeholder="entregador.cpf"
              required
            />
          </div>
          <div class="form-group">
            <label for="telefone">Telefone:</label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              v-model="formData.telefone"
              :placeholder="entregador.telefone"
              required
            />
          </div>
          <div class="form-group">
            <label for="veiculo">Veiculo:</label>
            <input
              type="text"
              id="veiculo"
              name="veiculo"
              v-model="formData.veiculo"
              :placeholder="entregador.veiculo"
              required
            />
          </div>
          <div class="form-group">
            <label for="placa">Placa:</label>
            <input
              type="text"
              id="placa"
              name="placa"
              v-model="formData.placa"
              :placeholder="entregador.placa"
              required
            />
          </div>
          <button type="submit" class="alterar-button" @click="alterar(entregador.email)">Alterar</button>
          <button type="submit" class="voltar-button" @click="voltar(entregador.email)">Voltar</button>
        </form>
      </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      entregador: {
        email: '',
        nome: '',
        cpf: '',
        telefone: '',
        veiculo: '',
        placa: '',
      },
    };
  },

  async mounted() {
  const router = useRouter();
  const email = this.$route.params.email; 

  if (email) {
    try {
      const response = await fetch(`http://localhost:8000/entregadores/${email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        this.entregador = data;
      } else {
        console.error('Erro ao tentar recuperar dados do entregador.');
      }
    } catch (error) {
      console.error('Erro na tentativa de recuperar dadoas do entregador:', error);
    }
  }
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.page-title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.login-form {
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  width: 300px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-size: 16px;
  display: block;
  margin-bottom: 5px;
  color: #555;
}

input[type='text'] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #ddd;
  background-color: #f0f0f0;
}

.alterar-button,
.voltar-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
}

.alterar-button:hover,
.voltar-button:hover {
  background-color: #0056b3;
}

</style>