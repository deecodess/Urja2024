const imageLinks = [
  "https://drive.google.com/uc?export=view&id=1scxuWAu1A1OdlacmF2EFk0g9W-Mbyixk",
  "https://drive.google.com/uc?export=view&id=1ArV2XoVWdJW9tBaWqNaMg-yLojT1TGUr",
  "https://drive.google.com/uc?export=view&id=1_vMWflC3qdfEGVecTQOt7Y01KogfkH5U",
  "https://drive.google.com/uc?export=view&id=1M4ELKoIW_RjVqu_ws562YIJEXGgQeyfG",
  "https://drive.google.com/uc?export=view&id=1aKnRAkenDKkm0u564-iXPCJfv8hM9sDv",
  "https://drive.google.com/uc?export=view&id=1OKQTK3yQ1tT_7cxTonfAQp1YmJT_g0d8",
  "https://drive.google.com/uc?export=view&id=18cFs6bnYOA3Oi0CkuKwlQ1c30_THqFfW",
  "https://drive.google.com/uc?export=view&id=1bC0FsXzxR1rLdn_ZGdj5JqiK5g6GJXIb",
  "https://drive.google.com/uc?export=view&id=10uE5KUWk-mxgqDTqSdFcqDg3SbGZRWrv",
  "https://drive.google.com/uc?export=view&id=1hefNeBxA_K1z044dhJK-9iFVsAk6J4QD",
];
export function GenerateSlides(length = 10) {
  return Array.from({ length }).map((value, index) => {
    return {
      src: imageLinks[index % imageLinks.length],
      alt: `Image ${index + 1}`,
    };
  });
}
