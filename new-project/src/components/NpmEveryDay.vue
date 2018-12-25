<!-- 7.31 -->
<template>
  <div>{{date}}
    <button @click="back">返回</button>
    <button @click="destroy">销毁</button>
    <button @click="addMarker">添加标记</button>
    <button @click="removeMarker">移除标记</button>
    <button @click="addPolyline">添加折线</button>
    <button @click="removePolyline">移除折线</button>
    <button @click='alertLngLat'>显示经纬度</button>
    <button @click='removeAlert'>移除显示</button>
    <good-map  id="container" ref='amaps'></good-map>
  </div>
</template>

<script>
import GoodMap from '@/components/AMap'

export default {
  name: 'SearchSelect',
  data () {
    return {
      date: ''
    }
  },
  created () {
    this.getDate()
  },
  mounted () {
    console.log(document.getElementById('container').offsetTop)
    this.$refs.amaps.loadMap()
  },
  methods: {
    alertLngLat () {
      this.$refs.amaps.alertLngLat()
    },
    removeAlert () {
      this.$refs.amaps.removeAlert()
    },
    getDate () {
      const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      const data = new Date()
      const year = data.getFullYear()
      const month = data.getMonth() + 1
      const day = data.getDate()
      const week = data.getDay()
      this.date = year + '年' + month + '月' + day + '日' + weeks[week]
    },
    back () {
      this.$router.back()
    },
    destroy () {
      this.$refs.amaps.destroyMap()
    },
    addMarker () {
      this.$refs.amaps.addMark()
    },
    removeMarker () {
      this.$refs.amaps.removeMarker()
    },
    addPolyline () {
      this.$refs.amaps.addPolyline()
    },
    removePolyline () {
      this.$refs.amaps.removePolyline()
    }
  },
  components: {
    GoodMap
  }
}

</script>
<style>
 #container {
   width: 100%;
   height: 600px;
   margin: 0 auto;
 }
</style>
