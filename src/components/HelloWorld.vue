<template>
  <div class="main">
    <canvas id="myCanvas" width="600" height="600"></canvas>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      drawPath:0, //绘制层级深度
      canvas:null,
      c:null,
    }
  },
  mounted(){
    let c=document.getElementById("myCanvas");
    this.c = c;
    this.canvas=c.getContext("2d");
    //绘制颜色
    this.canvas.fillStyle="#48e7ff";

    setInterval(()=>{
      this.drawPath++;
      this.clearCanvas();

      if (this.drawPath >= 6) {
        this.drawPath = 0;
      }
      //开始递归
      this.drawVicsek(0,0,c.width,c.height,0);
    },1500);
  },
  methods:{
    /**
     * 清空canvas
     */
    clearCanvas(){
      this.canvas.clearRect(0,0,this.c.width,this.c.height);
    },
    /**
     * 递归绘制正方形
     * @param x
     * @param y
     * @param width
     * @param height
     * @param path
     */
    drawVicsek(x,y,width,height,path){
      //到了最后一层了
      if (path === this.drawPath) {
        this.canvas.fillRect(x,y,width,height);
        return;
      }
      if (width<1 || height<1){
        //不能再递归了
        this.canvas.fillRect(x,y,1,1);
        return;
      }
      //递归绘制5个小正方形
      let pctWidth = width / 3;
      let pctHeight = height / 3;
      //上面的2个
      this.drawVicsek(x,y,pctWidth,pctHeight,path+1);
      this.drawVicsek(x + pctWidth*2,y,pctWidth,pctHeight,path+1);
      //中间的1个
      this.drawVicsek(x + pctWidth,y + pctHeight,pctWidth,pctHeight,path+1);
      //下面的2个
      this.drawVicsek(x,y + pctHeight*2,pctWidth,pctHeight,path+1);
      this.drawVicsek(x + pctWidth*2,y + pctHeight*2,pctWidth,pctHeight,path+1);
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
