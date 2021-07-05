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
    for (var word of new_arr)
    {
        final_string = final_string + word.charAt(0).toUpperCase() + word.slice(1);
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
