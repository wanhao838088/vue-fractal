<template>
    <div class="main">
      <canvas id="myCanvas" width="600" height="600"></canvas>
    </div>
</template>

<script>
  /**
   * Sierpinski
   */
  export default {
    name: "Sierpinski",
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
        this.drawSierpinski(0,0,c.width,c.height,0);
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
      drawSierpinski(x,y,width,height,path){
        //递归绘制5个小正方形
        let pctWidth = width / 3;
        let pctHeight = height / 3;

        if (path === this.drawPath) {
          //到了最后一层了
          this.canvas.fillRect(x+pctWidth,y+pctHeight,pctWidth,pctHeight);
          return;
        }
        if (width<1 || height<1){
          return;
        }

        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (i===1 && j===1){
              //中间一个大的
              this.canvas.fillRect(x+pctWidth,y+pctHeight,pctWidth,pctHeight);
            }else{
              this.drawSierpinski(x+i*pctWidth,y+j*pctHeight,
                pctWidth,pctHeight,path+1);
            }
          }
        }
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
