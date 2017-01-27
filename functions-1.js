<!DOCTYPE html>
<html>
<head>
  <script>
    function invertNum(num) {
      document.write (num.toString().split("").reverse().join(""))
    }
  </script>
</head> 
<body>
  <form>
    <input type="button" onclick="invertNum(1234.7)" value="Call Function">
  </form>
</body>
</html>
