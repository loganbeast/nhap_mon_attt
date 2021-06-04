<template>
  <div class='wrapper'>
        <h3 class="mb-4 text-center">Ma hoa he mat Elgamal</h3>
        <div class="content">
            <div class="input">
                <label class="mb-1">Nhap he so a</label>
                <b-form-input v-model="a" type="number" placeholder="Nhap he so a" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap he so b</label>
                <b-form-input v-model="b" type="number" placeholder="Nhap he so b" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap p</label>
                <b-form-input v-model="p" type="number" placeholder="Nhap p" class="mb-4"></b-form-input>

                <b-button variant="outline-secondary" class="m-1" @click="reset">Reset</b-button>
                <b-button variant="outline-secondary" class="m-1" @click="generatorBigPrime">Generator 192 bits Prime</b-button>
                
                <label class="mb-1">Nhap toa do Px</label>
                <b-form-input v-model="Px" type="number" placeholder="Nhap toa do Px" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap toa do Py</label>
                <b-form-input v-model="Py" type="number" placeholder="Nhap toa do Py" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap toa do Qx</label>
                <b-form-input v-model="Qx" type="number" placeholder="Nhap toa do Qx" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap toa do Qy</label>
                <b-form-input v-model="Qy" type="number" placeholder="Nhap toa do Qy" class="mb-4"></b-form-input>
                <label class="mb-1">Nhap he so n</label>
                <b-form-input v-model="n" type="number" placeholder="Nhap he so n" class="mb-4"></b-form-input>

                <b-button variant="outline-secondary" class="m-1" @click="plus">P + Q</b-button>
                <b-button variant="outline-secondary" class="m-1" @click="multiply">P * n</b-button>



            </div>
            <div class="answer">
                <h4>Voi p = {{this.p || undefined}}</h4>    
                <h4>Ta co duong cong Elliptic : y^2 = x ^3 + {{this.a || undefined}}x + {{this.b || undefined}} mod {{this.p || undefined}}</h4>
                <div><h3>Ta co các điểm trên Z<span style="font-size:15px">{{this.p}}</span>({{this.a}},{{this.b}}) là điểm vô cực O và các điểm sau</h3></div>
                <div class="list_point">
                    <div>
                        <ul>
                            <li v-for="(point, index) in point_first" :key="index">{{point.toString()}}</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li v-for="(point, index) in point_last" :key="index">{{point.toString()}}</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p>Ket qua cua phep tinh tren duong cong Elliptic la:</p>
                    <h3>{{result}}</h3>
                </div>
                <div v-if="scatterChartVue">
                    <VueApexCharts
                        :options='scatterChartVue.options'
                        :series='scatterChartVue.series'
                        type='scatter'
                        height='300'
                        width='80%'
                    />
                </div>
            </div>
        </div>
  </div>
  
</template>

<script> 
// import bigInt from 'big-integer';
import VueApexCharts from 'vue-apexcharts'
import curve from '../../helpers/eliptic_func';
export default {
    name: 'Elliptic',
    components: {
        VueApexCharts
    },
    data () {
        return {
            a : '',
            b : '',
            p : '24',
            Px: '',
            Py: '',
            Qx: '',
            Qy: '',
            n: '',
            result: ''
        }
    },
    methods: {
        plus: function() {
            if (!(this.Px && this.Py && this.Qx && this.Qy)) {
                this.result = 'Moi nhap toa do cua P va Q';
                return;
            }
            let P = this.c.getPoint(parseInt(this.Px), parseInt(this.Py));
            let Q = this.c.getPoint(parseInt(this.Qx), parseInt(this.Qy));
            if (typeof P === 'undefined') {
                this.result = 'P khong thuoc tren duong Elliptic';
                return;
            }
            if (typeof Q === 'undefined') {
                this.result = 'P khong thuoc tren duong Elliptic';
                return;
            }
            this.result = (`P(${this.Px},${this.Py}) + Q(${this.Qx},${this.Qy}) = ${P.plus(Q).toString()}`);
        },
        multiply: function () {
            if (!(this.Px && this.Py && this.n)) {
                this.result = 'Moi nhap toa do P và n';
                return;
            }
            let P = this.c.getPoint(parseInt(this.Px), parseInt(this.Py));

            if (typeof P === 'undefined') {
                this.result = 'P khong thuoc tren duong Elliptic';
                return;
            }

            if (this.n <= 0) {
                this.result = `${this.n}P(${this.Px},${this.Py}) = (0,0)`;
                return;
            }

            let generate = P.generate();
            let _result = generate[(this.n % generate.length) - 1];

            this.result = (`${this.n}P(${this.Px},${this.Py}) = ${_result?.toString()}`);
        },
        reset: function () {
            this.a = ''
            this.b = ''
            this.p = ''
        },
        generatorBigPrime: function () {
            const random = Math.floor(Math.random() * 5);
            switch(random) {
                case 0:
                    this.p = '5366492696906031130093572983196379294139374625738379401069'
                    break;
                case 1:
                    this.p = '6215936913605732042828303995381585686526668298153624621279'                    
                    break;
                case 2:
                    this.p = '3481360111374429088025312563868629822476959023271902162726'
                    break;
                case 3:
                    this.p = '4837859907334686533458412703819276984912213512828078262806'
                    break;
                case 4:
                    this.p = '4036743563181213173579139173150260108811616963164541971387'
                    break;
                default:
            }
        }
    },
    computed: {
        points () {
            if (this.a && this.b && this.p) {
                return curve(this.a, this.b, this.p).getPoints().slice(1)
            } else return undefined
        },
        c () {
            if (this.a && this.b && this.p) {
                return curve(this.a, this.b, this.p)
            } else return undefined
        },
        point_first () {
            if (this.points) {
                return this.points.slice(0, this.points.length / 2)
            } else return undefined
        },
        point_last () {
            if (this.points) {
                return this.points.slice(this.points.length / 2 + 1)
            } else return undefined
        },
        scatterChartVue() {
            if (this.points) {
                return {
                    series: [
                        {
                        name: 'Points',
                        data: this.points.map((p) => [p.x, p.y]),
                        },
                    ],
                    options: {
                        chart: {
                            height: 200,
                        },
                    }
                }
            } else return null
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
.list_point {
    display: flex;
    flex-wrap: wrap;
}
</style>