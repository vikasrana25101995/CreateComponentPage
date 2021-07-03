import fs from 'fs';

export class CustomFile
{

  create_file(file_path)
  {
      fs.open(file_path, 'w', (err)=>{
         if(err)
         {
            return console.log('err');
         }
      });
  }


  copy_file( src_file, dest_file )
  {
    fs.copyFile(src_file, dest_file, (err) =>
    {
        var filename = dest_file.split('/');
        if (err)
        {
            throw err;
        }
        console.log(`${filename[filename.length-1]} ---------  file has been created`);
    });
  }


}
