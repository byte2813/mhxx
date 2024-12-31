
class Main {
    constructor() {
      console.log("Main 实例已创建");  
        
      this.greet = () => {
          console.log("Main Hello World");
          return `Hello World`;
        }
    }

  /**
   * 获取sdk单例
   */
  static getIns() {
    if (!this.ins) {
      this.ins = new Main();
    }
    return this.ins;
  }

  
}

module.exports = Main;
