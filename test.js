function capitalizeFirstLetter(string)
{
  var new_arr = string.split('_');
  var final_string = '';
  for (var word of new_arr)
  {
      final_string = final_string + word.charAt(0).toUpperCase() + word.slice(1);
  }
  return final_string;
}

console.log(capitalizeFirstLetter('client_admin_login'));
