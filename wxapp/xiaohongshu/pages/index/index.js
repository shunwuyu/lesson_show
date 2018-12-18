import { loadNotes } from '../../utils/util'

let col1H = 0,
  col2H = 0;

Page({
  data: {
    page: 1,
    col1: [],
    col2: [],
    imgWidth: 0,
    total: 0,
    loadingCount: 0,
    notes: [],
    images: []
  },
  onLoad () {
    wx.getSystemInfo({
      success: (res) => {
        let ww = res.windowWidth;
        let wh = res.windowHeight;
        let imgWidth = ww * 0.465;
        this.setData({
          imgWidth: imgWidth
        })
        loadNotes(this.addNotes);
      },
    })
  },
  addNotes (res) {
    const total = res.total;
    let notes = res.data;
    console.log(notes);
    notes = notes.map((note, i) => {
      return {
        pic: note.pic,
        height: 0,
        ...note
      }
    });
    const images = notes.map((note, i) => {
      return {
        pic: note.pic,
        id: note._id
      }
    })
    
    this.setData({
      total: total,
      notes: notes,
      images,
      loadingCount: notes.length
    })
  },
  onImageLoad (e) {
    const imageId = e.currentTarget.dataset.id;
    // console.log(imageId);
    // console.log(imageId);
    let oImgW = e.detail.width;
    let oImgH = e.detail.height;
    let imgWidth = this.data.imgWidth;
    let scale = imgWidth / oImgW;
    let imgHeight = oImgH * scale;

    let notes = this.data.notes;
    let noteObj = null;
    for (let note of notes) {
      if (note._id === imageId) {
        noteObj = note;
        break;
      }
    } 
    // console.log(noteObj);
    noteObj.height = imgHeight
    let loadingCount = this.data.loadingCount -1;
    
    let col1 = this.data.col1;
    let col2 = this.data.col2;

    if(col1H <= col2H) {
      col1H += imgHeight;
      col1.push(noteObj);
    } else {
      col2H += imgHeight;
      col2.push(noteObj);
    }

    let data = {
      loadingCount,
      col1,
      col2
    }
    if (!loadingCount) {
      data.images = [];
    }
    this.setData(data);
  },
  upper () {
    console.log('111');
    this.data.page = 1;
    col1H = 0;
    col2H = 0;
    this.setData({
      col2: [],
      col1: [],
      page: this.data.page,
      images: [],
      notes: []
    })
    loadNotes(this.addNotes, this.data.page);
  },
  lower () {
    // let page = this.data.page + 1;
    this.data.page++;
    loadNotes(this.addNotes, this.data.page);
  }
})