import fs from 'fs';
import replace from 'replace-in-file';

export class FileName
{
  lowercaseFirstLetter(string)
  {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }

  capitalizeFirstLetter(string)
  {
    var new_arr = string.split('_');
    var final_string = '';
    for (var word in new_arr)
    {
        if(word != "_")
        {
          final_string = final_string + final_string.charAt(0).toUpperCase() + final_string.slice(1);
        }
    }
    return final_string;
  }

  async replace_text(file_path, string_to_replace, replacement_string)
  {
     const options = {
                        files: file_path,
                        from: string_to_replace,
                        to: replacement_string,
                    };

      await replace(options);
  }
}
