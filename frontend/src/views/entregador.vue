<template>
  <Navegacao />
    <div class="signup-page">
      <div class="signup-form">
        <h1 class="page-title">Cadastre-se</h1>
        <form @submit.prevent="signUp">
          <div class="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              v-model="formData.email"
              placeholder="Digite seu email"
              required
            />
          </div>
          <div class="form-group">
            <label for="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              v-model="formData.nome"
              placeholder="Digite seu nome"
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
              placeholder="Digite seu CPF"
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
              placeholder="Digite seu numero de telefone"
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
              placeholder="Digite o tipo do veiculo"
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
              placeholder="Digite sua placa"
              required
            />
          </div>
          <button type="submit" class="submit-button">Registrar</button>
          <p class="signin-link"><a href="/loginEntregador">Já tem uma conta? </a></p>
        </form>
      </div>
    </div>
</template>

<script setup>
import Navegacao from '../components/navegacao.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const formData = ref({
  email: '',
  nome: '',
  cpf: '',
  telefone: '',
  veiculo: '',
  placa: '',
});

const router = useRouter();

const signUp = async () => {
  const response = await fetch('http://localhost:8000/entregadores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData.value),
  })
  
  if (!response.ok) {
    const responseData = await response.json();
    alert(`${responseData.detail}`);
    console.log("arroz")
  }
  else {
    alert(JSON.stringify(formData.value));
    router.push('/loginEntregador');
  }
};
</script>

<style scoped>
.signup-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.signup-form {
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  width: 300px;
}

.page-title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
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

input[type='text'], input[type='email'] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #ddd;
  background-color: #f0f0f0;
}

.submit-button {
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

.submit-button:hover {
  background-color: #0056b3;
}

.signin-link {
  text-align: center;
  margin-top: 10px;
}

.signin-link a {
  text-decoration: underline;
  cursor: pointer;
}
</style>