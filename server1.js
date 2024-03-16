const port = process.env.PORT1 || 8081;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT1}`
      .bgCyan.white
  );
});