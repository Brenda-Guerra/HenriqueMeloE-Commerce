<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const toCart = () => {
  router.push('/cart');
};

const toHome = () => {
  router.push('/');
};

const toEntregador = () => {
  router.push('/entregador');
};

const toEntregas = () => {
  router.push('/entregas');
};

const toLoja = () => {
  router.push('/lojas');
};
const toParcerias = () => {
  router.push('/loginadm');
};
const toReview = () => {
  router.push('/review')
};
</script>


<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    

}

body {
  min-height: 10vh;
  max-width: 100%;
  max-height: 100%; 
  background: url('../components/imagens/cool-background.png');
  
  

}

/*.header{
    width: 100%;
    height: 60px;
    background-color: #000;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.3);
}ideia da lenda GITHUB copilot*/

.header{
  height: 60px;
  position: sticky; /* fixa o elemento no topo da página, teste no scroll */
  top: 0;
  left: 0; 
  width: 100%; /* 100% da horizontal */
  display: flex; 
  color: #000000; /* cor do texto que foi inutilizada inclusive, tô definindo na navbar*/
  justify-content: space-between; /* espaço entre os elementos */
  align-items: center;
  background-color: transparent;
  padding: 20px 100px;
  z-index: 321312312; /* z-index é meio que a prioridade desse testo */
}

.logo{
  font-size: 20px;
  color: #000000;
  font-size: 32px;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.6s ease;
}


.logo:hover{
  font-size: 33px;
}

.navbar a{
  position: relative;
  color: #000000;
  text-decoration: none;
  font-size: 26.5px;
  font-weight: 500;
  margin-left: 30px;
  transition: all 0.3s ease;
}

.navbar button{
  position: relative;
  color: #000000;
  text-decoration: none;
  font-size: 26.5px;
  font-weight: 500;
  margin-left: 30px;
  transition: all 0.3s ease;
}


.navbar a::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 1px;
  background: rgb(7, 7, 7);
  transition: all 0.3s ease;
}

.navbar button::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 1px;
  background: rgb(7, 7, 7);
  transition: all 0.3s ease;
}

.navbar a:hover::before{
  width: 100%;
}

.navbar button:hover::before{
  width: 100%;
}




</style>



<template>
  <body>
    <header class="header">
    
    <button @click="toHome" type="button" class="logo">Henrique Melo E-commerce </button>
    
    <nav class="navbar">
        <button @click="toParcerias" type="button">Administração </button>
        <button @click="toCart" type="button">Carrinho </button>
        <button @click="toReview" type="button">Reviews</button>
        <button @click="toEntregador" type="button">Entregador</button>
        <button @click="toEntregas" type="button">Entrega</button>
        <button @click="toLoja" type="button">Loja </button>
    </nav>

  </header>
    
  </body>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;

}

body {
  min-height: 10vh;
  max-width: 100%;
  max-height: 100%; 
  background: url('../components/imagens/cool-background.png');
  
  

}
*{
    margin: 0px 30px;
    padding: 0;
    font-family: 'ZZYZX', sans-serif;
    box-sizing: border-box;

}
@font-face {
    font-family: ZZYZX;
    src: url(../components/fonts/ZZYZX.TTF);
}
</style>