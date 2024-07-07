<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <div v-cloak>Yükleniyor...</div>
    <div v-once> v-once örnek {{ count }}</div>
    <p>Count parameter is {{count}}</p>
    <button type="button" v-on:click="count++">Button Increment 1</button>
    <button type="button" @click="incrementDouble">Button Increment 2</button>
    <input type="text" v-model="count" />
    <p> Change <input type="text" v-on:change="myAlert" /></p>
    <br/>
    <p>Bind Example <input type="text" :value="count" /></p>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <br/>
    <p>If Show Farkı</p>
    <br/>
    <p>
      <button v-on:click="toggleTextBox">Show</button>
      <p v-if="showTextBoxItem"> v-if örneği</p><p v-else> v-else örneği</p>
      <br />
      <p v-show="showTextBoxItem"> v-show örneği</p>
    </p>
    <div>
      v-for örneği
      <div>
        <button v-on:click="addItemToArray"> Ekleme Yap</button>
        <p v-for="item in items" :key="item">{{ item }}</p>
      </div>
    </div>
  </div>

  <div>Reactive örneği
    <br/>
    <p>{{customer.name}}</p>
    <input v-model="customer.name">
  </div>

  <div> Computed örneği
  Fiyat : <input v-model="fiyat">
    <br/>
    Vergi Yüzdesi <input v-model="vergi">
    <br />
  <p>Vergi hesapla {{vergiHesapla}}</p>
  </div>

  <input type="text" v-model="CustomerMesaj" />
  <div>Component Örneği
  <Customer :mesaj="CustomerMesaj" />
  </div>

  <div>
    <p>TCKN Örneği</p>
    <input type="text" v-model="tckn" />
    <p v-if="!tcknValid">TCKN Değeri Valid değil</p>
    <p v-else>TCKN Değeri Valid</p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<script setup>
import Customer from "./Customer.vue";
import { ref,reactive, onMounted, computed, watch } from 'vue'

defineProps({
  msg: String,
})

onMounted(() =>{

})

const  customerBuilder = {
  name : "Cem",
  surname:"Yaras",
  age: 33
}

const tckn = ref('')
const tcknValid = computed(() =>{
  return tckn.value.length == 11;
})



const fiyat = ref(0)
const vergi = ref(0)
const  vergiHesapla = computed(() => {
  // async çalışmaz
  return fiyat.value * vergi.value;
})

const CustomerMesaj = ref('')

watch(fiyat,(newValue, oldValue) =>{
  setTimeout(2000)
  if (newValue < 0){
    console.error("Adam gibi değer girsene piç")
  }
  else{
    console.log("canımsın")
  }
})

const  customer = ref(customerBuilder);

const count = ref(0)
const showTextBoxItem = ref(true)
const items = ref([1,2,3])

const incrementDouble = () => {
  count.value +=2;
}

const  myAlert = () =>{
  alert('value changed');
}

const addItemToArray = () => {
  items.value.push(999)
}



const toggleTextBox = () =>{
  showTextBoxItem.value = !showTextBoxItem.value;
}

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
