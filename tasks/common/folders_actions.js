import fs from 'fs';

export class CustomFolder
{
    create_folder(path)
    {
        console.log(path);
        try
        {
          fs.mkdirSync(path);
        }
        catch(error)
        {
          console.log('The folder is already created');
        }
    }
}
