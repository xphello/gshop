  <template>
    <header class="header">
        <slot name="left"></slot>
        <span class="header_title">
            <span class="header_title_text ellipsis">{{title}}</span>
        </span>
        <slot name="right"></slot>
    </header>
  </template>
  
  <script>
export default {
  props: {
    title: String
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
  
  <!-- <style lang="stylus" rel="stylesheet/stylus"> -->
  <style>
.header {
  width: 100%;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background-color: #02a774;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-around;
}
.header_title_text{
    display: inline-block;
    width: 140px;
    text-align: center;
}
.header_search {
    height: 30px;
    line-height: 30px;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 101;
    color: #fff;
    text-align: center;
    padding-left: 10px;
}
.header_login {
    height: 30px;
    line-height: 30px;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: 101;
    color: #fff;
    text-align: center;
    padding-right: 10px; 
}
</style>
  