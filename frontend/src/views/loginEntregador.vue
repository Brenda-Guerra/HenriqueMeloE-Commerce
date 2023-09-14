<template>
  <Navegacao/>
  <div class="login-page">
    <div class="login-form">
      <h1 class="page-title">Login</h1>
      <form @submit.prevent="login">
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
        <button type="submit" class="submit-button">Entrar</button>
        <p class="signup-link"><a href="/entregador">Ainda não tem uma conta?</a></p>
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
});

const router = useRouter();
const login = async () => {
const email = formData.value.email;

const response = await fetch(`http://localhost:8000/entregadores/${email}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
});

if (!response.ok) {
  const responseData = await response.json();
  alert(`${responseData.detail}`);
}
else {
  const entregadorData = await response.json();
  alert(JSON.stringify(entregadorData));
  router.push({ name: 'paginaEntregador', params: { email } });
}
};

</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login-form {
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

input[type='email'] {
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

.signup-link {
  text-align: center;
  margin-top: 10px;
}

.signup-link a {
  text-decoration: underline;
  cursor: pointer;
}
</style>