let n = 8;

// روش اول

for (let line = n; line >= 1; line--) {
   let result = '';
   for (let space = 0; space < n - line; space++) {
      result += ' ';
   }
   for (let hashtag = 0; hashtag < line; hashtag++) {
      result += '# ';
   }
   console.log(result);
}

// روش دوم

for (let line = 1; line <= n; line++) {
   let result = '';
   for (let space = 1; space < line; space++) {
      result += ' ';
   }
   for (let hashtag = 0; hashtag <= n - line; hashtag++) {
      result += '# ';
   }
   console.log(result);
}

/*

# # # # # 
 # # # # 
  # # # 
   # # 
    # 

*/