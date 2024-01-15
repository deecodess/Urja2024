const imageLinks1 = [
  "https://i.ibb.co/M8WxRfp/DSC-8468.jpg",
  "https://i.ibb.co/BqJBfRv/DSC-8467.jpg",
  "https://i.ibb.co/Wp6qGZw/DSC-8401.jpg",
  "https://i.ibb.co/VvHqhDz/DSC-8379.jpg",
  "https://i.ibb.co/F3FY1kK/DSC-0078.jpg",
  "https://i.ibb.co/zr5kP4t/DSC-0166.jpg",
  "https://i.ibb.co/y8CbF3p/DSC-0117.jpg",
  "https://i.ibb.co/fCnC0xg/DSC-0212.jpg",
  "https://i.ibb.co/sR0jprT/DSC-0349.jpg",
  "https://i.ibb.co/bRWfHP6/DSC-0368.jpg",
];
const imageLinks2 = [
  "https://i.ibb.co/98xXMHm/DSC-9841.jpg",
  "https://i.ibb.co/r5Ldr5Z/DSC-9896.jpg",
  "https://i.ibb.co/f46MMZS/DSC-9918.jpg",
  "https://i.ibb.co/RbP0Yhj/DSC-0006.jpg",
  "https://i.ibb.co/F3FY1kK/DSC-0078.jpg",
  "https://i.ibb.co/7n5vnpK/DSC-0115.jpg",
  "https://i.ibb.co/4pjM8Wd/DSC-0123.jpg",
  "https://i.ibb.co/hcCSsYt/DSC-0132.jpg",
  "https://i.ibb.co/q7FYRZs/DSC-0146.jpg",
  "https://i.ibb.co/xCmw5Wy/DSC-0154.jpg",
];
const imageLinks3 = [
  "https://i.ibb.co/Jq7PPRJ/DSC-0169.jpg",
  "https://i.ibb.co/5WH0KJ8/DSC-0173.jpg",
  "https://i.ibb.co/126s9FB/DSC-0182.jpg",
  "https://i.ibb.co/PcMYDzk/DSC-0271.jpg",
  "https://i.ibb.co/YRQBLKd/DSC-0290.jpg",
  "https://i.ibb.co/bKR37Kp/DSC-0291.jpg",
  "https://i.ibb.co/Wyx12wK/DSC-0303.jpg",
  "https://i.ibb.co/R4QG2kS/DSC-8403.jpg",
  "https://i.ibb.co/fQ6nyw3/DSC-8422.jpg",
  "https://i.ibb.co/D51NRyh/DSC-8535.jpg",
];
const imageLinks4 = [
  "https://i.ibb.co/jH025Fz/DSC-8572.jpg",
  "https://i.ibb.co/zhYNrPh/DSC-8577.jpg",
  "https://i.ibb.co/Brt5Sr4/DSC-8618.jpg",
  "https://i.ibb.co/d4VCZ50/DSC-8682.jpg",
  "https://i.ibb.co/KWKLpnN/DSC-8719.jpg",
  "https://i.ibb.co/ZWSKLP6/DSC-8765.jpg",
  "https://i.ibb.co/Sfgzqjd/DSC-8791.jpg",
  "https://i.ibb.co/6BSSJC6/DSC-8848.jpg",
  "https://i.ibb.co/MGt7W7h/DSC-8932.jpg",
  "https://i.ibb.co/pQ0hQzg/DSC-8952.jpg",
];
export function GenerateSlides1(length = 10) {
  return Array.from({ length }).map((value, index) => {
    return {
      src: imageLinks1[index % imageLinks1.length],
      alt: `Image ${index + 1}`,
    };
  });
}

export function GenerateSlides2(length = 10) {
  return Array.from({ length }).map((value, index) => {
    return {
      src: imageLinks2[index % imageLinks2.length],
      alt: `Image ${index + 1}`,
    };
  });
}
export function GenerateSlides3(length = 10) {
  return Array.from({ length }).map((value, index) => {
    return {
      src: imageLinks3[index % imageLinks3.length],
      alt: `Image ${index + 1}`,
    };
  });
}
export function GenerateSlides4(length = 10) {
  return Array.from({ length }).map((value, index) => {
    return {
      src: imageLinks4[index % imageLinks4.length],
      alt: `Image ${index + 1}`,
    };
  });
}
