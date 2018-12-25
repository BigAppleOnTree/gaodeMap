<!--地图组件 -->
<template>
  <div id='container'></div>
</template>

<script>
import {MP} from '@/common/loadMap'

export default {
  data () {
    return {
      AMap: {},
      map: {}
    }
  },
  mounted () {
    this.loadMap()
  },
  methods: {
    alertLngLat () {
      document.getElementById('container').addEventListener('click', this.addd)
    },
    removeAlert () {
      document.getElementById('container').removeEventListener('click', this.addd)
    },
    addd (ev) {
      var y = document.getElementById('container').offsetTop
      var x = document.getElementById('container').offsetLeft
      var x1 = ev.clientX
      var y1 = ev.clientY
      console.log(y1 - y)
      console.log(x1 - x)
      var pixel = new this.AMap.Pixel(x1 - x, y1 - y)
      var lnglat = this.map.containerToLngLat(pixel)
      console.log(lnglat)
      alert(lnglat.lng + ',' + lnglat.lat)
    },
    loadMap () {
      MP('0b44e672b139ad5dc5ec3eb5ecfe3048').then(AMap => {
        this.AMap = AMap
        const map = new AMap.Map('container', {
          center: [116.405467, 39.907761],
          zoom: 9
        })
        map.plugin(['AMap.Scale'], function () {
          var scale = new AMap.Scale({
            position: 'RB'
          })
          map.addControl(scale)
        })
        map.plugin(['AMap.OverView'], function () {
          var overview = new AMap.OverView({isOpen: true})
          map.addControl(overview)
        })

        map.plugin(['AMap.Geolocation'], function () {
          var geolocation = new AMap.Geolocation()
          map.addControl(geolocation)
        })
        map.plugin(['AMap.MapType'], function () {
          var type = new AMap.MapType({
            defaultType: 0
          })
          map.addControl(type)
        })

        map.plugin(['AMap.ToolBar'], function () {
          var tool = new AMap.ToolBar()
          map.addControl(tool)
        })

        this.map = map
      })
    },
    destroyMap () {
      this.map.destroy()
    },
    addMark () {
      const marker = new this.AMap.Marker({
        icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
        position: [116.405467, 39.907761]
      })
      this.map.add(marker)
    },
    removeMarker () {
      const marker = new this.AMap.Marker({
        icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
        position: [116.405467, 39.907761]
      })
      this.map.remove(marker)
      this.map.clearMap()
    },
    addPolyline () {
      var path = [
        new this.AMap.LngLat(116.368904, 39.913423),
        new this.AMap.LngLat(116.382122, 39.901176),
        new this.AMap.LngLat(116.387271, 39.912501),
        new this.AMap.LngLat(116.398258, 39.904600)
      ]

      var polyline = new this.AMap.Polyline({
        path: path,
        borderWeight: 2,
        strokeColor: 'red',
        lineJoin: 'round'
      })

      this.map.add(polyline)
    },
    removePolyline () {
      var path = [
        new this.AMap.LngLat(116.368904, 39.913423),
        new this.AMap.LngLat(116.382122, 39.901176),
        new this.AMap.LngLat(116.387271, 39.912501),
        new this.AMap.LngLat(116.398258, 39.904600)
      ]

      var polyline = new this.AMap.Polyline({
        path: path,
        borderWeight: 2,
        strokeColor: 'red',
        lineJoin: 'round'
      })

      this.map.remove(polyline)
    },
    consoleLnglat () {
    }
  }
}
</script>
<style>
</style>
