<template>
  <div class='wrapper'>
        <h3 class="mb-4 text-center">Kiem tra ky Elgamal</h3>
        <div class="content">
            <div class="input">
                <label class="mb-1">Nhap x</label>
                <b-form-input v-model="x" type="number" placeholder="Nhap ban ro x" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap p</label>
                <b-form-input v-model="p" type="number" placeholder="Nhap p" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap alpha</label>
                <b-form-input v-model="alpha" type="number" placeholder="Nhap alpha" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap beta</label>
                <b-form-input v-model="beta" type="number" placeholder="Nhap beta" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap s1</label>
                <b-form-input v-model="s1" type="number" placeholder="Nhap s1" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap s2</label>
                <b-form-input v-model="s2" type="number" placeholder="Nhap s2" class="mb-4"></b-form-input>
                
                <b-button variant="outline-secondary" @click="reset" class="mt-1">Reset</b-button>
            </div>
            <div class="answer">
                <div>
                    <div>
                        <strong>A = (beta ^ s1) * (s1 ^ s2) mod p = </strong> ({{this.beta}} ^ {{this.s1}}) * ({{this.s1}}, {{this.s2}}) modulo {{this.p}} = {{this.VT}}
                    </div>
                    <div>
                        <strong>B = alpha ^ x mod p = </strong>{{this.alpha}} ^ {{this.x}} modulo {{this.p}} = {{this.VP}}
                    </div>
                </div>
                <div>
                    <strong>Kiem tra A = B => (beta ^ s1) * (s1 ^ s2) mod p = alpha ^ x mod p ? =></strong>
                    <strong v-if="check" class="text-danger">Chữ ký hợp lệ</strong>
                    <strong v-else class="text-danger">Chữ ký không hợp lệ</strong>
                </div>
            </div>
        </div>
  </div>
  
</template>

<script> 
import bigInt from 'big-integer';
export default {
    name: 'ElgamalSignCheck',
    components: {
    },
    data () {
        return {
            x : '',
            p : '',
            alpha : '',
            beta: '',
            s1 : '',   
            s2 : '',   
        }
    },
    methods: {
        reset: function () {
            this.x = ''
            this.p = ''
            this.alpha = ''
            this.beta = ''
            this.s1 = ''
            this.s2 = ''
        }
    },
    computed: {
        VT () {
            if (this.beta && this.p && this.s1 && this.s2) {
                return bigInt(this.beta).modPow(this.s1, this.p).multiply(bigInt(this.s1).modPow(this.s2, this.p)).mod(this.p).toString()
            } else return undefined
        },
        VP () {
            if (this.alpha && this.p && this.x) {
                return bigInt(this.alpha).modPow(this.x, this.p).toString()
            } else return undefined
        },
        check () {
            if (this.VT && this.VP) {
                return this.VP === this.VT
            } else return undefined
        },
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
}
.input {
    width: 30%;
    margin-right: 30px;
}
.answer {
    width: 70%;
}
</style>