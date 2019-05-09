<template>
  <div class="main">
    <canvas id="myCanvas" width="600" height="600"></canvas>
  </div>
</template>

<script>
export default {
  name: 'Tree',
  data () {
    return {
      drawPath:0, //绘制层级深度
      canvas:null,
      c:null,
      path:6, //绘制结束深度
      angle:60,//分叉的 V 形角度
    }
  },
  mounted(){
    let c=document.getElementById("myCanvas");
    this.c = c;
    this.canvas=c.getContext("2d");

    setInterval(()=>{
      this.drawPath++;
      this.clearCanvas();

      if (this.drawPath >= 5) {
        this.drawPath = 0;
      }
      //开始递归
      this.drawTree(c.width/2,c.height,c.height/2,0,0);
    },1500);

  },
  methods:{
    /**
     * 清空canvas
     */
    clearCanvas(){
      this.c.height=this.c.height;
    },
    /**
     * 递归绘制树
     * @param x1
     * @param y1
     * @param side
     * @param angle
     * @param path
     */
    drawTree(x1,y1,side,angle,path){
      this.canvas.strokeStyle="#00ff00";

      //边长限制
      if(side <= 0){
        return;
      }
      if(path === this.drawPath){
        let x2 = x1 - side * 2 * Math.sin(angle*Math.PI/180.0);
        let y2 = y1 - side * 2 * Math.cos(angle*Math.PI/180.0);
        //绘制线
        this.drawLine(x1,y1,x2,y2);
        return;
      }
      let x2 = x1 - side * Math.sin(angle*Math.PI/180.0);
      let y2 = y1 - side * Math.cos(angle*Math.PI/180.0);
      this.drawLine(x1,y1,x2,y2);

      this.drawTree(x2, y2, side/2, angle+this.angle/2, path+1);

      this.drawTree(x2, y2, side/2, angle-this.angle/2, path+1);

    },
    /**
     * 绘制一条线
     */
    drawLine(x1,y1,x2,y2){
      this.canvas.moveTo(x1,y1);
      this.canvas.lineTo(x2,y2);
      this.canvas.stroke();
    }
  }
}
</script>

<style scoped>
  .main{
    width: 100%;
    height: 100%;
  }
</style>
