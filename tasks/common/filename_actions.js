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
    return string.charAt(0).toUpperCase() + string.slice(1);
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
