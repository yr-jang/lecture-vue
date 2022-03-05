export default {
  data: [
    { keyword: "검색기록2", date: "12.03" },
    { keyword: "검색기록1", date: "12.02" },
    { keyword: "검색기록0", date: "12.01" },
  ],

  list() {
    // data를 return 하는 용도
    return Promise.resolve(this.data);
  },

  add(keyword = "") {
    // 추가될 data를 검색
    keyword = keyword.trim();
    if (!keyword) return;
    if (this.data.some((item) => item.keyword === keyword)) {
      this.remove(keyword);
    }

    const date = "12.31";
    this.data = [{ keyword, date }, ...this.data];
  },

  remove(keyword) {
    this.data = this.data.filter((item) => item.keyword !== keyword);
  },
};
