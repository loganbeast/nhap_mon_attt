<template>
  <div class='wrapper'>
        <h3 class="mb-4 text-center">Kiem tra ky RSA</h3>
        <div class="content">
            <div class="input">
                <label class="mb-1">Nhap x</label>
                <b-form-input v-model="x" type="number" placeholder="Nhap ban ro x" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap chu ky s</label>
                <b-form-input v-model="s" type="number" placeholder="Nhap chu ky s" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap khoa ky e</label>
                <b-form-input v-model="e" type="number" placeholder="Nhap khoa ky e" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap n</label>
                <b-form-input v-model="n" type="number" placeholder="Nhap n" class="mb-4"></b-form-input>
                <b-button variant="outline-secondary" class="mt-1" @click="reset">Reset</b-button>
            </div>
            <div class="answer"> 
                <div><strong>x = </strong> {{this.x || 'undefined'}}</div>
                <div><strong>Chu ky so s = </strong> {{this.s || 'undefined'}}</div>
                <div><strong>Khoa cong khai e = </strong> {{this.e || 'undefined'}}</div>
                <div><strong>Modulo khóa công khai n = </strong> {{this.n || 'undefined'}}</div>
                <hr>
                <strong>
                    Kiem tra qua trinh ky (x = s ^ e mod n):  <span class="text-danger">{{this.check === this.x}}</span>
                </strong>
                <hr>
                <div v-if="s && e && n">

                    <div><strong>s ^ e mod n = {{this.s}} ^ {{this.e}} mod {{this.n}} = <span class="text-danger">{{this.check}}</span> </strong></div>
                    <div v-if="check === x"><strong  class="text-danger"> Chu ky hop le</strong></div>
                    <div v-else><strong  class="text-danger"> Chu ky khong hop le</strong></div>
                </div>
            </div>
        </div>
  </div>
  
</template>

<script> 
import bigInt from 'big-integer';
export default {
    name: 'RSASignCheck',
    components: {

    },
    data () {
        return {
            x : '',
            e : '',
            n : '',
            s : ''
        }
    },
    methods: {
        reset: function () {
            this.x = ''
            this.e = ''
            this.n = ''
            this.s = ''
        }
    },
    computed: {
        check () {
            if (this.s && this.e && this.n) {
                return bigInt(this.s).modPow(this.e, this.n).toString()
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