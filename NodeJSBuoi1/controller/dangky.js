module.exports = (req,res)=>{
  res.send(
    `<form action="/xulydangnhap" method="post">
      <input type="text" name="username"/>
      <input type="password" name="password"/>
      <input type="submit" value="dang nhap"/>
    </form>`
  )
};
