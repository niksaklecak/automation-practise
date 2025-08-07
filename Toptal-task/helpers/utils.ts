export class Utils {
  static async getRandomString(length: number) {
    return Math.random()
      .toString(36)
      .substring(2, 2 + length);
  }

  //placeholder method
  static async exampleMethod() {
    return "example";
  }
}
