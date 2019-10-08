<script>
import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins;

export default  {
  name: 'BarPledges',
  extends: Bar,
  mixins: [reactiveProp],
  mounted () {
    const options =  {
        title: {
            display: true,
            text: 'Annual CO2 Saved (Tonnes)'
        },
        legend: {
            display: true

        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    this.renderChart(this.chartData, options)
  }
}
</script>