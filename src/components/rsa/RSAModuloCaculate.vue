<template>
  <div class="wrapper">
    <h3 class="mb-4 text-center"> Tinh toan y = x^ e mod n</h3>
    <div class="content">
        <div class="input">
            <label class="mb-1">Nhap x</label>
            <b-form-input v-model="x" type="number" placeholder="Input x" class="mb-4"></b-form-input>
            <label class="mb-1">Nhap e</label>
            <b-form-input v-model="e" type="number" placeholder="Input e" class="mb-4"></b-form-input>
            <label class="mb-1">Nhap n</label>
            <b-form-input v-model="n" type="number" placeholder="Input n" class="mb-4"></b-form-input>

            <b-button class="mt-2" variant="outline-secondary" @click="reset">Reset</b-button>
        </div>
        <div class="answer">
            <strong>y = x ^ e mod n = </strong> {{this.answer || 'undefined'}}
        </div>
    </div>
        
        
  </div>
  
</template>

<script> 
import bigInt from 'big-integer';
export default {
    name: 'RSAModuloCaculate',
    components: {

    },
    data () {
        return {
            x : '',
            y : '',
            n : '',
            e : ''
        }
    },
    methods: {
        reset: function () {
            this.x = ''
            this.y = ''
            this.n = ''
            this.e = ''
        }
    },
    computed: {
        answer () {
            if (this.x && this.e && this.n) {
                return bigInt(this.x).modPow(this.e, this.n).toString()
            } else {
                return undefined
            }
        }
    }
}
</script>

<style scoped>
.wrapper {
    margin: 60px;
}
.container {
    margin-top:20px;
    width: 90%;
}
.content {
    background-color: rgb(242, 242, 242);
    padding: 50px;
    display: flex;
    justify-content: space-between;
}
.input {
    width: 30%;
    margin-right: 30px;
}
.answer {
    width: 70%;
}
</style>