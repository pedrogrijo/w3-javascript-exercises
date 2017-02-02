<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Find the longest word within a string</title>
</head>
<body>
  <script>
  function find_longest_word(str)
{
  var array1 = str.split(" ");
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('a aaa aa a aba'));
  </script>
</body>
</html>
